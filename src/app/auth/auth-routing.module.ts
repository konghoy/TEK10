import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ValidtionsComponent } from './validtions/validtions.component';
import { CorreoConfirmadoComponent } from './correo-confirmado/correo-confirmado.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'sign-in',
        component: SignInComponent,
        data: { title: 'Sign In' }
      },{
        path: 'sign-up',
        component: SignUpComponent,
        data: { title: 'Sign Up' }
      },{
        path: 'forgot-password',
        component: ForgotPasswordComponent,
        data: { title: 'Forgot Password' }
      },{
        path: 'reset-password',
        component: ResetPasswordComponent,
        data: { title: 'Reset Password' }
      },{
        path: 'detalle',
        component: CorreoConfirmadoComponent,
        data: { title: 'Correo Confirmado' }
      },{
        path: 'validtions',
        component: ValidtionsComponent,
        data: { title: 'Validacion' }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
