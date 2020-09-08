import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InbaolixiComponent } from './inbaolixi.component';

describe('InbaolixiComponent', () => {
  let component: InbaolixiComponent;
  let fixture: ComponentFixture<InbaolixiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InbaolixiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InbaolixiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
