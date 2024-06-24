import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {UserService} from "../../services/UserService/user.service";

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrl: './add-client.component.css'
})
export class AddClientComponent {
  newClient = { nombre: '', apellido: '', telefono: '' , confiabilidad: 0 };

  constructor(private userService: UserService, private router: Router) {}

  onSubmit() {
    this.newClient.confiabilidad = Number(this.newClient.confiabilidad);

    if (Number.isInteger(this.newClient.confiabilidad)) {
      this.userService.addUser(this.newClient).subscribe(() => {
        this.router.navigate(['/clientList']);
      });
    } else {
      console.error("La confiabilidad debe ser un número entero");
    }
  }
}
