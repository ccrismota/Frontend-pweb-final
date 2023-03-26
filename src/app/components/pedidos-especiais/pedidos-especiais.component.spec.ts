import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PedidosEspeciaisComponent } from './pedidos-especiais.component';

describe('PedidosEspeciaisComponent', () => {
  let component: PedidosEspeciaisComponent;
  let fixture: ComponentFixture<PedidosEspeciaisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PedidosEspeciaisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PedidosEspeciaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
