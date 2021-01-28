import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FallersComponent } from './fallers.component';

describe('FallersComponent', () => {
  let component: FallersComponent;
  let fixture: ComponentFixture<FallersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FallersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FallersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
