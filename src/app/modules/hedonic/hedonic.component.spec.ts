import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HedonicComponent } from './hedonic.component';

describe('HedonicComponent', () => {
  let component: HedonicComponent;
  let fixture: ComponentFixture<HedonicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HedonicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HedonicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
