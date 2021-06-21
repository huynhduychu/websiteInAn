import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DanhthiepcaocapComponent } from './danhthiepcaocap.component';

describe('DanhthiepcaocapComponent', () => {
  let component: DanhthiepcaocapComponent;
  let fixture: ComponentFixture<DanhthiepcaocapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DanhthiepcaocapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DanhthiepcaocapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
