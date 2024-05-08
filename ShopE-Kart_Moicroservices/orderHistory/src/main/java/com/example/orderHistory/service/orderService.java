package com.example.orderHistory.service;

import com.example.orderHistory.entity.orderDetail;
import com.example.orderHistory.repository.orderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class orderService {

    @Autowired
    orderRepository orderRepository;

    public orderDetail createOrder(orderDetail orderDetail) {
        return orderRepository.save(orderDetail);
    }

    public List<orderDetail> getAllOrder() {
        return orderRepository.findAll();
    }
}
