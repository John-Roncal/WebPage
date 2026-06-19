import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HerramientasApoyoComponent } from './herramientas-apoyo.component';

describe('HerramientasApoyoComponent', () => {
  let component: HerramientasApoyoComponent;
  let fixture: ComponentFixture<HerramientasApoyoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HerramientasApoyoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HerramientasApoyoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
