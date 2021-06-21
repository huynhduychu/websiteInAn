import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DanhthieptheoykhachhangComponent } from './danhthieptheoykhachhang.component';

describe('DanhthieptheoykhachhangComponent', () => {
  let component: DanhthieptheoykhachhangComponent;
  let fixture: ComponentFixture<DanhthieptheoykhachhangComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DanhthieptheoykhachhangComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DanhthieptheoykhachhangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
