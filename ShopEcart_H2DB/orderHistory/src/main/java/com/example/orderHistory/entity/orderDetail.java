package com.example.orderHistory.entity;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.NonNull;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class orderDetail {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int orderId;
    private String name;
    private String userName;
    private String email;
    private long contact;
    private String address;
    private String productName;
    private int productPrice;
    private String productPic;
}
