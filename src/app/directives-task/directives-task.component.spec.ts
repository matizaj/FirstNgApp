import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectivesTaskComponent } from './directives-task.component';

describe('DirectivesTaskComponent', () => {
  let component: DirectivesTaskComponent;
  let fixture: ComponentFixture<DirectivesTaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirectivesTaskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectivesTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
