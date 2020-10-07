import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwimmingManComponent } from './swimming-man.component';

describe('SwimmingManComponent', () => {
  let component: SwimmingManComponent;
  let fixture: ComponentFixture<SwimmingManComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwimmingManComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwimmingManComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
