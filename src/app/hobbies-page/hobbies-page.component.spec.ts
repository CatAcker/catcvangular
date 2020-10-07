import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HobbiesPageComponent } from './hobbies-page.component';

describe('HobbiesPageComponent', () => {
  let component: HobbiesPageComponent;
  let fixture: ComponentFixture<HobbiesPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HobbiesPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HobbiesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
