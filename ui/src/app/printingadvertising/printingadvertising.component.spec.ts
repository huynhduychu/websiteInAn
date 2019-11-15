import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintingadvertisingComponent } from './printingadvertising.component';

describe('PrintingadvertisingComponent', () => {
  let component: PrintingadvertisingComponent;
  let fixture: ComponentFixture<PrintingadvertisingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrintingadvertisingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrintingadvertisingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
