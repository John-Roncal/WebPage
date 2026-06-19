import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule,InputTextModule,RouterModule,CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  form: FormGroup = new FormGroup({})
  constructor() {
    this.form = new FormGroup({
      'username': new FormControl('', { nonNullable: true,validators: [ Validators.required] }),
      'password': new FormControl('', { nonNullable: true,validators: [ Validators.required] }),
      'phone': new FormControl('', { nonNullable: true,validators: [ Validators.required] }),
      'name': new FormControl('', { nonNullable: true,validators: [ Validators.required] }),
      'lastName': new FormControl('', { nonNullable: true,validators: [ Validators.required] }),
    })
  }

  submit(event: Event) {
    event.preventDefault()
    console.log(this.form.value)
  }
}
