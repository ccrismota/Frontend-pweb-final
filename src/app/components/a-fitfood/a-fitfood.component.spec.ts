import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AFitfoodComponent } from './a-fitfood.component';

describe('AFitfoodComponent', () => {
  let component: AFitfoodComponent;
  let fixture: ComponentFixture<AFitfoodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AFitfoodComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AFitfoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
