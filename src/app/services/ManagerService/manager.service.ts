import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";


@Injectable({
  providedIn: 'root'
})

export class ManagerService {
  private apiURL = 'http://localhost:3000/manager';
  isLoggedIn: boolean = false;
  managerLogueado: any;
  constructor(private http: HttpClient) { }

  addUser(user: any): Observable<any> {
    return this.http.post<any>(this.apiURL, user);
  }

  getManagerByEmail(email: string): Observable<any> {
    return this.http.get<any[]>(this.apiURL).pipe(
      map(managers => managers.find(manager => manager.correo === email))
    );
  }
  editarUsuario(manager: any): Observable<any> {
    const url = `${this.apiURL}/${manager.id}`;
    return this.http.put<any>(url, manager);
  }
  getUserPassword(): Observable<string[]> {
    return this.http.get<any[]>(this.apiURL).pipe(
      map(managers => managers.map(manager => manager.contrasena))
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
    this.managerLogueado = null;
  }
  setManagerLogueado(manager: any) {
    this.managerLogueado = manager;
    this.isLoggedIn = true;
  }
  getManagerLogueado() {
    return this.managerLogueado;
  }

}
