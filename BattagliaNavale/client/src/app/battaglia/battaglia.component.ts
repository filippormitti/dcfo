import { Player } from './../Player';

import { Ship } from './../Ship';
import { Board} from './../Battaglia';
import { Component, OnInit,Input } from '@angular/core';
import { PartiteService } from '../partite.service';
import { Game} from '../Game';
import { UserService } from '../user.service';
import { Router, ActivatedRoute } from '@angular/router';
import { SocketioService } from '../socketio.service';



@Component({
  selector: 'app-battaglia',
  templateUrl: './battaglia.component.html',
  styleUrls: ['./battaglia.component.css']
})
export class BattagliaComponent implements OnInit {
  loaded=false;
  partita: Game;
gameid: string;
posizione;
MyBoard: Board = new Board();
OpponentBoard: Board = new Board();
Cacciatorpediniere: Ship= new Ship();
Sottomarino: Ship= new Ship();
Corazzata: Ship= new Ship();
Portaerei: Ship= new Ship();
MyShip: Ship= new Ship();
cacciaindex=3;
sottomarinoindex=5;
carrozzataindex=7;
portaindex=8;
myindex: number;
turno:boolean;
setnave=true;
myGrid
opponentGrid







  constructor(private route: ActivatedRoute, private sio: SocketioService , private gm:PartiteService, private us: UserService, private router: Router ) {
  this.MyShip.horizontal=true;
  this.MyShip.size=0;
  this.Cacciatorpediniere.size=2;
  this.Sottomarino.size=3;
  this.Corazzata.size=4;
  this.Portaerei.size=5;
  this.Sottomarino.horizontal=true;
  this.Cacciatorpediniere.horizontal=true;
  this.Corazzata.horizontal=true;
  this.Portaerei.horizontal=true;

   }
  
 
  ngOnInit() {
    this.route.params.subscribe((params) => this.gameid = params.gameid
    );
    this.get_game()
    this.sio.connect().subscribe( (m) => {
    this.get_game();
    
    });
    
   
    }

  public get_game() {
    this.gm.get_gameid(this.gameid).subscribe(
   ( games ) => {
     this.partita = games;
      console.log('assegno partita');
      this.get_turn();
      this.get_grid();
     this.loaded=true;
   } , (err) => {


     // Try to renew the token
     this.us.renew().subscribe( () => {
       // Succeeded
       this.get_game();
     }, (err2) => {
       // Error again, we really need to logout
       this.logout();
     } );
   }
 );
}

public get_grid() {
  this.gm.get_grid(this.gameid).subscribe(
 ( grids) => {
   if((this.findOpponent(this.us.get_id()))==0){
     this.myGrid = grids.player1;
     console.log('MYgrids vale '+JSON.stringify(this.myGrid));
   this.opponentGrid=grids.player0;
      console.log('Opponent vale '+JSON.stringify(this.opponentGrid));
   }
   else{
    this.myGrid = grids.player0;
    console.log('MYgrids vale '+JSON.stringify(this.myGrid));
  this.opponentGrid=grids.player1;
     console.log('Opponent vale '+JSON.stringify(this.opponentGrid));
  }

    console.log('assegno partita');
    
 } , (err) => {


   // Try to renew the token
   this.us.renew().subscribe( () => {
     // Succeeded
     this.get_game();
   }, (err2) => {
     // Error again, we really need to logout
    // this.logout();
   } );
 }
);
}
public ruota(ship:Ship){
  if (ship.horizontal)
  ship.horizontal=false;
  ship.horizontal=true;
}
public get_turn(){  
  if (this.partita.gameStatus==0){
    console.log('entro in stato 0');
    return;
  }
 

  this.gm.get_turn(this.gameid,this.us.get_id()).subscribe(
    ( turno ) => {
console.log('id opponent è = '+ this.findOpponent(this.us.get_id()))
console.log('il mio id è = '+ this.us.get_id())
      this.turno = turno;
      console.log('turno vale'+turno);
         } , (err) => {
 
      // Try to renew the token
      this.us.renew().subscribe( () => {
        // Succeeded
        this.get_turn();
      }, (err2) => {
        console.log('generato errore turno');
        // Error again, we really need to logout
        //this.logout();
      } );
    }
  );
 }
public findOpponent(id:string){
  var user = JSON.parse(this.partita.players[0]);
  if(id!=user.userId)
  return 0
  else return 1
}

