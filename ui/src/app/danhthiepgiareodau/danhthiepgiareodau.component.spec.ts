import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DanhthiepgiareodauComponent } from './danhthiepgiareodau.component';

describe('DanhthiepgiareodauComponent', () => {
  let component: DanhthiepgiareodauComponent;
  let fixture: ComponentFixture<DanhthiepgiareodauComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DanhthiepgiareodauComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DanhthiepgiareodauComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
