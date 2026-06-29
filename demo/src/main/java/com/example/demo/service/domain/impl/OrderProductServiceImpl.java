package com.example.demo.service.domain.impl;

import com.example.demo.exceptions.NotEnoughQuantityException;
import com.example.demo.exceptions.OrderPNotFoundException;
import com.example.demo.model.OrderProduct;
import com.example.demo.repository.OrderProductRepository;
import com.example.demo.service.domain.OrderProductService;
import com.example.demo.service.domain.ProductService;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class OrderProductServiceImpl implements OrderProductService {
    private final OrderProductRepository orderProductRepository;

    private final ProductService productService;

    public OrderProductServiceImpl(OrderProductRepository orderProductRepository, ProductService productService) {
        this.orderProductRepository = orderProductRepository;
        this.productService = productService;
    }

    @Override
    public OrderProduct findById(Long id) {
        return this.orderProductRepository
                .findById(id)
                .orElseThrow(OrderPNotFoundException::new);
    }

    @Override
    public List<OrderProduct> findAll() {
        return this.orderProductRepository
                .findAll();
    }

    @Override
    public boolean isValidQuantity(OrderProduct orderProduct) {
        if(orderProduct.getRequiredQuantity() <= 0){
            return false;
        }
        return orderProduct.getRequiredQuantity() <= orderProduct.getProduct().getQuantity();
    }

    @Override
    public Integer calculatePricePerOrderProduct(Long orderProductId) {
        OrderProduct orderProduct = this.findById(orderProductId);
        int sum =0;

        if (orderProduct.getProduct().getDiscount() == 0) {
            sum = sum + (orderProduct.getProduct().getPrice() * orderProduct.getRequiredQuantity());
        } else {
            sum = sum + ((this.productService.calculateDiscountPrice(orderProduct.getProduct().getId()))
                    * orderProduct.getRequiredQuantity());
        }

        return sum;
    }

}
