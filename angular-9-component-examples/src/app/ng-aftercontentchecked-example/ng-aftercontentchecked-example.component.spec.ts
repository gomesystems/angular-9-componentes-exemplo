import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgAftercontentcheckedExampleComponent } from './ng-aftercontentchecked-example.component';

describe('NgAftercontentcheckedExampleComponent', () => {
  let component: NgAftercontentcheckedExampleComponent;
  let fixture: ComponentFixture<NgAftercontentcheckedExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgAftercontentcheckedExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgAftercontentcheckedExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
