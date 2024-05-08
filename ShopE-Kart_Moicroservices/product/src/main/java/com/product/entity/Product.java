package com.product.entity;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.*;

import javax.persistence.*;

@Entity
@Table(name="products")
@Data
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class Product {

    @Id
    //@GeneratedValue(strategy = GenerationType.AUTO)
    private Integer productId;
    private String name;
    private Double price;
    private String imageURL;
    private String description;
    private Integer categoryId;
    private String categoryName;

}
