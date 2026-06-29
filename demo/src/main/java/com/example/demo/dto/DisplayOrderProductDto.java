package com.example.demo.dto;

import com.example.demo.model.OrderProduct;
import com.example.demo.model.Product;

import java.util.List;
import java.util.stream.Collectors;

public record DisplayOrderProductDto(Long orderProductId,
                                     DisplayProductDto displayProductDto,
                                     int requiredQuantity) {

    public static DisplayOrderProductDto from(OrderProduct orderProduct){
        return new DisplayOrderProductDto(
                orderProduct.getId(),
                DisplayProductDto.from(orderProduct.getProduct()),
                orderProduct.getRequiredQuantity()
        );
    }

    public static List<DisplayOrderProductDto> from(List<OrderProduct> orderProducts){
        return orderProducts
                .stream()
                .map(DisplayOrderProductDto::from)
                .collect(Collectors.toList());
    }
}
