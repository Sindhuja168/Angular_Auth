import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  errorMessage: string | null = null;

  constructor(private authService: AuthService, private router: Router) { }

  onSubmit(form: any) {
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

  onForgotPassword() {
    this.router.navigate(['/forgot-password']);
  }

  onSignUp() {
    this.router.navigate(['/sign-up']);
  }

  onSave(form: any) {
    if (form.valid) {
      // Handle save logic here
      console.log('Form data saved:', form.value);
      alert('Details saved successfully.');
    }
  }
}
