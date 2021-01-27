import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaothuComponent } from './baothu.component';

describe('BaothuComponent', () => {
  let component: BaothuComponent;
  let fixture: ComponentFixture<BaothuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaothuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaothuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
