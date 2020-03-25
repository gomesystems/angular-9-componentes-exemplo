import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgAfterviewinitExampleComponent } from './ng-afterviewinit-example.component';

describe('NgAfterviewinitExampleComponent', () => {
  let component: NgAfterviewinitExampleComponent;
  let fixture: ComponentFixture<NgAfterviewinitExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgAfterviewinitExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgAfterviewinitExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
