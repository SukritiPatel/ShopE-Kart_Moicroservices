package com.example.orderHistory.service;

import com.example.orderHistory.entity.Feedback;
import com.example.orderHistory.repository.FeedbackRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class feedbackService {

    @Autowired
    FeedbackRepo feedbackRepo;

    public Feedback createFeedback(Feedback feedback) {
        return feedbackRepo.save(feedback);
    }

    public List<Feedback> allFeedback() {
        return feedbackRepo.findAll();
    }

}
