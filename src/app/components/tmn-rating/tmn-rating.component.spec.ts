import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TmnRatingComponent } from './tmn-rating.component';

describe('TmnRatingComponent', () => {
  let component: TmnRatingComponent;
  let fixture: ComponentFixture<TmnRatingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TmnRatingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TmnRatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
