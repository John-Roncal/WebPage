import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    DropdownModule,
    ButtonModule
  ],
  exports: [
    DropdownModule,
    ButtonModule
  ]
})
export class PrimeElementsModule { }
