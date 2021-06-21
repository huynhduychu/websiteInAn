import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThetichdiemclubComponent } from './thetichdiemclub.component';

describe('ThetichdiemclubComponent', () => {
  let component: ThetichdiemclubComponent;
  let fixture: ComponentFixture<ThetichdiemclubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThetichdiemclubComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThetichdiemclubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
