import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";


@Injectable({
  providedIn: 'root'
})

export class UserService {
  private apiURL = 'https://my-json-server.typicode.com/JosArr/databaseFinanzas/usuarios';
  isLoggedIn: boolean = false;
  usuarioLogueado: any;
  constructor(private http: HttpClient) { }

  addUser(user: any): Observable<any> {
    return this.http.post<any>(this.apiURL, user);
  }

  getUserByEmail(email: string): Observable<any> {
    return this.http.get<any[]>(this.apiURL).pipe(
      map(users => users.find(user => user.correo === email))
    );
  }
  editarUsuario(usuario: any): Observable<any> {
    const url = `${this.apiURL}/${usuario.id}`;
    return this.http.put<any>(url, usuario);
  }
  getUserPassword(): Observable<string[]> {
    return this.http.get<any[]>(this.apiURL).pipe(
      map(users => users.map(user => user.contrasena))
    );
  }
  loginUser(email: string, password: string): Observable<any> {
    const loginData = {
      correo: email,
      contrasena: password,
    };


    return this.http.post<any>(`${this.apiURL}/login`, loginData).pipe(
      map((response) => {
        if (response) {
          this.isLoggedIn = true;
        }
        return response;
      })
    );
  }
  cerrarSesion() {
    this.isLoggedIn = false;
    this.usuarioLogueado = null;
  }
  setUsuarioLogueado(usuario: any) {
    this.usuarioLogueado = usuario;
    this.isLoggedIn = true;
  }
  getUsuarioLogueado() {
    return this.usuarioLogueado;
  }

}
