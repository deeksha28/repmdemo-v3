import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QualicasaPropertyComponent } from './qualicasa-property.component';

describe('QualicasaPropertyComponent', () => {
  let component: QualicasaPropertyComponent;
  let fixture: ComponentFixture<QualicasaPropertyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QualicasaPropertyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QualicasaPropertyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
