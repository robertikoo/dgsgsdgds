import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventualesComponent } from './eventuales.component';

describe('EventualesComponent', () => {
  let component: EventualesComponent;
  let fixture: ComponentFixture<EventualesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventualesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventualesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
