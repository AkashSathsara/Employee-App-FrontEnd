import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-view-all-employee',
  standalone: true,
  imports: [HttpClientModule,FormsModule,CommonModule],
  templateUrl: './view-all-employee.component.html',
  styleUrl: './view-all-employee.component.css'
})
export class ViewAllEmployeeComponent {

  public employeeList:any;

  constructor(private http:HttpClient){}

  loadEmployee(){
    this.http.get("http://localHost:8080/emp-controller/get-all").subscribe(
      res =>{
        this.employeeList=res;
        console.log(res);
    })
  }


}