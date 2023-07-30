import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaracteristicasEmpleadosCComponent } from './caracteristicas-empleados-c.component';

describe('CaracteristicasEmpleadosCComponent', () => {
  let component: CaracteristicasEmpleadosCComponent;
  let fixture: ComponentFixture<CaracteristicasEmpleadosCComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CaracteristicasEmpleadosCComponent]
    });
    fixture = TestBed.createComponent(CaracteristicasEmpleadosCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
