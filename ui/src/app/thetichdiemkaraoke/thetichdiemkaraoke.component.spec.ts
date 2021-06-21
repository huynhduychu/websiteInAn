import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThetichdiemkaraokeComponent } from './thetichdiemkaraoke.component';

describe('ThetichdiemkaraokeComponent', () => {
  let component: ThetichdiemkaraokeComponent;
  let fixture: ComponentFixture<ThetichdiemkaraokeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThetichdiemkaraokeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThetichdiemkaraokeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
