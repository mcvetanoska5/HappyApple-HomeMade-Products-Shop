package com.example.demo.service.application.impl;

import com.example.demo.dto.CreateProductDto;
import com.example.demo.dto.DisplayProductDto;
import com.example.demo.service.application.ProductApplicationService;
import com.example.demo.service.domain.ProductService;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class ProductApplicationServiceImpl implements ProductApplicationService {

    private final ProductService productService;

    public ProductApplicationServiceImpl(ProductService productService) {
        this.productService = productService;
    }


    @Override
    public DisplayProductDto addProduct(CreateProductDto createProductDto) {
        return DisplayProductDto.from(this.productService
                .addProduct(createProductDto.toProduct()));

    }

    @Override
    public DisplayProductDto updateProduct(CreateProductDto createProductDto, Long id) {
        return DisplayProductDto.from(this.productService
                .updateProduct(createProductDto.toProduct(), id));
    }

    @Override
    public DisplayProductDto findById(Long id) {
        return DisplayProductDto.from(this.productService
                .findById(id));
    }

    @Override
    public List<DisplayProductDto> listAllProducts() {
        return DisplayProductDto.from(this.productService
                .listAllProducts());
    }

    @Override
    public void addDiscount(int discount, Long productId) {
        this.productService
                .addDiscount(discount, productId);
    }

    @Override
    public void deleteDiscount(Long productId) {
        this.productService
                .deleteDiscount(productId);
    }

    @Override
    public int calculateDiscountPrice(Long id) {

        return this.productService
                .calculateDiscountPrice(id);

    }

    @Override
    public void deleteProduct(Long productId) {
        this.productService
                .deleteProduct(productId);
    }

    @Override
    public void changeQuantity(int q, Long productId) {
        this.productService
                .changeQuantity(q, productId);
    }
}
