import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDiscComponent } from './product-disc.component';

describe('ProductDiscComponent', () => {
  let component: ProductDiscComponent;
  let fixture: ComponentFixture<ProductDiscComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductDiscComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDiscComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
