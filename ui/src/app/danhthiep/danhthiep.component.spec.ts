import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DanhthiepComponent } from './danhthiep.component';

describe('PrintingnamecardComponent', () => {
  let component: DanhthiepComponent;
  let fixture: ComponentFixture<DanhthiepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DanhthiepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DanhthiepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
