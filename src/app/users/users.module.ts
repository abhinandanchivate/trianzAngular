import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { RegisterComponent } from './components/auth/register/register.component';
import { LoginComponent } from './components/auth/login/login.component';
import { FormsModule } from '@angular/forms';
import { AuthService } from './services/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpInterceptors } from '../shared/interceptors';

@NgModule({
  declarations: [RegisterComponent, LoginComponent],
  providers: [AuthService, HttpInterceptors],
  imports: [CommonModule, FormsModule, HttpClientModule, UsersRoutingModule],
})
export class UsersModule {}
