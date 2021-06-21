import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DanhthiepshopthoitrangComponent } from './danhthiepshopthoitrang.component';

describe('DanhthiepshopthoitrangComponent', () => {
  let component: DanhthiepshopthoitrangComponent;
  let fixture: ComponentFixture<DanhthiepshopthoitrangComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DanhthiepshopthoitrangComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DanhthiepshopthoitrangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
