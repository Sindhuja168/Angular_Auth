import { Component } from '@angular/core';
import { MainComponent } from './main/main.component';
import { CommonModule } from '@angular/common';
import { Router } from 'express';
import { RouterModule } from '@angular/router';
import  {AuthComponent }from './auth/auth.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, MainComponent,RouterModule,AuthComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {}
