import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgOnchangesparentComponent } from './ng-onchangesparent.component';

describe('NgOnchangesparentComponent', () => {
  let component: NgOnchangesparentComponent;
  let fixture: ComponentFixture<NgOnchangesparentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgOnchangesparentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgOnchangesparentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
