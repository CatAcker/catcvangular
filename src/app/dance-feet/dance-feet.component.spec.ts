import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DanceFeetComponent } from './dance-feet.component';

describe('DanceFeetComponent', () => {
  let component: DanceFeetComponent;
  let fixture: ComponentFixture<DanceFeetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DanceFeetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DanceFeetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
