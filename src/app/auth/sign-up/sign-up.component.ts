import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from "@angular/router";
import { Usuario } from 'src/app/interfaces/Usuario';
import { UsuarioService } from 'src/app/services/usuario.service';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  opcionSeleccionada: string = '';
  arrUsuarios: Usuario[] = [];
  resultado: boolean | null = null;


  public nombre    = new FormControl('',[Validators.required]);
  public telefono  = new FormControl('',[Validators.required]);
  public correo    = new FormControl('',[Validators.required]);
  public password  = new FormControl('',[Validators.required]);
  public estatus   = new FormControl('Registrado');
  public perfil    = new FormControl('');
  public fechaalta = new FormControl();
  public formRegistrousuario = new FormGroup({
    nombre: this.nombre,
    telefono: this.telefono,
    correo: this.correo,
    password: this.password,
    estatus: this.estatus,
    perfil: this.perfil,
    fechaalta: this.fechaalta
  });

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private apiUsuario: UsuarioService,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    console.log('---- ngOnInit SignUpComponent ');
  }

  // On Signup link click
  onSignIn() {
    console.log('onSignIn');
    this.router.navigate(['sign-in'], {
      relativeTo: this.route.parent
    });
  }

  seleccionarOpcion(opcion: string) {
    console.log ('-- seleccionarOpcion ');
    console.log (opcion);
    console.log (this.formRegistrousuario.value);
    this.opcionSeleccionada = opcion;
    this.formRegistrousuario.value.perfil = this.opcionSeleccionada;
    console.log (this.formRegistrousuario.value);
  }

  guardarUsuario() {
    console.log(' -- guardarUsuario');//console.log(this.opcionSeleccionada);
    //console.log(this.formRegistrousuario.value);
    this.formRegistrousuario.value.perfil = this.opcionSeleccionada;
    this.formRegistrousuario.value.fechaalta = '2024-09-26T16:30:00';
    //this.formRegistrousuario.value.estatus = 'Creado';
    console.log(this.formRegistrousuario.value);
  }

  validarCorreoUsuario() {
    this.apiUsuario.obtenerUsuarioCorreoexiste(this.formRegistrousuario.value.correo).subscribe(res => {
      //this.resultado = res;      
      console.log('Respuesta de la API:', res);
    });
  }

  clickRegistro() {
    console.log('-- clickRegistro ');
    this.apiUsuario.obtenerUsuarioCorreoexiste(this.formRegistrousuario.value.correo).subscribe(res => {
      this.resultado = res;
      console.log('Respuesta de la API: obtenerUsuarioCorreoexiste', res);
      
      console.log(res.length);
      if (res.length == 1) {
        
        this.mostrarNotificacion('Ya existe una cuenta registrada con ese correo', 'ERROR');

      } else {
        this.correoDisponible();
        //this.mostrarNotificacion('Correo disponible', 'oks');
      }
    });
  }

    correoDisponible() {
    this.formRegistrousuario.value.perfil = this.opcionSeleccionada;
    this.formRegistrousuario.value.fechaalta = '2024-09-26T16:30:00';
    console.log(this.formRegistrousuario.value);
    const confirmacion = window.confirm('¿Estás seguro de que deseas enviar la informacion ?');
    
    if (confirmacion) {
      console.log(this.formRegistrousuario.value);
      this.apiUsuario.guardarUsuario(this.formRegistrousuario.value).subscribe(
        (response) => {
          console.log('Usuario guardado correctamente:', response);
          this.mostrarNotificacion('Registro finalizado, revisa tu correo para confirmar ', 'OK');
          this.enviarcorreo();
        }, (error) => {
          console.error('Error adding data:', error);
          this.mostrarNotificacion('Error al guardar el usuaro', 'close');
        }
      );
    } else {
      console.log('Acción cancelada');
    }
  }

  enviarcorreo(){
    console.log('-- enviar correo confirmacion');  
    this.apiUsuario.confirmarCorreo(this.formRegistrousuario.value.correo).subscribe(res => {
      //this.resultado = res;      
      console.log('Respuesta de la API:', res);
    });

  }


  mostrarNotificacion(mensaje1: string, mensaje2: string) {
    this.snackBar.open(mensaje1, mensaje2, {
      duration: 6000, // Duración en milisegundos
      horizontalPosition: 'right', // Posición horizontal: start, center, end, left, right
      verticalPosition: 'top', // Posición vertical: top, bottom
    });
  }
  submitForm() { }
}