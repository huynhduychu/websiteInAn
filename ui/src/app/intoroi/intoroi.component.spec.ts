import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntoroiComponent } from './intoroi.component';

describe('IntoroiComponent', () => {
  let component: IntoroiComponent;
  let fixture: ComponentFixture<IntoroiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntoroiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntoroiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
