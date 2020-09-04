import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConstructionPlanningComponent } from './construction-planning.component';

describe('ConstructionPlanningComponent', () => {
  let component: ConstructionPlanningComponent;
  let fixture: ComponentFixture<ConstructionPlanningComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConstructionPlanningComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConstructionPlanningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
