import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorPersonalizadoComponentComponent } from './error-personalizado-component.component';

describe('ErrorPersonalizadoComponentComponent', () => {
  let component: ErrorPersonalizadoComponentComponent;
  let fixture: ComponentFixture<ErrorPersonalizadoComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ErrorPersonalizadoComponentComponent]
    });
    fixture = TestBed.createComponent(ErrorPersonalizadoComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
