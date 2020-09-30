import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmbroideryComponent } from './embroidery.component';

describe('EmbroideryComponent', () => {
  let component: EmbroideryComponent;
  let fixture: ComponentFixture<EmbroideryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmbroideryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmbroideryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
