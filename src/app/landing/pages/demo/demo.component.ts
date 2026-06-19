import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-demo',
  standalone: true,
  imports: [RouterModule,ReactiveFormsModule,CommonModule,InputTextModule,FooterComponent],
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.css'
})
export class DemoComponent {
  form: FormGroup = new FormGroup({})
  constructor(

    private http: HttpClient

  ) {

    this.form = new FormGroup({
      'correo': new FormControl('', { nonNullable: true,validators: [ Validators.required,Validators.email] }),
      'celular': new FormControl('', {nonNullable: true,validators: [ Validators.required] }),
      'direccion': new FormControl('', { nonNullable: true,validators: [ Validators.required] }),
    });

  }

  loading = false;
  message = '';
  formSubmitted = false;

  hasError(controlName: string): boolean {
    const control = this.form.get(controlName);
    return !!control && control.invalid && (control.dirty || control.touched || this.formSubmitted);
  }

  allowOnlyNumbers(event: KeyboardEvent) {
    const charCode = event.charCode;
    if (charCode < 48 || charCode > 57) {
      event.preventDefault(); // solo permite números del 0 al 9
    }
  }

  submit(event: Event) {
    event.preventDefault();

    const mensaje = `
  ¡Hola!
  Estoy interesado(a) en solicitar una cita para una demostración del sistema de facturación electrónica.
  Por favor, contáctame. ¡Gracias!
    `;

    const url = `https://wa.me/51983180125?text=${encodeURIComponent(mensaje)}`;
    window.open(url, '_blank');
  }


}
