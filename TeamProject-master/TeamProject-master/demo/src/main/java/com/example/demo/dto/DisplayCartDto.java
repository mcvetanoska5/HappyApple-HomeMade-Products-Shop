package com.example.demo.dto;

import com.example.demo.model.Cart;

import java.util.List;
import java.util.stream.Collectors;

//samo so username i lista od id na orderProducts
public record DisplayCartDto(Long cartId,
                             String username,
                             int totalPrice
                             ) {

    public static DisplayCartDto from(Cart cart){
        return new DisplayCartDto(
                cart.getId(),
                cart.getUser().getUsername(),
                cart.getTotalPrice());
    }

    //nema potreba od List<DisplayCartDto>
}
