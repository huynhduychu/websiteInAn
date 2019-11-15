import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintingdecalComponent } from './printingdecal.component';

describe('PrintingdecalComponent', () => {
  let component: PrintingdecalComponent;
  let fixture: ComponentFixture<PrintingdecalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrintingdecalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrintingdecalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
