package com.example.demo.dto;

import com.example.demo.model.Product;

import java.util.List;
import java.util.stream.Collectors;

public record DisplayProductDto(Long productId,
                                String productName,
                                int productPrice,
                                int productQuantity,
                                String description,
                                int discount,
                                List<String> images,
                                List<String> featureList
) {

    public static DisplayProductDto from(Product product) {
        return new DisplayProductDto(
                product.getId(),
                product.getName(),
                product.getPrice(),
                product.getQuantity(),
                product.getDescription(),
                product.getDiscount(),
                product.getImages(),
                product.getFeatureList()
        );
    }

    public static List<DisplayProductDto> from(List<Product> products) {
        return products.stream()
                .map(DisplayProductDto::from)
                .collect(Collectors.toList());
    }

}
