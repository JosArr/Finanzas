import {Component, OnInit} from '@angular/core';
import {UserService} from "../../services/UserService/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-client-menu',
  templateUrl: './client-menu.component.html',
  styleUrls: ['./client-menu.component.css']
})
export class ClientMenuComponent implements OnInit {
  ClientName: string = '';
  correoElectronico: string =  '';
  telefono: string = '';
  fotoPerfil: string = '';
  ClientLastName: string = '';


  purchases = [
    { name: 'Compra #1' },
    { name: 'Compra #2' }
  ];


  constructor(private userService: UserService, private router: Router) {}

  ngOnInit() {
    const ClientLoggedIn = this.userService.getUsuarioLogueado();
    if(ClientLoggedIn){
      this.ClientName = ClientLoggedIn.nombre;
      this.ClientLastName = ClientLoggedIn.apellido;
      this.correoElectronico = ClientLoggedIn.correo;
      this.telefono = ClientLoggedIn.telefono;
      this.fotoPerfil = ClientLoggedIn.perfil;
    }
  }
}
