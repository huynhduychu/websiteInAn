import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ThetreoComponent } from './thetreo.component';

describe('ThetreoComponent', () => {
  let component: ThetreoComponent;
  let fixture: ComponentFixture<ThetreoComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ThetreoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThetreoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
