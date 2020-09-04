import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImmoCockpitComponent } from './immo-cockpit.component';

describe('ImmoCockpitComponent', () => {
  let component: ImmoCockpitComponent;
  let fixture: ComponentFixture<ImmoCockpitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImmoCockpitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImmoCockpitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
