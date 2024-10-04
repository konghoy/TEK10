import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
  })
  
  export class UsuarioService {
    private apiUrl = `${environment.serverApiUrl}`;
    constructor(private http: HttpClient) { }
      
    // Método GET
      obtenerUsuarios(): Observable < any > {
        return this.http.get(`${this.apiUrl}/usuario`);
      }
      obtenerUsuarioCorreo(correo: string): Observable < any > {
        console.log(correo);
        return this.http.get(`${this.apiUrl}/usuario/correo?correo=${correo}`);
      }
      obtenerUsuarioCorreoexiste(correo: string): Observable <any> {
        console.log(correo);
        //return this.http.get(`${this.apiUrl}/usuario/correo?correo=${correo}`);
        return this.http.get(`${this.apiUrl}/usuario/correo?correo=${correo}`).pipe();
      }
      guardarUsuario(newData: any): Observable<any> {
        console.log(newData);
        return this.http.post<any>(`${this.apiUrl}/usuario`, newData);
      }
      confirmarCorreo(correo: string): Observable <any> {
        console.log(correo);
        //return this.http.get(`${this.apiUrl}/usuario/correo?correo=${correo}`);
        return this.http.get(`${this.apiUrl}/api/correo/enviar-confirmaciong?correo=${correo}`);
      }
      validarrCorreo(correo: string): Observable <any> {
        console.log(correo);
        //return this.http.get(`${this.apiUrl}/usuario/correo?correo=${correo}`);
        return this.http.get(`${this.apiUrl}/usuario/validarcorreo?correo=${correo}`);
      }
  }