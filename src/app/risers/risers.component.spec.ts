import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RisersComponent } from './risers.component';

describe('RisersComponent', () => {
  let component: RisersComponent;
  let fixture: ComponentFixture<RisersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RisersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RisersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
