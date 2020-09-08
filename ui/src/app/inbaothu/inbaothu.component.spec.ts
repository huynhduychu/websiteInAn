import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InbaothuComponent } from './inbaothu.component';

describe('InbaothuComponent', () => {
  let component: InbaothuComponent;
  let fixture: ComponentFixture<InbaothuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InbaothuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InbaothuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
