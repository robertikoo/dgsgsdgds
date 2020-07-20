import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoroComponent } from './coro.component';

describe('CoroComponent', () => {
  let component: CoroComponent;
  let fixture: ComponentFixture<CoroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
