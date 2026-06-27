package com.example.demo.dto;

import com.example.demo.model.OrderProduct;
import com.example.demo.model.Product;

public record CreateOrderProductDto(Long productId,
                                    int requiredQuantity) {

    public OrderProduct toOrderProduct(Product product){
        return new OrderProduct(product, requiredQuantity);
    }
}
