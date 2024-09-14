import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class CotizacionService {
  private apiUrl = `${environment.serverApiUrl}`;
  constructor(private http: HttpClient) { }
    // Método GET
    obtenerCotizacions(): Observable < any > {
      return this.http.get(`${this.apiUrl}/cotizacion`);
    }
    guardarCotizaion(newData: any): Observable<any> {
      console.log(newData);
      return this.http.post<any>(`${this.apiUrl}/cotizacion`, newData);
    } 
}