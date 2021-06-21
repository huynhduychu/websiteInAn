import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { BaolixiComponent } from './baolixi.component';

describe('BaolixiComponent', () => {
  let component: BaolixiComponent;
  let fixture: ComponentFixture<BaolixiComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BaolixiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaolixiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
