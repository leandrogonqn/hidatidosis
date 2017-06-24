import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EcoConvivientesComponent } from './eco-convivientes.component';

describe('EcoConvivientesComponent', () => {
  let component: EcoConvivientesComponent;
  let fixture: ComponentFixture<EcoConvivientesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EcoConvivientesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EcoConvivientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
