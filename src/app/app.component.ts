import { Component } from '@angular/core';
import {Router, RouterOutlet} from '@angular/router';
import {UserService} from "./services/user.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public userService: UserService, private router: Router) {}
  title = 'Bill Mind';
  isLoggedIn: boolean = false;
}
