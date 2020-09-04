import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QualicasaComponent } from './qualicasa.component';

describe('QualicasaComponent', () => {
  let component: QualicasaComponent;
  let fixture: ComponentFixture<QualicasaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QualicasaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QualicasaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
