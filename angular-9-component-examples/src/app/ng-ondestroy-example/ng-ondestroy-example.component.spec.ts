import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgOndestroyExampleComponent } from './ng-ondestroy-example.component';

describe('NgOndestroyExampleComponent', () => {
  let component: NgOndestroyExampleComponent;
  let fixture: ComponentFixture<NgOndestroyExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgOndestroyExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgOndestroyExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
