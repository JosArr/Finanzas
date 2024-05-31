import {Component, OnInit} from '@angular/core';
import {ManagerService} from "../../services/ManagerService/manager.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-manager-menu',
  templateUrl: './manager-menu.component.html',
  styleUrls: ['./manager-menu.component.css']
})
export class ManagerMenuComponent implements OnInit{

  ManagerName: string = '';
  correoElectronico: string =  '';
  telefono: string = '';
  fotoPerfil: string = '';

  constructor(private managerService: ManagerService, private router:Router) { }

  menuItems=[
    {text: 'Lista Clientes'},
    {text: 'Añadir Cliente'},
    {text: 'Modificar Información'},
    {text: 'Reportes y estadísticas'},
    {text: 'Cerrar Sesión'}
  ];

  ngOnInit() {
    const ManagerLoggedIn = this.managerService.getManagerLogueado();
    if(ManagerLoggedIn){
      this.ManagerName = ManagerLoggedIn.nombre + ' ' + ManagerLoggedIn.apellido;
      this.correoElectronico = ManagerLoggedIn.correo;
      this.telefono = ManagerLoggedIn.telefono;
      this.fotoPerfil = ManagerLoggedIn.perfil;
    }
  }
}
