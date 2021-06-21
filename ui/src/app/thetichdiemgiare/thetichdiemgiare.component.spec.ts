import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThetichdiemgiareComponent } from './thetichdiemgiare.component';

describe('ThetichdiemgiareComponent', () => {
  let component: ThetichdiemgiareComponent;
  let fixture: ComponentFixture<ThetichdiemgiareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThetichdiemgiareComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThetichdiemgiareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
