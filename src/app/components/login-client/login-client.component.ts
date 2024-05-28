import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../../services/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login-client',
  templateUrl: './login-client.component.html',
  styleUrls: ['./login-client.component.css']
})
export class LoginClientComponent implements OnInit{
  LoginClientForm!: FormGroup;

  constructor(private fb: FormBuilder, private userService: UserService,
              private router: Router, private cd: ChangeDetectorRef) {}

  ngOnInit() {
    this.LoginClientForm = this.fb.group({
      DNI: ['', [Validators.required, Validators.email]]
    });
  }
  onSubmit() {
    if (this.LoginClientForm.valid){
      this.userService.getUserByEmail(this.LoginClientForm.value.DNI).subscribe(user => {
        if (user && user.DNI === this.LoginClientForm.value.DNI) {
          console.log("Inicio de sesión exitoso");
          this.userService.setUsuarioLogueado(user);
          //this.router.navigate(['/manager']);
        } else {
          console.log("Inicio de sesión fallido");
        }
      });
    }
  }
}
