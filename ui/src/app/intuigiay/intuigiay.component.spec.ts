import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntuigiayComponent } from './intuigiay.component';

describe('IntuigiayComponent', () => {
  let component: IntuigiayComponent;
  let fixture: ComponentFixture<IntuigiayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntuigiayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntuigiayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
