package com.exam.examservers.service.impl;

import com.exam.examservers.model.exam.Question;
import com.exam.examservers.model.exam.Quiz;
import com.exam.examservers.repo.QuestionRepository;
import com.exam.examservers.service.QuestionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.Set;

@Service
public class QuestionServiceImpl implements QuestionService {

    @Autowired
    private QuestionRepository questionRepository;
    @Override
    public Question addQuestion(Question question) {
        return this.questionRepository.save(question);
    }

    @Override
    public Question updateQuestion(Question question) {
        return this.questionRepository.save(question);
    }

    @Override
    public Set<Question> getQuestions() {
        return new HashSet<>(this.questionRepository.findAll());
    }

    @Override
    public Question getQuestion(Long questionid) {
        return this.questionRepository.findById(questionid).get();
    }

    @Override
    public Set<Question> getQuestionofQuiz(Quiz quiz) {
        return this.questionRepository.findByQuiz(quiz);
    }

    @Override
    public void deleteQuestions(Long qid) {
        Question question = new Question();
        question.setQid(qid);
        this.questionRepository.delete(question);
    }

    @Override
    public Question get(Long questionid) {
        return this.questionRepository.getOne(questionid);
    }
}
