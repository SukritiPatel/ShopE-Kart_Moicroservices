package com.example.cart.controller;


import com.example.cart.entity.Cart;
import com.example.cart.exception.ResourceNotFoundException;
import com.example.cart.repository.CartRepository;
import com.example.cart.service.CartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/cart")
public class CartController {

    @Autowired
    CartService cartService;

    @Autowired
    CartRepository cartRepository;

    @PostMapping("/addToCart")
    public Cart addToCart( @RequestBody Cart cart){
        return cartService.addToCart(cart);
    }

    @GetMapping("/cartDetail")
    public List<Cart> getProductByUsingProductName(@RequestParam String userName){
        return cartService.getDetailByUserName(userName);
    }
    @PutMapping("/updatequantity/{cartId}")
    public ResponseEntity<Cart> updateQuantity(@PathVariable Integer cartId, @RequestBody Cart cartdetails){
        Cart cart = cartRepository.findById(cartId)
                .orElseThrow(() -> new ResourceNotFoundException("Product not exist with cart id :" + cartId));

        cart.setProductQuantity(cartdetails.getProductQuantity());
        cart.setProductPrice(cartdetails.getProductPrice());
        Cart updatedQuantity = cartRepository.save(cart);
        return ResponseEntity.ok(updatedQuantity);
    }


    @DeleteMapping("/cartDetail/{id}")
    public ResponseEntity<Map<String,Boolean>> deleteCartItem(@PathVariable Integer id){
        Cart cart=cartRepository.findById(id)
                  .orElseThrow(()-> new ResourceNotFoundException("Product not exist with id :" + id));

        cartRepository.delete(cart);
        Map<String,Boolean> response=new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return ResponseEntity.ok(response);
    }
}
