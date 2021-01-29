import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpcommingPresaleComponent } from './upcomming-presale.component';

describe('UpcommingPresaleComponent', () => {
  let component: UpcommingPresaleComponent;
  let fixture: ComponentFixture<UpcommingPresaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpcommingPresaleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpcommingPresaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
