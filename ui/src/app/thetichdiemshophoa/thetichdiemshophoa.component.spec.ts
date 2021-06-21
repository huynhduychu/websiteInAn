import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThetichdiemshophoaComponent } from './thetichdiemshophoa.component';

describe('ThetichdiemshophoaComponent', () => {
  let component: ThetichdiemshophoaComponent;
  let fixture: ComponentFixture<ThetichdiemshophoaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThetichdiemshophoaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThetichdiemshophoaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
