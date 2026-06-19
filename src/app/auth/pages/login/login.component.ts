import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule,InputTextModule,RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  form: FormGroup = new FormGroup({})
  constructor() {
    this.form = new FormGroup({
      'username': new FormControl('', { nonNullable: true,validators: [ Validators.required] }),
      'password': new FormControl('', { nonNullable: true,validators: [ Validators.required] }),
    })
  }

  submit(event: Event) {
    event.preventDefault()
    console.log(this.form.value)
  }

}
