import { Component, NgModule } from '@angular/core';
import { IUserCredentials } from '../user.model';
import { FormsModule } from '@angular/forms';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'bot-sign-in',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css'
})
export class SignInComponent {
  credintials : IUserCredentials = {email : '', password : ''};
  signInError : boolean = false;

  constructor(private userService : UserService, private router: Router){}

  signIn(){
    this.signInError = false;
    this.userService.signIn(this.credintials).subscribe({
      next: () => this.router.navigate(['/catalog']),
      error: () => this.signInError = true
    });
  }
}
