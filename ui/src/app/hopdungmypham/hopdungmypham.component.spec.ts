import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HopdungmyphamComponent } from './hopdungmypham.component';

describe('HopdungmyphamComponent', () => {
  let component: HopdungmyphamComponent;
  let fixture: ComponentFixture<HopdungmyphamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HopdungmyphamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HopdungmyphamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
