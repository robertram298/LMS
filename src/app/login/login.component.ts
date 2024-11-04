import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Login } from '../../Models/login.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginObj:Login;

  constructor(){
    this.loginObj = new Login();
  }

  onLogin() {
    
  }
}
