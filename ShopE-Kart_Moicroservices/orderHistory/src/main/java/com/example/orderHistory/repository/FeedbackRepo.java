package com.example.orderHistory.repository;

import com.example.orderHistory.entity.Feedback;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FeedbackRepo extends JpaRepository<Feedback,Integer> {
}
