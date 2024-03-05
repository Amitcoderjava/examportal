package com.exam.examservers.controller;

import com.exam.examservers.model.exam.Category;
import com.exam.examservers.model.exam.Quiz;
import com.exam.examservers.service.QuizService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin("*")
@RequestMapping("/quiz")
public class QuizController {
    @Autowired
    private QuizService quizService;

    // add quiz
    @PostMapping("/")
    public ResponseEntity<Quiz> addquiz(@RequestBody Quiz quiz){
        return ResponseEntity.ok(this.quizService.addQuiz(quiz));
    }

    // update quiz
    @PutMapping("/")
    public ResponseEntity<?> updatequiz(@RequestBody Quiz quiz){
        return ResponseEntity.ok(this.quizService.updateQuiz(quiz));
    }
    // get  quiz

    @GetMapping("/")
    public ResponseEntity<?> getquizes(){
        return ResponseEntity.ok(this.quizService.getQuizzes());
    }

    // get single quiz
    @GetMapping("/{quizid}")
    public Quiz getquiz(@PathVariable("quizid") Long quizid){
        return this.quizService.getQuiz(quizid);
    }

    // delete quiz

    @DeleteMapping("/{quizid}")
    public void deletequiz(@PathVariable("quizid") Long quizid){
        this.quizService.deleteQuiz(quizid);
    }
    // generate the single category All quizzes
    @GetMapping("/category/{cid}")
    public ResponseEntity<?> getQuizzesOfcategory(@PathVariable("cid") Long cid ){
        Category category = new Category();
        category.setCid(cid);
        return ResponseEntity.ok(this.quizService.getQuizzesofcategory(category));
    }
    // get for all active quizzes

    @GetMapping("/active")
    public ResponseEntity<?> getQuizzesOfActive(){

        return  ResponseEntity.ok(this.quizService.getQuizzesOfActive());
    }
    @GetMapping("/category/active/{cid}")
    public ResponseEntity<?> getQuizzesOfActive(@PathVariable("cid") Long cid){
        Category category = new Category();
        category.setCid(cid);
        return  ResponseEntity.ok(this.quizService.getQuizzesOfcategoryActive(category));
    }

}
