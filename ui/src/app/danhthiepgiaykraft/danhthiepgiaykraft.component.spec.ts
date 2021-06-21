import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DanhthiepgiaykraftComponent } from './danhthiepgiaykraft.component';

describe('DanhthiepgiaykraftComponent', () => {
  let component: DanhthiepgiaykraftComponent;
  let fixture: ComponentFixture<DanhthiepgiaykraftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DanhthiepgiaykraftComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DanhthiepgiaykraftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
