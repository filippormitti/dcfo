import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { SocketioService } from '../socketio.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
 
 
  constructor( private sio: SocketioService , private us: UserService, private router: Router ) { }
  logout() {
    this.us.logout();
    this.router.navigate(['/']);
  }


}

