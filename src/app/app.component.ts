import { Component } from '@angular/core';
import {Router, RouterOutlet} from '@angular/router';
import {ManagerService} from "./services/manager.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public userService: ManagerService, private router: Router) {}
  title = 'Bill Mind';
  isLoggedIn: boolean = false;
}
