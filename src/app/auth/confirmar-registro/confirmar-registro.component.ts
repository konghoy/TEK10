import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-confirmar-registro',
  templateUrl: './confirmar-registro.component.html',
  styleUrls: ['./confirmar-registro.component.scss']
})
export class ConfirmarRegistroComponent implements OnInit {
  mensaje: string = '';


  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit(): void {
    // Obtener el token de confirmación de la URL
    const token = this.route.snapshot.queryParamMap.get('token');

    // Llamar a la API de confirmación usando el token
    this.http.get(`http://localhost:8080/api/usuario/confirmar?token=${token}`)
      .subscribe({
        next: (response: any) => {
          this.mensaje = 'Tu cuenta ha sido confirmada exitosamente.';
        },
        error: (error) => {
          this.mensaje = 'Hubo un problema al confirmar tu cuenta.';
        }
      });
  }

}
