import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DanhthiepdepComponent } from './danhthiepdep.component';

describe('DanhthiepdepComponent', () => {
  let component: DanhthiepdepComponent;
  let fixture: ComponentFixture<DanhthiepdepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DanhthiepdepComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DanhthiepdepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
