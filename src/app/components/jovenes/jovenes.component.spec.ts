import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JovenesComponent } from './jovenes.component';

describe('JovenesComponent', () => {
  let component: JovenesComponent;
  let fixture: ComponentFixture<JovenesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JovenesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JovenesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
