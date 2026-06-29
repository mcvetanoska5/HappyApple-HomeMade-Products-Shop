package com.example.demo.model;


import jakarta.persistence.*;
import jakarta.validation.constraints.Positive;
import lombok.Data;

import java.util.List;

@Data
@Entity
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    private int price;

    @Column(length = 1000)
    private String description;

    @Positive
    private int quantity;

    private int discount;

    @ElementCollection
    private List<String> featureList;

    @ElementCollection
    private List<String> images;

    public Product(String name, int price, String description, int quantity, List<String> images, List<String> featureList) {
        this.description = description;
        this.name = name;
        this.price = price;
        this.quantity = quantity;
        this.discount = 0;
        this.images = images;
        this.featureList = featureList;
    }

    public Product() {
        this.discount = 0;
    }

}
