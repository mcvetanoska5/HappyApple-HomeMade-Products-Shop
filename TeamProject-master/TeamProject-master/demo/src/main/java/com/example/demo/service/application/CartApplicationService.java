package com.example.demo.service.application;

import com.example.demo.dto.*;
import com.example.demo.model.User;

public interface CartApplicationService {

    DisplayCartDetailsDto findCartByUser(String username);

   // DisplayCartDto createCart(User user);

    void addToCart(String username, CreateOrderProductDto createOrderProductDto);

    void removeFromCart(String username, Long orderProductId);

    void clearCart(String username);

    //int calculateTotalSum(CreateCartDto createCartDto);

    void changeQuantity(Long orderProductId, int newQuantity, String username);
}
