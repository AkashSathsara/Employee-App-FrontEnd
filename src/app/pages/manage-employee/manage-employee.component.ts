import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-manage-employee',
  standalone: true,
  imports: [FormsModule,HttpClientModule,CommonModule],
  templateUrl: './manage-employee.component.html',
  styleUrl: './manage-employee.component.css'
})
export class ManageEmployeeComponent {

 public employeeObj ={
  firstName :"",
  lastName:"",
  email:"",
  departmentId:"",
  roleId:""
 }

 constructor(private http:HttpClient){}

addEmployee(){
  this.http.post("http://localHost:8080/emp-controller/add-employee",this.employeeObj).subscribe(
    (data) =>{
      Swal.fire({
        title: "Employee Add!",
        text: "You clicked the button!",
        icon: "success"
      });
    }
  )

}
}
