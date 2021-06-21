import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DanhthiepgiaymythuatComponent } from './danhthiepgiaymythuat.component';

describe('DanhthiepgiaymythuatComponent', () => {
  let component: DanhthiepgiaymythuatComponent;
  let fixture: ComponentFixture<DanhthiepgiaymythuatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DanhthiepgiaymythuatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DanhthiepgiaymythuatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
