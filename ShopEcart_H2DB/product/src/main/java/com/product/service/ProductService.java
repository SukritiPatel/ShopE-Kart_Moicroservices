package com.product.service;

import com.product.entity.Product;
import com.product.repository.ProductRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;


@Service
public class ProductService {

    @Autowired
    ProductRepo productRepo;

    public Product createProduct(Product product){
        return productRepo.save(product);
    }
    public List<Product> listProduct(){
        return productRepo.findAll();
    }

    //to find category wise products
    public List<Product> getProduct(Integer categoryId) {
        return productRepo.findBycategoryId(categoryId);
    }
    public List<Product> getCategoryByName(String categoryName){ return productRepo.findBycategoryName(categoryName);}

    public Optional<Product> getProductById(Integer productId) { return productRepo.findById(productId);}

}
