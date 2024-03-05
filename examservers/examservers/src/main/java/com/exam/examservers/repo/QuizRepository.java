package com.exam.examservers.repo;

import com.exam.examservers.model.exam.Category;
import com.exam.examservers.model.exam.Quiz;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface QuizRepository extends JpaRepository<Quiz,Long> {
    public List<Quiz> findBycategory(Category category);

    public List<Quiz> findByIsActive(boolean b);
    public List<Quiz> findByCategoryAndIsActive(Category category,boolean b);
}
