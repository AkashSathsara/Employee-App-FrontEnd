import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ManageEmployeeComponent } from './pages/manage-employee/manage-employee.component';
import { AddEmployeeComponent } from './pages/add-employee/add-employee.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ManageEmployeeComponent,AddEmployeeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'emp-app';
}
