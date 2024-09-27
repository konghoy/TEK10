import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
  })
  
  export class ProjectoService {
    private apiUrl = `${environment.serverApiUrl}`;
    constructor(private http: HttpClient) { }
      
    // Método GET
      obtenerProyectos(): Observable < any > {
        return this.http.get(`${this.apiUrl}/proyecto`);
      }
      obtenerNumeroProyectos(): Observable < any > {
        return this.http.get(`${this.apiUrl}/proyecto/numero`);
      }
      guardarProyecto(newData: any): Observable<any> {
        console.log(newData);
        return this.http.post<any>(`${this.apiUrl}/proyecto`, newData);
      } 
  }