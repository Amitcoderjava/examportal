package com.exam.examservers.service;

import com.exam.examservers.model.exam.Question;
import com.exam.examservers.model.exam.Quiz;

import java.util.Set;

public interface QuestionService {

    public Question addQuestion(Question question);
    public Question updateQuestion(Question question);
    public Set<Question> getQuestions();
    public Question getQuestion(Long questionid);
    public Set<Question> getQuestionofQuiz(Quiz quiz);
    public void deleteQuestions(Long qid);
    public Question get(Long questionid);

}
