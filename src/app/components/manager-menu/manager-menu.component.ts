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

  showPopup = false;
  nombre: string = '';
  apellido: string = '';
  nombreEditado: string = '';
  apellidoEditado: string = '';
  correoEditado: string = '';
  telefonoEditado: string = '';
  editandoNombre: boolean = false;
  editandoApellido: boolean = false;
  editandoCorreo: boolean = false;
  editandoTelefono: boolean = false;

  constructor(private managerService: ManagerService, private router:Router) { }

  menuItems=[
    {icon: 'fa fa-list-ul', text: 'Lista Clientes'},
    {icon: 'fa fa-user-plus', text: 'Añadir Cliente'},
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
      case 'Añadir Cliente':
        this.router.navigate(['/add-client']);
        break;
      case 'Créditos':
        this.router.navigate(['/credits']);
        break;
    }
  }

  showProfilePopUp() {
    this.showPopup = !this.showPopup;
  }

  guardarDatos() {
    this.nombre = this.nombreEditado;
    this.editandoNombre = false;

    this.apellido = this.apellidoEditado;
    this.editandoApellido = false;

    this.correoElectronico = this.correoEditado;
    this.editandoCorreo = false;

    this.telefono = this.telefonoEditado;
    this.editandoTelefono = false;

    const usuarioLogueado = this.managerService.getManagerLogueado();
    usuarioLogueado.name = this.nombre;
    usuarioLogueado.last_name = this.apellido;
    usuarioLogueado.email = this.correoElectronico;
    usuarioLogueado.phone_number = this.telefono;

    this.managerService.editarUsuario(usuarioLogueado).subscribe(response => {
      if (response) {
        console.log('Nombre de usuario actualizado en el servidor');
      } else {
        console.error('Error al actualizar el nombre de usuario');
      }
    });
  }

  editarDatos() {
    this.nombreEditado = this.nombre;
    this.editandoNombre = true;

    this.apellidoEditado = this.apellido;
    this.editandoApellido = true;

    this.correoEditado = this.correoElectronico;
    this.editandoCorreo = true;

    this.telefonoEditado = this.telefono;
    this.editandoTelefono = true;
  }

}
