import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TbaBoxComponent } from './tba-box.component';

describe('TbaBoxComponent', () => {
  let component: TbaBoxComponent;
  let fixture: ComponentFixture<TbaBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TbaBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TbaBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
