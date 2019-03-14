import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoCoverComponent } from './info-cover.component';

describe('InfoCoverComponent', () => {
  let component: InfoCoverComponent;
  let fixture: ComponentFixture<InfoCoverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoCoverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoCoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
