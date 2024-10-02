import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { ValidtionsComponent } from './validtions/validtions.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { HttpClientModule } from '@angular/common/http';
import { ConfirmarRegistroComponent } from './confirmar-registro/confirmar-registro.component';
import { CorreoConfirmadoComponent } from './correo-confirmado/correo-confirmado.component';




@NgModule({
  declarations: [
    SignInComponent, 
    SignUpComponent,
    ForgotPasswordComponent, 
    ResetPasswordComponent, 
    ValidtionsComponent,
    ConfirmarRegistroComponent,
    CorreoConfirmadoComponent],
  imports: [
    CommonModule,
    NgbModule,
    AuthRoutingModule,
    ReactiveFormsModule,    
    MatSnackBarModule,HttpClientModule

  ]
})
export class AuthModule { }
