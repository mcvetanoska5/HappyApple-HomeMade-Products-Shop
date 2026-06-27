package com.example.demo.service.application.impl;

import com.example.demo.dto.CreateOrderProductDto;
import com.example.demo.dto.DisplayOrderProductDto;
import com.example.demo.service.application.OrderProductApplicationService;
import com.example.demo.service.domain.OrderProductService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OrderProductApplicationServiceImpl implements OrderProductApplicationService {

    private final OrderProductService orderProductService;

    public OrderProductApplicationServiceImpl(OrderProductService orderProductService) {
        this.orderProductService = orderProductService;
    }

    @Override
    public DisplayOrderProductDto findById(Long id) {
        return DisplayOrderProductDto.from(this.orderProductService
                .findById(id));
    }

    @Override
    public List<DisplayOrderProductDto> findAll() {
        return DisplayOrderProductDto.from(this.orderProductService
                .findAll());
    }

    @Override
    public Integer calculatePricePerOrderProduct(Long orderProductId) {
        return this.orderProductService
                .calculatePricePerOrderProduct(orderProductId);
    }

    /*  NEMA POTREBA DA SE IMPLEMENTIRAAT, KONTROLEROT NIKOGASH NE GI POVIKUVA NIV
    @Override
    public boolean isValidQuantity(CreateOrderProductDto createOrderProductDto) {
        return false;
    }

    @Override
    public boolean isValidQuantity(DisplayOrderProductDto displayOrderProductDto, int quantity) {
        return false;
    }

     */
}
