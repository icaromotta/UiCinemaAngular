import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroPlayComponent } from './hero-play.component';

describe('HeroPlayComponent', () => {
  let component: HeroPlayComponent;
  let fixture: ComponentFixture<HeroPlayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroPlayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroPlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
