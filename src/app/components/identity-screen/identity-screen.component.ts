import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {ManagerService} from "../../services/manager.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-identity-screen',
  templateUrl: './identity-screen.component.html',
  styleUrls: ['./identity-screen.component.css']
})
export class IdentityScreenComponent{

  typeForm!: FormGroup;

  constructor(private fb: FormBuilder, private userService: ManagerService,
              private router: Router, private cd: ChangeDetectorRef) {}

  toManager(){
    this.router.navigate(['/loginManager'])
  }
  toClient(){
    this.router.navigate(['/loginClient'])
  }
}
