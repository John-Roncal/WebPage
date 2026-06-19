import { Component } from '@angular/core';
import {facturation}  from '../../../data/facturation';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-facturation',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './facturation.component.html',
  styleUrl: './facturation.component.css'
})
export class FacturationComponent {

  facturation = facturation


}
