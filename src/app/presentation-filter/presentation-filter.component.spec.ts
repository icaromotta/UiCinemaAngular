import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentationFilterComponent } from './presentation-filter.component';

describe('PresentationFilterComponent', () => {
  let component: PresentationFilterComponent;
  let fixture: ComponentFixture<PresentationFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PresentationFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PresentationFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
