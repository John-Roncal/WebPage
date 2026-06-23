/// <reference types="jasmine" />
import { ComponentFixture, TestBed } from '@angular/core/testing';
// Use Jasmine globals provided by Angular TestBed (no explicit import needed)

import { TutorialesComponent } from './tutoriales.component';

describe('Tutoriales2Component', () => {
  let component: TutorialesComponent;
  let fixture: ComponentFixture<TutorialesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TutorialesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TutorialesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
