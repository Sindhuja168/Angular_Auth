import { Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { AuthComponent } from './auth/auth.component'; // Import the new component
import { authGuard } from './auth.guard';

export const routes: Routes = [
  { path: '', component: AuthComponent }, // Set AuthComponent as the default route
  { path: 'main', component: MainComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [authGuard] },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: '**', redirectTo: '' } // Redirect any unknown paths to the default route
];
