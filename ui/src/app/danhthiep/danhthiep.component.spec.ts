import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DanhthiepComponent } from './danhthiep.component';

describe('PrintingnamecardComponent', () => {
  let component: DanhthiepComponent;
  let fixture: ComponentFixture<DanhthiepComponent>;

  beforeEach(waitForAsync(() => {
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
