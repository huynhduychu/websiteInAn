import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThetichdiemspaComponent } from './thetichdiemspa.component';

describe('ThetichdiemspaComponent', () => {
  let component: ThetichdiemspaComponent;
  let fixture: ComponentFixture<ThetichdiemspaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThetichdiemspaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThetichdiemspaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
