package com.example.demo.service.application;

import com.example.demo.dto.CreateProductDto;
import com.example.demo.dto.DisplayProductDto;

import java.util.List;

public interface ProductApplicationService {

    DisplayProductDto addProduct(CreateProductDto createProductDto);

    DisplayProductDto updateProduct(CreateProductDto createProductDto, Long id);
    DisplayProductDto findById(Long id);

    List<DisplayProductDto> listAllProducts();

    void addDiscount(int discount, Long productId);

    void deleteDiscount(Long productId);

    int calculateDiscountPrice(Long id);


    void deleteProduct(Long productId);
    void changeQuantity(int q, Long productId);

}
