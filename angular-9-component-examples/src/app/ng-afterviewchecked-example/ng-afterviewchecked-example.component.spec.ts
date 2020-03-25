import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgAfterviewcheckedExampleComponent } from './ng-afterviewchecked-example.component';

describe('NgAfterviewcheckedExampleComponent', () => {
  let component: NgAfterviewcheckedExampleComponent;
  let fixture: ComponentFixture<NgAfterviewcheckedExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgAfterviewcheckedExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgAfterviewcheckedExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
