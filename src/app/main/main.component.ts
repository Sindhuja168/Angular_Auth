import { Component } from '@angular/core';
import { AuthComponent } from '../auth/auth.component';

@Component({
  selector: 'app-main',
  standalone: true,
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  imports:[AuthComponent]
})
export class MainComponent {
  // MainComponent logic here
}
