import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from "@angular/router";
import { Usuario } from 'src/app/interfaces/Usuario';
import { UsuarioService } from 'src/app/services/usuario.service';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  public correo = new FormControl();
  public password = new FormControl();
  banderaUsuario: boolean ;
  public formLogin = new FormGroup({    
    correo: this.correo,
    password: this.password
  });
  arrUsuarios: Usuario[] = [];

  constructor(
    private router: Router, 
    private route: ActivatedRoute,
    private apiUsuario: UsuarioService
  ) { }

  ngOnInit(): void {
  }
  // On Forgotpassword link click
  onForgotpassword() {
    this.router.navigate(['forgot-password'], { relativeTo: this.route.parent });
  }
  // On Signup link click
  onSignup() {
    console.log('ENTRAR INICIAR SESION');
    this.router.navigate(['sign-up'], { relativeTo: this.route.parent });
  }
  login() {
    console.log('--- login ');

    //this.router.navigate(['validtions'], { relativeTo: this.route.parent });
    this.buscarUsuario();
  }
  admin() {
    this.router.navigate(['rfq'], { relativeTo: this.route.parent });
  }

  buscarUsuario(){

    console.log('--- buscarUsuario ');
    console.log(this.formLogin.value.correo);
    this.apiUsuario.obtenerUsuarioCorreo(this.formLogin.value.correo).subscribe(
      (response) => {
        this.arrUsuarios= response;
        console.log('Data added successfully:', response);
        console.log(response);
        console.log(this.arrUsuarios.length);
        this.banderaUsuario = true;
        console.log(this.banderaUsuario);
        
      }, (error) => {
        console.error('Error adding data:', error);
        this.banderaUsuario = false;
        console.log(this.banderaUsuario);
        
      }
    );      
    console.log(this.banderaUsuario);
  }

  submitForm() { }
}