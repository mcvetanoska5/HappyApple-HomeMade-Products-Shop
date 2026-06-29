package com.example.demo.web.controllers;


import com.example.demo.dto.DisplayOrderProductDto;
import com.example.demo.service.application.OrderProductApplicationService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/orderProducts")
public class OrderProductController {

    private final OrderProductApplicationService orderProductApplicationService;


    public OrderProductController(OrderProductApplicationService orderProductApplicationService) {
        this.orderProductApplicationService = orderProductApplicationService;
    }

    @GetMapping("/{id}")
    public ResponseEntity<DisplayOrderProductDto> findById(@PathVariable Long id){
        return ResponseEntity.ok(this.orderProductApplicationService
                .findById(id));
    }

    @GetMapping
    public ResponseEntity<List<DisplayOrderProductDto>> findAll(){
        return ResponseEntity.ok(this.orderProductApplicationService
                .findAll());
    }

    @GetMapping("/{orderProductId}/price")
    public ResponseEntity<Integer> calculatePricePerOrderProduct(@PathVariable Long orderProductId){
        return ResponseEntity.ok(this.orderProductApplicationService
                .calculatePricePerOrderProduct(orderProductId));
    }
}
