package com.product.repository;

import com.product.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public interface ProductRepo extends JpaRepository<Product,Integer> {
    List<Product> findBycategoryId(Integer categoryId);
   List<Product> findBycategoryName(String categoryName);

}
