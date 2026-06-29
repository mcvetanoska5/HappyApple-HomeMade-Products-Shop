package com.example.demo.service.domain;

import com.example.demo.model.Cart;
import com.example.demo.model.OrderProduct;

import java.util.List;

public interface OrderProductService {

    OrderProduct findById(Long id);
    List<OrderProduct> findAll();
    boolean isValidQuantity(OrderProduct orderProduct);

    Integer calculatePricePerOrderProduct(Long orderProductId);

}
