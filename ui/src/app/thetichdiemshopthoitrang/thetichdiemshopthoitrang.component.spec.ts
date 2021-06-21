import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThetichdiemshopthoitrangComponent } from './thetichdiemshopthoitrang.component';

describe('ThetichdiemshopthoitrangComponent', () => {
  let component: ThetichdiemshopthoitrangComponent;
  let fixture: ComponentFixture<ThetichdiemshopthoitrangComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThetichdiemshopthoitrangComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThetichdiemshopthoitrangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
