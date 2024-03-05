package com.exam.examservers.repo;

import com.exam.examservers.model.exam.Category;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CategotyRepository extends JpaRepository<Category,Long> {
}
