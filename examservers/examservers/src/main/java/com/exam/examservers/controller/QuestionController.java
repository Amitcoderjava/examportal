package com.exam.examservers.controller;

import com.exam.examservers.model.exam.Question;
import com.exam.examservers.model.exam.Quiz;
import com.exam.examservers.service.QuestionService;
import com.exam.examservers.service.QuizService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.*;
@RestController
@RequestMapping("/question")
@CrossOrigin("*")
public class QuestionController {

    @Autowired
    private QuestionService questionService;
    @Autowired
    private QuizService quizService;

    @PostMapping("/")
    public ResponseEntity<Question> AddQuestion(@RequestBody Question question){
        return ResponseEntity.ok(this.questionService.addQuestion(question));
    }

    @PutMapping("/")
    public ResponseEntity<?> UpdateQuestion(@RequestBody Question question){
        return  ResponseEntity.ok(this.questionService.updateQuestion(question));
    }
    // get all question of any quiz
    @GetMapping("/quiz/{quizid}")
    public ResponseEntity<?> getAllques(@PathVariable("quizid") Long quizid){
        Quiz quiz = this.quizService.getQuiz(quizid);
        Set<Question> questions = quiz.getQuestions();
        List<Question> list=new ArrayList(questions);
        if(list.size() > Integer.parseInt(quiz.getNoOfQuestion())){
            list=list.subList(0,Integer.parseInt(quiz.getNoOfQuestion()+1));
        }

        list.forEach((q)->{
            q.setAnswer("");
        });
        Collections.shuffle(list);
        return ResponseEntity.ok(list);
    }

    @GetMapping("/quiz/all/{quizid}")
    public ResponseEntity<?> getAllquestion(@PathVariable("quizid") Long quizid){
        Quiz quiz = new Quiz();
        quiz.setQuizid(quizid);
        Set<Question> questionofQuiz = this.questionService.getQuestionofQuiz(quiz);
        return ResponseEntity.ok(questionofQuiz);

    }
    // for checking answer is correct or not
    @PostMapping("/eval-quiz")
    public ResponseEntity<?> get(@RequestBody List<Question> questions){
        int attempted=0;
        int correctAnswer=0;
        double gotmarks=0;
        for(Question q: questions){
            // single quiz check
            Question question=this.questionService.get(q.getQid());
            if(question.getAnswer().equals(q.getGivenAnswer())){
                correctAnswer++;
                double singlemarks= Double.parseDouble(question.getQuiz().getMaxmarks())/questions.size();
                gotmarks=+singlemarks;
            }
            if(q.getGivenAnswer()!=null){
                attempted++;
            }
        }
        Map<String, Object> map = Map.of("attempted", attempted ,"correctAnswer",correctAnswer,"gotmarks",gotmarks);
        return ResponseEntity.ok(map);
    }

// get single question
    @GetMapping("/{qid}")
    public Question get(@PathVariable("qid") Long qid){
        return this.questionService.getQuestion(qid);
    }

    // dwlwtw question
    @DeleteMapping("/{qid}")
    public void deleteQuestion(@PathVariable("qid") Long qid){
        this.questionService.deleteQuestions(qid);
    }
}
