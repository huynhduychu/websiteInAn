import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThetichdiemComponent } from './thetichdiem.component';

describe('InnamecardComponent', () => {
  let component: ThetichdiemComponent;
  let fixture: ComponentFixture<ThetichdiemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThetichdiemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThetichdiemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
