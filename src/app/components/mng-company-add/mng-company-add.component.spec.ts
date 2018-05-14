import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MngCompanyAddComponent } from './mng-company-add.component';

describe('MngCompanyAddComponent', () => {
  let component: MngCompanyAddComponent;
  let fixture: ComponentFixture<MngCompanyAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MngCompanyAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MngCompanyAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
