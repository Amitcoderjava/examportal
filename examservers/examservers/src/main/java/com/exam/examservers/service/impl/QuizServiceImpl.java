package com.exam.examservers.service.impl;

import com.exam.examservers.model.exam.Category;
import com.exam.examservers.model.exam.Quiz;
import com.exam.examservers.repo.QuizRepository;
import com.exam.examservers.service.QuizService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Service
public class QuizServiceImpl implements QuizService {

    @Autowired
    private QuizRepository quizRepository;
    @Override
    public Quiz addQuiz(Quiz quiz) {
        return this.quizRepository.save(quiz);
    }

    @Override
    public Quiz updateQuiz(Quiz quiz) {
        return this.quizRepository.save(quiz);
    }

    @Override
    public Set<Quiz> getQuizzes() {
        return new HashSet<>(this.quizRepository.findAll());
    }

    @Override
    public Quiz getQuiz(Long quizid) {
        return this.quizRepository.findById(quizid).get();
    }

    @Override
    public void deleteQuiz(Long quizid) {

        this.quizRepository.deleteById(quizid);
    }

    @Override
    public List<Quiz> getQuizzesofcategory(Category category) {
        return this.quizRepository.findBycategory(category);
    }

    @Override
    public List<Quiz> getQuizzesOfActive() {
        return this.quizRepository.findByIsActive(true);
    }

    @Override
    public List<Quiz> getQuizzesOfcategoryActive(Category category) {
        return this.quizRepository.findByCategoryAndIsActive(category,true);
    }


}
