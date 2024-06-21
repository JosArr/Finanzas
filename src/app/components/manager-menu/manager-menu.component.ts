import {Component, OnInit} from '@angular/core';
import {ManagerService} from "../../services/ManagerService/manager.service";
import {Router} from "@angular/router";

/*function popUP() {
  alert("Funciona perroooooos");
}
*/
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
    {icon: 'fa fa-list-ul', text: 'Lista Clientes'},
    {icon: 'fa fa-user-plus', text: 'Añadir Cliente'},
    {icon: 'fa fa-pen-to-square', text: 'Modificar Información'},
    {icon: 'fa fa-chart-column', text: 'Créditos'}
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
  cerrarSesion(){
    this.managerService.cerrarSesion();
    this.router.navigate(['/loginManager']);
  }

  navigateTo(menuItemText: string){
    switch(menuItemText){
      case 'Lista Clientes':
        this.router.navigate(['/clientList']);
        break;
      case 'Créditos':
        this.router.navigate(['/credits']);
        break;
    }
  }
}
