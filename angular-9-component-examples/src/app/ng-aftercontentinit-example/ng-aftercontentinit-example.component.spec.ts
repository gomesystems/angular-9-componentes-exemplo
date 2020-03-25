import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgAftercontentinitExampleComponent } from './ng-aftercontentinit-example.component';

describe('NgAftercontentinitExampleComponent', () => {
  let component: NgAftercontentinitExampleComponent;
  let fixture: ComponentFixture<NgAftercontentinitExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgAftercontentinitExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgAftercontentinitExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
