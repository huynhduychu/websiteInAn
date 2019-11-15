import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintingppComponent } from './printingpp.component';

describe('PrintingppComponent', () => {
  let component: PrintingppComponent;
  let fixture: ComponentFixture<PrintingppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrintingppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrintingppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
