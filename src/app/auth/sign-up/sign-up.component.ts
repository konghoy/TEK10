import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from "@angular/router";
import { Usuario } from 'src/app/interfaces/Usuario';
import { UsuarioService } from 'src/app/services/usuario.service';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  opcionSeleccionada: string = '';
  arrUsuarios: Usuario[] = [];

  
  public nombre = new FormControl('');
  public telefono = new FormControl('');
  public correo = new FormControl();
  public password = new FormControl();
  public estatus = new FormControl('Creado');
  public perfil = new FormControl('');
  public fechaalta= new FormControl();

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
  ) { }

  

  ngOnInit(): void {
    console.log('---- ngOnInit SignUpComponent ' );
  }

  // On Signup link click
  onSignIn() {
    console.log('onSignIn' );
    this.router.navigate(['sign-in'], {
       relativeTo: this.route.parent });
  }

  seleccionarOpcion(opcion: string) {
    this.opcionSeleccionada = opcion;
  }

  guardarUsuario(){
    console.log(' -- guardarUsuario');
    console.log(this.opcionSeleccionada);
    //console.log(this.formRegistrousuario.value);
    this.formRegistrousuario.value.perfil = this.opcionSeleccionada;
    this.formRegistrousuario.value.fechaalta = '2024-09-26T16:30:00';
    //this.formRegistrousuario.value.estatus = 'Creado';
    console.log(this.formRegistrousuario.value);
  }

  guardarUsuarioApi(){
    console.log(' -- EMPIEZA A CREAR PROYECTO');
    this.formRegistrousuario.value.perfil = this.opcionSeleccionada;
    this.formRegistrousuario.value.fechaalta = '2024-09-26T16:30:00';
    console.log(this.formRegistrousuario.value);
    const confirmacion = window.confirm('¿Estás seguro de que deseas enviar RFQ ?');
    if (confirmacion) {    
      console.log(this.formRegistrousuario.value);      
      this.apiUsuario.guardarUsuario(this.formRegistrousuario.value).subscribe(
        (response) => {
          console.log('Data added successfully:', response);
        }, (error) => {
          console.error('Error adding data:', error);
        }
      );      
    } else {
      console.log('Acción cancelada');
    } 
    
  }

  submitForm() { }

}
