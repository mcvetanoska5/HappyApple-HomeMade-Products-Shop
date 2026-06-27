package com.example.demo.dto;

import com.example.demo.model.Product;

import java.util.List;

public record CreateProductDto(String productName,
                               int productPrice,
                               int productQuantity,
                               String description,
                               List<String> images,
                               List<String> featureList) {
    public Product toProduct(){
        return new Product(productName, productPrice, description, productQuantity, images, featureList);
    }
}
