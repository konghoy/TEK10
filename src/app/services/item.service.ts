import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class ItemService {

    private apiUrl = `${environment.serverApiUrl}`;

    constructor(private http: HttpClient) { 
    }

    // Método GET
    obtenerItems(): Observable < any > {
        return this.http.get(`${this.apiUrl}/item`);
    }

    guardarItem(newData: any): Observable<any> {
        console.log(newData);
        return this.http.post<any>(`${this.apiUrl}/item`, newData);
    } 
  }