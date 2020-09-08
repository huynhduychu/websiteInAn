import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncatalogueComponent } from './incatalogue.component';

describe('PrintingppComponent', () => {
  let component: IncatalogueComponent;
  let fixture: ComponentFixture<IncatalogueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncatalogueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncatalogueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
