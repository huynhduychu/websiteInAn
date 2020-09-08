import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InthetreoComponent } from './inthetreo.component';

describe('InthetreoComponent', () => {
  let component: InthetreoComponent;
  let fixture: ComponentFixture<InthetreoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InthetreoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InthetreoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
