import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ManageEmployeeComponent } from './pages/manage-employee/manage-employee.component';
import { ViewAllEmployeeComponent } from './pages/view-all-employee/view-all-employee.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ManageEmployeeComponent,ViewAllEmployeeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'emp-app';
}
