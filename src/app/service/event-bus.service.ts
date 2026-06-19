import { Injectable } from '@angular/core';
import { filter, map, Subject } from 'rxjs';
import { EventData } from '../interface/event.interface';

@Injectable({
  providedIn: 'root'
})
export class EventBusService {

  private subject$ = new Subject<EventData>();


  constructor() {
  }

  emit(event: EventData) {
      this.subject$.next(event);
  }

  on(eventName: "openLoading" | "closeLoading" | "openModal" | "closeModal", action: any) {
      return this.subject$.pipe(
          filter((e: EventData) => e.name === eventName),
          map((e: EventData) => e.value)
      ).subscribe(action);
  }
}
