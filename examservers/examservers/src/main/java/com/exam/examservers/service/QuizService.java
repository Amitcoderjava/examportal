package com.exam.examservers.service;

import com.exam.examservers.model.exam.Category;
import com.exam.examservers.model.exam.Quiz;

import java.util.List;
import java.util.Set;

public interface QuizService {

    public Quiz addQuiz(Quiz quiz);
    public Quiz updateQuiz(Quiz quiz);
    public Set<Quiz> getQuizzes();
    public Quiz getQuiz(Long quizid);
    public void deleteQuiz(Long quizid);

    public List<Quiz> getQuizzesofcategory(Category category);

    public List<Quiz> getQuizzesOfActive();
    public List<Quiz> getQuizzesOfcategoryActive(Category category);
}
