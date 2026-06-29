package com.example.demo.service.application.impl;

import com.example.demo.dto.*;
import com.example.demo.exceptions.CartNotFoundException;
import com.example.demo.model.Product;
import com.example.demo.model.User;
import com.example.demo.service.application.CartApplicationService;
import com.example.demo.service.domain.CartService;
import com.example.demo.service.domain.ProductService;
import com.example.demo.service.domain.UserService;
import org.springframework.stereotype.Service;

@Service
public class CartApplicationServiceImpl implements CartApplicationService {

    private final CartService cartService;

    private final ProductService productService;

    public CartApplicationServiceImpl(CartService cartService, ProductService productService) {
        this.cartService = cartService;
        this.productService = productService;
    }

    @Override
    public DisplayCartDetailsDto findCartByUser(String username) {
        return DisplayCartDetailsDto.from(
                this.cartService
                .findCartByUser(username));
    }

    /*
    @Override
    public DisplayCartDto createCart(User user) {
        return DisplayCartDto.from(this.cartService
                .createCart(user));
    }

     */

    @Override
    public void addToCart(String username, CreateOrderProductDto createOrderProductDto) {

        Product product = this.productService
                .findById(createOrderProductDto.productId());


        this.cartService.addToCart(username, createOrderProductDto.toOrderProduct(product));
    }

    @Override
    public void removeFromCart(String username, Long opId) {
        this.cartService
                .removeFromCart(username, opId);
    }

    @Override
    public void clearCart(String username) {
        this.cartService
                .clearCart(username);
    }

    /*
    @Override
    public int calculateTotalSum(CreateCartDto createCartDto) {
        User user = this.userService.findByUsername(createCartDto.username());

        return this.cartService
                .calculateTotalSum(createCartDto.toCart(user));
    }

     */

    @Override
    public void changeQuantity(Long orderProductId, int newQuantity, String username) {
        this.cartService
                .changeQuantity(orderProductId, newQuantity, username);
    }
}
