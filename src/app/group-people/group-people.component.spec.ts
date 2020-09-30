import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupPeopleComponent } from './group-people.component';

describe('GroupPeopleComponent', () => {
  let component: GroupPeopleComponent;
  let fixture: ComponentFixture<GroupPeopleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupPeopleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupPeopleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