 public setShip(selected:Ship,horizontal:boolean){
  this.setnave=true;
  Object.assign(this.MyShip, selected);
  this.MyShip.horizontal=horizontal;

    if(this.MyShip.size==2){
    this.myindex=this.cacciaindex;
    console.log('myindex vale' +this.myindex);
    console.log('cacciaindex vale' +this.cacciaindex);
  }
    if(this.MyShip.size==3){
    this.myindex=this.sottomarinoindex;
    console.log('myindex vale' +this.myindex);
    console.log('cacciaindex vale' +this.sottomarinoindex);
  }
    if(this.MyShip.size==4){
    this.myindex=this.carrozzataindex;
    console.log('myindex vale' +this.myindex);
    console.log('cacciaindex vale' +this.carrozzataindex);
  }
    if(this.MyShip.size==5){
    this.myindex=this.portaindex;
    console.log('myindex vale' +this.myindex);
    console.log('cacciaindex vale' +this.portaindex);
  }
    console.log('ho settato la nave: ' + JSON.stringify(this.MyShip) );
}
  
  public post_ship(col: number, row:number, gameid:string,gridIndex:number,horizontal:boolean){
    if (this.MyShip.size==0){
      this.setnave=false;
      console.log('seleziona nave')
      return; 
    }
    var txt  = ' { "gameId" :"' +gameid+'",'
    +'"shipIndex" :'+gridIndex+','
    +'"x":'+col+',"y":'+row+',"horizontal":'+horizontal+'}';
    console.log('il valore di txt' +txt);
      var dati = JSON.parse(txt);
            this.gm.post_ship(dati).subscribe( (esito) => {
              if(esito){
                console.log('il valore di esito è ' +esito);
              if((0<=gridIndex)&&(gridIndex<=3))
              this.cacciaindex=this.cacciaindex -1;
              if((4<=gridIndex)&&(gridIndex<=5))
              this.sottomarinoindex=this.sottomarinoindex-1;
              if((6<=gridIndex)&&(gridIndex<=7))
              this.carrozzataindex=this.carrozzataindex-1;
              if(gridIndex==8)
              this.portaindex=this.portaindex-1;
              this.MyShip.size=0;
              this.setnave=true;
                     console.log('nave postata' +txt);
              }
              else  {
                this.setnave=false;
                console.log('il valore di esito è ' +esito);}

            }, (error) => {
              this.setnave=false;
      console.log('Error occurred while posting: ' + error);
      });
  
           
   
    }

    public fire(x: number,y: number, gameid:string){
     
      var txt  = ' { "id" :"' +gameid+'",'
      +'"x" :'+x+',"y":'+y+'}';
      console.log('il valore di txt' +txt);
        var dati = JSON.parse(txt);
              this.gm.post_shot(dati).subscribe( () => {
               
              }, (error) => {
           });
    
             
     
      }
    
  //  this.MyShip.x=row;
  //  this.MyShip.y=col;
 //   for(var i: number = 0; i < this.MyShip.size; i++)
  //  this.MyPartita.shipGrid[row][col+i]=1;
  //  console.log('le coordinate: ' + JSON.stringify(this.MyShip) );

  

 

  
  hasBoat(col: number, row:number){
     var index= row*10+col
   if(this.myGrid[index].ship!=-1)
    return true;
   return false;
  }
  myGridisSunk(col: number, row:number){
    var index= row*10+col
  if((this.myGrid[index].sunk!=null) && (this.myGrid[index].sunk!!= undefined))
   return this.myGrid[index].sunk;
  return false;
  }
  opponentSunk(col: number, row:number){
    var index= row*10+col
  if((this.opponentGrid[index].sunk!=null) && (this.opponentGrid[index].sunk!!= undefined))
   return this.opponentGrid[index].sunk;
  return false;
  }

  myGridIsHit(col: number, row:number){
    var index= row*10+col
  return this.myGrid[index].shot
  
 }
 opponentIsHit(col: number, row:number){
  var index= row*10+col
if(this.opponentGrid[index].shot==2)
return true;
if(this.opponentGrid[index].shot==1)
return false;
}
      
  logout() {
    this.us.logout();
    this.router.navigate(['/']);
  }


 
}


