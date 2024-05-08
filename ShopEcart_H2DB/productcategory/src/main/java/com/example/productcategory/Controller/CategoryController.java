package com.example.productcategory.Controller;

import com.example.productcategory.Exception.ResourceNotFoundException;
import com.example.productcategory.Entity.Category;
import com.example.productcategory.Repository.CategoryRepository;
import com.example.productcategory.Service.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/category")
public class CategoryController {

    @Autowired
    CategoryService categoryService;

    @Autowired
    CategoryRepository categoryRepository;

    @PostMapping("/addCategory")
    public Category addCategory(@RequestBody Category category){
        return categoryService.createCategory(category);
    }


    @GetMapping("/allCategory")
    public List<Category> allCategory(){
        return categoryService.allCategory();
    }

    @GetMapping("/getcat/{categoryId}")
    public Optional<Category> getCategoryById(@PathVariable("categoryId") Integer categoryId){
        return categoryService.getCategoryById(categoryId);
    }

    @PutMapping("/updateCat/{categoryId}")
    public ResponseEntity<Category> updateCategory(@PathVariable Integer categoryId, @RequestBody Category categorydetails){
        Category category = categoryRepository.findById(categoryId)
                .orElseThrow(() -> new ResourceNotFoundException("Product not exist with id :" + categoryId));

        category.setCategoryName(categorydetails.getCategoryName());
        category.setCategoryPic(categorydetails.getCategoryPic());
        category.setCategoryDesc(categorydetails.getCategoryDesc());

        Category updatedCategory = categoryRepository.save(category);
        return ResponseEntity.ok(updatedCategory);
    }

    @DeleteMapping("/deleteCat/{categoryId}")
    public ResponseEntity<Map<String, Boolean>> deleteProduct(@PathVariable Integer categoryId){
        Category category = categoryRepository.findById(categoryId)
                .orElseThrow(() -> new ResourceNotFoundException("Category does not exist with id :" + categoryId));
        categoryRepository.delete(category);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return ResponseEntity.ok(response);
    }


}
