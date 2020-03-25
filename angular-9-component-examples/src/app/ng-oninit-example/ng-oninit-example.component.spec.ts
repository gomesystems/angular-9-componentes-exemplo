import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgOninitExampleComponent } from './ng-oninit-example.component';

describe('NgOninitExampleComponent', () => {
  let component: NgOninitExampleComponent;
  let fixture: ComponentFixture<NgOninitExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgOninitExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgOninitExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
