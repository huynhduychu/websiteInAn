import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DanhthiepshophoaComponent } from './danhthiepshophoa.component';

describe('DanhthiepshophoaComponent', () => {
  let component: DanhthiepshophoaComponent;
  let fixture: ComponentFixture<DanhthiepshophoaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DanhthiepshophoaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DanhthiepshophoaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
