import { Component, inject } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Login } from '../../Models/login.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,CommonModule,HttpClientModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginObj:Login;
  private loginservice = inject(LoginService);
  constructor(private router:Router){
    this.loginObj = new Login();
  }

  onLogin() {
    this.router.navigateByUrl("/dashboard")
  }
}
