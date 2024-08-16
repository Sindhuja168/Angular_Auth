import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {
  timeToShowLogin = 400;
  timeToHiddenLogin = 200;
  timeToShowSignUp = 100;
  timeToHiddenSignUp = 400;
  timeToHiddenAll = 500;
  errorMessage: string | null = null;
  showLoginForm = false;
  showSignUpForm = false;

  constructor(private authService: AuthService, private router: Router) {}

  changeToLogin() {
    this.showLoginForm = true;
    this.showSignUpForm = false;
  }

  changeToSignUp() {
    this.showLoginForm = false;
    this.showSignUpForm = true;
  }

  hiddenLoginAndSignUp() {
    this.showLoginForm = false;
    this.showSignUpForm = false;
  }

  onLoginSubmit(form: any) {
    if (form.valid) {
      const { email, password } = form.value;
      this.authService.login(email, password).subscribe(
        response => {
          localStorage.setItem('access_token', response.access_token);
          this.router.navigate(['/dashboard']);
        },
        error => {
          this.errorMessage = 'Invalid email or password';
        }
      );
    }
  }

  onSignUpSubmit(form: any) {
    if (form.valid) {
      // Handle sign-up logic
      alert('Sign up successful. Redirecting to dashboard...');
      this.router.navigate(['/dashboard']);
    }
  }

  onForgotPassword() {
    this.router.navigate(['/forgot-password']);
  }
}

// Ensure the component is exported
export default AuthComponent;
