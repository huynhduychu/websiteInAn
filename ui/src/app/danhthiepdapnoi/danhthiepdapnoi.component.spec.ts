import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DanhthiepdapnoiComponent } from './danhthiepdapnoi.component';

describe('DanhthiepdapnoiComponent', () => {
  let component: DanhthiepdapnoiComponent;
  let fixture: ComponentFixture<DanhthiepdapnoiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DanhthiepdapnoiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DanhthiepdapnoiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
