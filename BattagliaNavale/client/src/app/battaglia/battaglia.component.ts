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
loaded=false;ù
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
myGrid=null;
opponentGrid=null;

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
    this.route.params.subscribe((params) => this.gameid = params.gameid);
    this.get_game()
    this.sio.connect().subscribe( (m) => {
    this.get_game();
        });
      }

 //funzione per ottenere il gioco
  public get_game() {
    this.gm.get_gameid(this.gameid).subscribe(
   ( games ) => {
     this.partita = games;
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

//funzione per ottenere i campi di gioco 
public get_grid(){
  if(this.partita.players.length<=1)
  return;
    this.gm.get_grid(this.gameid, this.us.get_id()).subscribe(( grids) => {
            this.myGrid = grids.myGrid;
            this.opponentGrid = grids.opponentGrid;
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



//funzione per ottenere il turno
public get_turn(){  
  if (this.partita.gameStatus==0){
    return;
  }
 
  this.gm.get_turn(this.gameid,this.us.get_id()).subscribe(
    ( turno ) => {
      this.turno = turno;
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
 //funzione  per verificare  la posizione dell'avversario nell'array player
public findOpponent(id:string){
  var user = JSON.parse(this.partita.players[0]);
  if(id!=user.userId)
  return 0
  else return 1
}

//funzione per impostare la nave da passare
 public setShip(selected:Ship,horizontal:boolean){
  this.setnave=true;
  Object.assign(this.MyShip, selected);
  this.MyShip.horizontal=horizontal;

    if(this.MyShip.size==2){
    this.myindex=this.cacciaindex;
      }
    if(this.MyShip.size==3){
    this.myindex=this.sottomarinoindex;
      }
    if(this.MyShip.size==4){
    this.myindex=this.carrozzataindex;
      }
    if(this.MyShip.size==5){
    this.myindex=this.portaindex;
      }
}
  
//funzione per posizionare la nave
  public post_ship(col: number, row:number, gameid:string,gridIndex:number,horizontal:boolean){
    if (this.MyShip.size==0){
      this.setnave=false;
      return; 
    }
    var txt  = ' { "gameId" :"' +gameid+'",'
    +'"shipIndex" :'+gridIndex+','
    +'"x":'+col+',"y":'+row+',"horizontal":'+horizontal+'}';
         var dati = JSON.parse(txt);
            this.gm.post_ship(dati).subscribe( (esito) => {
              if(esito){
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
                  }
              else  {
                this.setnave=false;
                     }
            }, (error) => {
              this.setnave=false;
      console.log('Error occurred while posting: ' + error);
      });
  
           
   
    }
//funzione per fare il colpo
    public fire(x: number,y: number, gameid:string){
      var txt  = ' { "id" :"' +gameid+'",'
      +'"x" :'+x+',"y":'+y+'}';
        var dati = JSON.parse(txt);
              this.gm.post_shot(dati).subscribe( () => {
               }, (error) => {
           });
          }
    
  hasBoat(col: number, row:number){
     var index= row*10+col
     if(this.myGrid==null)
     return;
    if(this.myGrid[index].ship!=-1)
      return true;
    return false;
  }
  myGridisSunk(col: number, row:number){
    var index= row*10+col
    if(this.myGrid==null)
     return;
  if((this.myGrid[index].sunk!=null) && (this.myGrid[index].sunk!!= undefined))
   return this.myGrid[index].sunk;
  return false;
  }
  opponentSunk(col: number, row:number){
    var index= row*10+col
    if(this.opponentGrid==null)
     return;
  if((this.opponentGrid[index].sunk!=null) && (this.opponentGrid[index].sunk!!= undefined))
   return this.opponentGrid[index].sunk;
  return false;
  }

  myGridIsHit(col: number, row:number){
    var index= row*10+col
    if(this.myGrid==null)
     return;
  return this.myGrid[index].shot
  
 }
 opponentIsHit(col: number, row:number){
  var index= row*10+col
  if(this.opponentGrid==null)
     return;
  return this.opponentGrid[index].shot
}

//verifica se sei il vincitore
iswin(){
  if (this.partita.winningPlayer==null)
  return
  if (this.partita.winningPlayer==this.findOpponent(this.us.get_id()))
  return false
  return true

}
      
  logout() {
    this.us.logout();
    this.router.navigate(['/']);
  }

}


