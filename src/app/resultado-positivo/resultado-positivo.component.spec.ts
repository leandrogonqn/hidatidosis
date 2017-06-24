import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultadoPositivoComponent } from './resultado-positivo.component';

describe('ResultadoPositivoComponent', () => {
  let component: ResultadoPositivoComponent;
  let fixture: ComponentFixture<ResultadoPositivoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultadoPositivoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultadoPositivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
