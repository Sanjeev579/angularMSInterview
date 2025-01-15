import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-employee',
  standalone: false,
  
  templateUrl: './create-employee.component.html',
  styleUrl: './create-employee.component.scss'
})
export class CreateEmployeeComponent implements OnInit {

  employeeForm: FormGroup;

  constructor(private fb:FormBuilder){
    this.employeeForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      department: ['', Validators.required],
      salary: ['', [Validators.required, Validators.min(0)]]
    });
  }


  ngOnInit(): void {
  }



  onSubmit(): void {
    if (this.employeeForm.valid) {
      console.log('Form Submitted:', this.employeeForm.value);
      // You can send the form data to a service or API here
    } else {
      console.log('Form is invalid');
    }
  }
}
