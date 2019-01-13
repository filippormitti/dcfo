import { Component, OnInit} from '@angular/core';
import { User } from '../User';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { SocketioService } from '../socketio.service';
import { useAnimation } from '@angular/core/src/animation/dsl';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  private users: User[] = [];
  private errmessage = undefined;
  constructor( private sio: SocketioService , private us: UserService, private router: Router ) { }

  ngOnInit() {
    this.get_users();
    this.sio.connect().subscribe( (m) => {
      this.get_users();
    });
  }

  public get_users() {
    this.us.get_userlist().subscribe(
      ( users ) => {
        this.users = users;

      } , (err) => {

        // Try to renew the token
        this.us.renew().subscribe( () => {
          // Succeeded
          this.get_users();
        }, (err2) => {
          // Error again, we really need to logout
          this.logout();
        } );
      }
    );
  }
  public delete_user( id: number ) {
    this.us.delete_user(id).subscribe( (d) => {
      console.log('utente cancellato: ' + JSON.stringify(d) );
       this.errmessage = undefined;
       this.router.navigate(['/menu']);
    }, (err) => {
      console.log('errore cancellazione: ' + JSON.stringify(err.error.errormessage) );
      this.errmessage = err.error.errormessage;

    });

  }


  logout() {
    this.us.logout();
    this.router.navigate(['/']);
  }

}