import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgOnchangesExampleComponent } from './ng-onchanges-example.component';

describe('NgOnchangesExampleComponent', () => {
  let component: NgOnchangesExampleComponent;
  let fixture: ComponentFixture<NgOnchangesExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgOnchangesExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgOnchangesExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
