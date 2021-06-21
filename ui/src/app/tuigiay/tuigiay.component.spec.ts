import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TuigiayComponent } from './tuigiay.component';

describe('TuigiayComponent', () => {
  let component: TuigiayComponent;
  let fixture: ComponentFixture<TuigiayComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TuigiayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TuigiayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
