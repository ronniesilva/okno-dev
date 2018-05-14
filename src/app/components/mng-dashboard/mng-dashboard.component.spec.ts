import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MngDashboardComponent } from './mng-dashboard.component';

describe('MngDashboardComponent', () => {
  let component: MngDashboardComponent;
  let fixture: ComponentFixture<MngDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MngDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MngDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
