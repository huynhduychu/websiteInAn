import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThetichdiemquancapheComponent } from './thetichdiemquancaphe.component';

describe('ThetichdiemquancapheComponent', () => {
  let component: ThetichdiemquancapheComponent;
  let fixture: ComponentFixture<ThetichdiemquancapheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThetichdiemquancapheComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThetichdiemquancapheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
