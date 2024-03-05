package com.exam.examservers.repo;

import com.exam.examservers.model.exam.Question;
import com.exam.examservers.model.exam.Quiz;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Set;
@Repository
public interface QuestionRepository extends JpaRepository<Question,Long> {
    public  Set<Question> findByQuiz(Quiz quiz);
}
