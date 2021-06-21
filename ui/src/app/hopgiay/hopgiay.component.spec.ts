import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HopgiayComponent } from './hopgiay.component';

describe('HopgiayComponent', () => {
  let component: HopgiayComponent;
  let fixture: ComponentFixture<HopgiayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HopgiayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HopgiayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
