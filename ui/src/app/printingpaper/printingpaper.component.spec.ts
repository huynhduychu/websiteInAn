import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintingpaperComponent } from './printingpaper.component';

describe('PrintingpaperComponent', () => {
  let component: PrintingpaperComponent;
  let fixture: ComponentFixture<PrintingpaperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrintingpaperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrintingpaperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
