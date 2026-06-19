import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { EventBusService } from '../../service/event-bus.service';

@Component({
  selector: 'app-loading',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './loading.component.html',
  styleUrl: './loading.component.css'
})
export class LoadingComponent {
  loading = false
  constructor(private eventBusService: EventBusService) { }

  ngOnInit() {
    this.eventBusService.on('openLoading', () => { this.loading = true });
    this.eventBusService.on('closeLoading', () => { this.loading = false });
  }

}
