import { Component, OnInit, Input } from '@angular/core';
import { PartiteService } from '../partite.service';
import { Game} from '../Game';
import { UserService } from '../user.service';
import { Router, ActivatedRouteSnapshot } from '@angular/router';
import { SocketioService } from '../socketio.service';
import { jsonpCallbackContext } from '@angular/common/http/src/module';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent implements OnInit {
  
  private games: Game[] = [];
  private partita:Game;
  
  constructor( private sio: SocketioService , private gm:PartiteService, private us: UserService, private router: Router ) { }

  ngOnInit() {
    this.get_listgames();
    this.sio.connect().subscribe( (m) => {
      this.get_listgames();
    });
   
  }

  public get_listgames() {
       this.gm.get_gamelist().subscribe(
      ( games ) => {
        this.games = games;
      } , (err) => {
        // Try to renew the token
        this.us.renew().subscribe( () => {
          // Succeeded
          this.get_listgames();
        }, (err2) => {
          // Error again, we really need to logout
          this.logout();
        } );
      }
    );
  }

  public Join_user( idgame: string,idus:number ) {
    var txt  = ' { "id" :"' +idgame+'",'+'"userId" :"'+idus+'"}';
    var dati = JSON.parse(txt);
        this.gm.join_game(dati).subscribe( () => {
          }, (error) => {
    console.log('Error occurred while posting: ' + error);
    });

 
  }
  
  public Create_game( idus:string ) {
  var text  = ' { "user1Id" :"' +idus+ '"' + '}' ;
  var id = JSON.parse(text);
      this.gm.post_game(id).subscribe( (partita) => {
       this.partita=partita;
         this.router.navigate(['/battaglia',this.partita._id  ]);
       }, (error) => {
    console.log('Error occurred while posting: ' + error);
      });
  }
     
  

  logout() {
    this.us.logout();
    this.router.navigate(['/']);
  }

}
