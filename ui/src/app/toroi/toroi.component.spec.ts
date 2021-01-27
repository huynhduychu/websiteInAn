import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToroiComponent } from './toroi.component';

describe('ToroiComponent', () => {
  let component: ToroiComponent;
  let fixture: ComponentFixture<ToroiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToroiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToroiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
