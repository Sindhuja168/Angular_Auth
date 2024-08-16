import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-forgot-password',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent {
  errorMessage: string | null = null;

  constructor(private router: Router) { }

  onSubmit(form: any) {
    console.log('Forgot password form submitted');
    if (form.valid) {
      console.log('Forgot password request:', form.value);
      alert('Password reset instructions have been sent to your email.');
      this.router.navigate(['/']);
    } else {
      this.errorMessage = 'Please enter a valid email address.';
    }
  }

  hiddenForgotPassword() {
    this.router.navigate(['/login']);
  }
}
