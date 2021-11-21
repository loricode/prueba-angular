import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AuthRoutingModule } from './auth-routing.module';
import { SigninComponent } from './signin/signin.component';
import { CoreModule } from '../core/core.module';
import { RecoverComponent } from './recover/recover.component';
import { RegisterComponent } from './register/register.component';


@NgModule({
  declarations: [
    SigninComponent,
    RecoverComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    RouterModule,
    CoreModule
  ]
})
export class AuthModule { }
