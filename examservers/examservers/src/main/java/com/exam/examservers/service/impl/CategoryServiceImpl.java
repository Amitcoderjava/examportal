package com.exam.examservers.service.impl;

import com.exam.examservers.model.exam.Category;
import com.exam.examservers.repo.CategotyRepository;
import com.exam.examservers.service.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.Set;

@Service
public class CategoryServiceImpl implements CategoryService {
    @Autowired
    private CategotyRepository categotyRepository;
    @Override
    public Category addCategory(Category category) {
        return this.categotyRepository.save(category);
    }

    @Override
    public Category updateCategory(Category category) {
        return this.categotyRepository.save(category);
    }

    @Override
    public Set<Category> getCategories() {
        return new HashSet<> (this.categotyRepository.findAll());
    }

    @Override
    public Category getCategory(Long categoryId) {
        return this.categotyRepository.findById(categoryId).get();
    }

    @Override
    public void deletCategory(Long categoryid) {
      this.categotyRepository.deleteById(categoryid);
    }
}
