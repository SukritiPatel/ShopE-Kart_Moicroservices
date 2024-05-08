package com.example.cart.service;


import com.example.cart.entity.Cart;
import com.example.cart.repository.CartRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CartService {

    @Autowired
    CartRepository cartRepository;

    public Cart addToCart(Cart cart){
        return cartRepository.save(cart);
    }

    public List<Cart> getDetailByUserName(String userName){
        return cartRepository.findByUserName(userName);
    }
}
