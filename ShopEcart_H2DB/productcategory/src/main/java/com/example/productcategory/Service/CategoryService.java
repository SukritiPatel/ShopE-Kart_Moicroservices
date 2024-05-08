package com.example.productcategory.Service;

import com.example.productcategory.Entity.Category;
import com.example.productcategory.Repository.CategoryRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;

@Service
public class CategoryService {

    @Autowired
    CategoryRepository categoryRepository;

//    @Autowired
//    private RestTemplate restTemplate;

    public Category createCategory(Category category){
        return categoryRepository.save(category);
    }

//    @Transactional
//    public List<Category> allCategory() {
//        List<Category> categoryList=categoryRepository.findAll();
//        return categoryList;
//    }

    public List<Category> allCategory() {
        return categoryRepository.findAll();
    }

    public Optional<Category> getCategoryById(Integer categoryId) { return categoryRepository.findById(categoryId); }
}
