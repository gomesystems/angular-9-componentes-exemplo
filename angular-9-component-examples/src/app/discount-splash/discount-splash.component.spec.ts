import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscountSplashComponent } from './discount-splash.component';

describe('DiscountSplashComponent', () => {
  let component: DiscountSplashComponent;
  let fixture: ComponentFixture<DiscountSplashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiscountSplashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiscountSplashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
