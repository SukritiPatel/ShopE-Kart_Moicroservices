package com.example.orderHistory.repository;

import com.example.orderHistory.entity.orderDetail;
import org.springframework.data.jpa.repository.JpaRepository;

public interface orderRepository extends JpaRepository<orderDetail,Integer> {
}
