import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-correo-confirmado',
  templateUrl: './correo-confirmado.component.html',
  styleUrls: ['./correo-confirmado.component.scss']
})
export class CorreoConfirmadoComponent implements OnInit {
  correo!: string;


  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private apiUsuario: UsuarioService,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    // Capturar los parámetros de consulta (query params)
    this.route.queryParamMap.subscribe(params => {
      this.correo = params.get('correo') || '';  // Obtener el valor de 'id' desde query params
    });

    this.actualizarEstatus();
  }


  actualizarEstatus(){
    console.log(' -- actualizarEstatus');
    //this.apiUsuario.
    this.apiUsuario.validarrCorreo(this.correo).subscribe(res => {
      console.log('Respuesta de la API:', res);
    });
  }


  onLogin() {
	  this.router.navigate(['sign-in'], { relativeTo: this.route.parent });
	}


}
