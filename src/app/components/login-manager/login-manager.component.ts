import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {ManagerService} from "../../services/manager.service";

@Component({
  selector: 'app-login-manager',
  templateUrl: './login-manager.component.html',
  styleUrls: ['./login-manager.component.css']
})
export class LoginManagerComponent implements OnInit {
  loginManagerForm!: FormGroup;

  constructor(private fb: FormBuilder, private managerService: ManagerService,
              private router: Router, private cd: ChangeDetectorRef) {}

  ngOnInit() {
    this.loginManagerForm = this.fb.group({
      correo: ['', [Validators.required, Validators.email]],
      contrasena: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.loginManagerForm.valid) {
      this.managerService.getManagerByEmail(this.loginManagerForm.value.correo).subscribe(manager => {
        if (manager && manager.contrasena === this.loginManagerForm.value.contrasena) {
          console.log('Inicio de sesión exitoso');
          this.managerService.setManagerLogueado(manager);

          this.router.navigate(['/managerMenu']);
        } else {
          alert('Inicio de sesión fallido');
        }
      });
    }
  }
}
