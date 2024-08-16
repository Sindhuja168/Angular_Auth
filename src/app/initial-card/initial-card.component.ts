import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-initial-card',
  standalone: true,
  templateUrl: './initial-card.component.html',
  styleUrls: ['./initial-card.component.css'],
 
})
export class InitialCardComponent {
  @Output() navigate = new EventEmitter<'login' | 'signUp'>();

  openLogin() {
    this.navigate.emit('login');
  }

  openSignUp() {
    this.navigate.emit('signUp');
  }
}
