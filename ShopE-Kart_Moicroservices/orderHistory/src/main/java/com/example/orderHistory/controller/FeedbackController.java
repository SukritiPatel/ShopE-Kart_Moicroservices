package com.example.orderHistory.controller;

import com.example.orderHistory.entity.Feedback;
import com.example.orderHistory.service.feedbackService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/feedback")
public class FeedbackController {

    @Autowired
    feedbackService feedbackService;

    @PostMapping("/addFeedback")
    public Feedback addFeedback(@RequestBody Feedback feedback){
        return feedbackService.createFeedback(feedback);
    }

    @GetMapping("/allFeedback")
    public List<Feedback> allFeedback(){
        return feedbackService.allFeedback();
    }
}
