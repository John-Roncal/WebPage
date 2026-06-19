import { CommonModule } from '@angular/common';
import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { documentType,receptorType } from '../../../../data/documentType';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { CalendarModule } from 'primeng/calendar';
import { EventBusService } from '../../../../service/event-bus.service';

@Component({
  selector: 'app-guia-remision',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule,CommonModule,DropdownModule,InputTextModule,CalendarModule,CommonModule],
  templateUrl: './guia-remision.component.html',
  styleUrl: './guia-remision.component.css'
})
export class GuiaRemisionComponent {
  @Output() loading = new EventEmitter<boolean>();
  form : FormGroup = new FormGroup({});
  @ViewChild('invoiceSection', { static: false }) invoiceSection!: ElementRef;

  tipos = documentType
  receptorType = receptorType
  constructor(private eventBusService: EventBusService) {
    this.form = new FormGroup({
      'ruc': new FormControl('', { nonNullable: true,validators: [ Validators.required] }),
      'tipo': new FormControl('', { nonNullable: true,validators: [ Validators.required] }),
      'serie': new FormControl('', { nonNullable: true,validators: [ Validators.required] }),
      'numero': new FormControl('', { nonNullable: true,validators: [ Validators.required] }),
      'fechaEmision': new FormControl('', { nonNullable: true,validators: [ Validators.required] }),
      'tipoDocumento': new FormControl('', { nonNullable: true,validators: [ Validators.required] }),
      'numeroDocumento': new FormControl('', { nonNullable: true,validators: [ Validators.required] }),
    })
  }
  showInvoice = false;
  isSuccess = false

  activateLoading(status:boolean) {
    this.loading.emit(status); // Emitimos los datos al padre
  }
  scrollToInvoice() {
    if (this.invoiceSection) {
      this.invoiceSection.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
  submit(e:Event){
    e.preventDefault();
    this.eventBusService.emit({name: 'openLoading'});
    console.log(this.form.value);
    this.activateLoading(true);
    setTimeout(() => {
      this.activateLoading(false);
      this.eventBusService.emit({name: 'closeLoading'});
      this.showInvoice = true
      setTimeout(() => {
        this.scrollToInvoice();
      }, 0);
    },5000)

  }
  

}
