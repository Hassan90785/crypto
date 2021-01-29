import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivePresaleComponent } from './active-presale.component';

describe('ActivePresaleComponent', () => {
  let component: ActivePresaleComponent;
  let fixture: ComponentFixture<ActivePresaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActivePresaleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivePresaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
