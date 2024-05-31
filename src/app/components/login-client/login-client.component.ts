import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {UserService} from "../../services/UserService/user.service";

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
      correo: ['', [Validators.required, Validators.email]],
      contrasena: ['', Validators.required]
    });
  }
  onSubmit() {
    if (this.LoginClientForm.valid){
      this.userService.getUserByEmail(this.LoginClientForm.value.correo).subscribe(user => {
        if (user && user.contrasena === this.LoginClientForm.value.contrasena) {
          console.log("Inicio de sesión exitoso");
          this.userService.setUsuarioLogueado(user);

          this.router.navigate(['/clientMenu']);
        } else {
          alert("Inicio de sesión fallido");
        }
      });
    }
  }
}
