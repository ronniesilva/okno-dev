import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TmnLoginComponent } from './tmn-login.component';

describe('TmnLoginComponent', () => {
  let component: TmnLoginComponent;
  let fixture: ComponentFixture<TmnLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TmnLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TmnLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
