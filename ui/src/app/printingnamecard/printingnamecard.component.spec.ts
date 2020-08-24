import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintingnamecardComponent } from './printingnamecard.component';

describe('PrintingnamecardComponent', () => {
  let component: PrintingnamecardComponent;
  let fixture: ComponentFixture<PrintingnamecardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrintingnamecardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrintingnamecardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
