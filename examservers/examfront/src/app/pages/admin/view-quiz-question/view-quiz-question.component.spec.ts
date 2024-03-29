import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewQuizQuestionComponent } from './view-quiz-question.component';

describe('ViewQuizQuestionComponent', () => {
  let component: ViewQuizQuestionComponent;
  let fixture: ComponentFixture<ViewQuizQuestionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewQuizQuestionComponent]
    });
    fixture = TestBed.createComponent(ViewQuizQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
