import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-libro-reclamaciones',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule, FooterComponent],
  templateUrl: './libro-reclamaciones.component.html',
  styleUrl: './libro-reclamaciones.component.css'
})
export class LibroReclamacionesComponent {

  private GOOGLE_SHEETS_URL =
    'https://script.google.com/macros/s/AKfycbxkRM0fZlpHesPnaWTofSloPB7HIP7lJDOpvCB2z841fZGfUCUIN0vX1IsABe_GfgJO/exec';

  esMenor = false;

  form = {
    nombre: '',
    tutor: '',
    tipoDocumento: '',
    numeroDocumento: '',
    correo: '',
    telefono: '',
    tipoBien: '',
    descripcionBien: '',
    tipoReclamacion: '',
    reclamacion: '',
    pedido: ''
  };
  maxDocumentoLength = 8; // por defecto DNI



  enviarReclamacion() {

    if (!this.form.nombre || !this.form.tipoDocumento || !this.form.tipoReclamacion) {
      alert('Complete los campos obligatorios');
      return;
    }

    if (this.esMenor && !this.form.tutor) {
      alert('Debe ingresar el nombre del tutor');
      return;
    }

    const payload = {
      ...this.form,
      esMenor: this.esMenor
    };

    // 🔍 LOG PRINCIPAL (ESTE ES EL IMPORTANTE)
    console.log('📤 Payload enviado a Google Sheets:', payload);

    fetch(this.GOOGLE_SHEETS_URL, {
      method: 'POST',
      mode: 'no-cors', // 🔥 CLAVE
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    })
      .then(() => {
        console.log('✅ Enviado (no-cors)');
        this.scrollToTop();
        this.showToast(
          'Reclamación enviada',
          'Hemos recibido tu solicitud correctamente.',
          'success'
        );

        this.resetForm();
      })
      .catch(err => {
        console.error('❌ Error:', err);

        this.showToast(
          'Error al enviar',
          'Ocurrió un problema. Inténtalo nuevamente.',
          'error'
        );
      });


  }

  resetForm() {
    this.esMenor = false;
    this.form = {
      nombre: '',
      tutor: '',
      tipoDocumento: '',
      numeroDocumento: '',
      correo: '',
      telefono: '',
      tipoBien: '',
      descripcionBien: '',
      tipoReclamacion: '',
      reclamacion: '',
      pedido: ''
    };
  }

  ngDoCheck() {
    switch (this.form.tipoDocumento) {
      case 'DNI':
        this.maxDocumentoLength = 8;
        break;
      case 'CE':
        this.maxDocumentoLength = 9;
        break;
      case 'PASAPORTE':
        this.maxDocumentoLength = 12;
        break;
      default:
        this.maxDocumentoLength = 15;
    }
  }


  soloNumeros(event: Event) {
    const input = event.target as HTMLInputElement;
    input.value = input.value.replace(/[^0-9]/g, '');
  }

  soloLetras(event: Event) {
    const input = event.target as HTMLInputElement;
    input.value = input.value.replace(/[^a-zA-ZáéíóúÁÉÍÓÚñÑ\s]/g, '');
  }

  toast = {
    visible: false,
    title: '',
    message: '',
    type: 'success' as 'success' | 'error'
  };

  showToast(
    title: string,
    message: string,
    type: 'success' | 'error' = 'success',
    duration = 3000
  ) {
    this.toast = {
      visible: true,
      title,
      message,
      type
    };

    setTimeout(() => this.hideToast(), duration);
  }

  hideToast() {
    this.toast.visible = false;
  }

  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }



}
