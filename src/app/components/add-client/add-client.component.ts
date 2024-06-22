import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {UserService} from "../../services/UserService/user.service";

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrl: './add-client.component.css'
})
export class AddClientComponent {
  newClient = { nombre: '', apellido: '', telefono: '' };

  constructor(private userService: UserService, private router: Router) {}

  onSubmit() {
    this.userService.addUser(this.newClient).subscribe(() => {
      this.router.navigate(['/clientList']);
    });
  }

}
