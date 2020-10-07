import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WaveGirlComponent } from './wave-girl.component';

describe('WaveGirlComponent', () => {
  let component: WaveGirlComponent;
  let fixture: ComponentFixture<WaveGirlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WaveGirlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WaveGirlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
