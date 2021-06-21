import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThetichdiemquanannhanhComponent } from './thetichdiemquanannhanh.component';

describe('ThetichdiemquanannhanhComponent', () => {
  let component: ThetichdiemquanannhanhComponent;
  let fixture: ComponentFixture<ThetichdiemquanannhanhComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThetichdiemquanannhanhComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThetichdiemquanannhanhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
