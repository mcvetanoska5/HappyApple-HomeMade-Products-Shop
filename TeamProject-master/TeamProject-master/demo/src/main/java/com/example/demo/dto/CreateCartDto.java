package com.example.demo.dto;

import com.example.demo.model.Cart;
import com.example.demo.model.User;

public record CreateCartDto(String username) {

    public Cart toCart(User user){
        return new Cart(user);
    }
}
