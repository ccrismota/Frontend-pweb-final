import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaPesquisaComponent } from './pagina-pesquisa.component';

describe('PaginaPesquisaComponent', () => {
  let component: PaginaPesquisaComponent;
  let fixture: ComponentFixture<PaginaPesquisaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginaPesquisaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginaPesquisaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
