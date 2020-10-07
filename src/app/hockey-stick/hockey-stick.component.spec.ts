import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HockeyStickComponent } from './hockey-stick.component';

describe('HockeyStickComponent', () => {
  let component: HockeyStickComponent;
  let fixture: ComponentFixture<HockeyStickComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HockeyStickComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HockeyStickComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
