import { Player } from './../Player';
import { Ship } from './../Ship';
import { Board} from './../Battaglia';
import { Component, OnInit,Input } from '@angular/core';
import { PartiteService } from '../partite.service';
import { Game} from '../Game';
import { UserService } from '../user.service';
import { Router, ActivatedRouteSnapshot } from '@angular/router';
import { SocketioService } from '../socketio.service';


@Component({
  selector: 'app-battaglia',
  templateUrl: './battaglia.component.html',
  styleUrls: ['./battaglia.component.css']
})
export class BattagliaComponent implements OnInit {
  @Input('theGame') theGame: Game;
  posizione;
  MyBoard: Board = new Board();
  OpponentBoard: Board = new Board();
 // Cacciatorpediniere: Ship= new Ship();
 // Sottomarino: Ship= new Ship();
 // Corazzata: Ship= new Ship();
//Portaerei: Ship= new Ship();
 // MyShip: Ship= new Ship();
 // MyPartita:Player=new Player();



  constructor( private sio: SocketioService , private gm:PartiteService, private us: UserService, private router: Router ) { }
  //this.Sottomarino.size=3;
 // this.Cacciatorpediniere.size=1;
 // this.Corazzata.size=4;
 // this.Portaerei.size=5;
 // this.Sottomarino.horizontal=true;
 // this.Cacciatorpediniere.horizontal=true;
 // this.Corazzata.horizontal=true;
//  this.Portaerei.horizontal=true;

 
  ngOnInit() {
  }

 // setShip(selected:Ship){
 //   this.MyShip=selected;
  //  console.log('ho settato la nave: ' + JSON.stringify(this.MyShip) );
//  }
  
  posNave(col: number, row:number){
    this.posizione=this.square(col,row);
    console.log('la posizione: ' + JSON.stringify(this.posizione) );
  //  this.MyShip.x=row;
  //  this.MyShip.y=col;
 //   for(var i: number = 0; i < this.MyShip.size; i++)
  //  this.MyPartita.shipGrid[row][col+i]=1;
  //  console.log('le coordinate: ' + JSON.stringify(this.MyShip) );

  }

  square(y: number, x:number){
    return {
      x,y
  };

  }
  isHit(col: number, row:number){
   //  if(this.MyPartita.shipGrid[row][col]==1)
    return true;
  //  return false;
  }
      
  

 
}


