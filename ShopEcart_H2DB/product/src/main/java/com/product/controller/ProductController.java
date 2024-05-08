package com.product.controller;

import com.product.entity.Product;
import com.product.exception.ResourceNotFoundException;
import com.product.repository.ProductRepo;
import com.product.service.ProductService;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.CrossOrigin;


import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.logging.Logger;


@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/product")
public class ProductController {
    @Autowired
    ProductService productService;
    @Autowired
    ProductRepo productRepo;

    //Logger logger= (Logger) LoggerFactory.getLogger(ProductController.class);

    @PostMapping("/add")
    public Product createProduct(@RequestBody Product product){
        return productService.createProduct(product);
    }

    @PutMapping("/updateprod/{productId}")
    public ResponseEntity<Product> updateProduct(@PathVariable Integer productId, @RequestBody Product productdetails){
        Product product = productRepo.findById(productId)
                .orElseThrow(() -> new ResourceNotFoundException("Product not exist with id :" + productId));

        product.setName(productdetails.getName());
        product.setPrice(productdetails.getPrice());
        product.setImageURL(productdetails.getImageURL());

        Product updatedProduct = productRepo.save(product);
        return ResponseEntity.ok(updatedProduct);
    }

    @DeleteMapping("/deleteprod/{productId}")
    public ResponseEntity<Map<String, Boolean>> deleteProduct(@PathVariable Integer productId){
        Product product = productRepo.findById(productId)
                .orElseThrow(() -> new ResourceNotFoundException("Product does not exist with id :" + productId));
        productRepo.delete(product);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return ResponseEntity.ok(response);
    }

    @GetMapping("/list")
    public List<Product> listProduct(){
        return productService.listProduct();
    }

    @GetMapping("/getprod/{productId}")
    public Optional<Product> getProductById(@PathVariable("productId") Integer productId){
        return productService.getProductById(productId);
    }

    @GetMapping("/{categoryId}")
    public List<Product> getProduct(@PathVariable("categoryId") Integer categoryId){
        return productService.getProduct(categoryId);
    }

    @GetMapping("/categoryName")
    public List<Product> getCategoryName(@RequestParam String categoryName){
        return productService.getCategoryByName(categoryName);
    }
}
