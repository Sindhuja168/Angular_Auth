import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  constructor(private router: Router) { }

  onSubmit(form: any) {
    if (form.valid) {
      // Handle sign-up logic here
      console.log('Sign up request:', form.value);
      alert('Sign up successful. Please log in.');
      this.router.navigate(['/login']);
    }
  }
}
