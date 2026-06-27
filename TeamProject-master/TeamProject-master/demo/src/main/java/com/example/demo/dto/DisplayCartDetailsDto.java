package com.example.demo.dto;

import com.example.demo.model.Cart;
import com.example.demo.model.OrderProduct;
import com.example.demo.model.User;

import java.util.List;

public record DisplayCartDetailsDto(
        Long cartId,
        int totalPrice,
        RegisterUserResponseDto registerUserResponseDto,
        List<DisplayOrderProductDto> list
) {
    public static DisplayCartDetailsDto from(Cart cart){
        return new DisplayCartDetailsDto(
                cart.getId(),
                cart.getTotalPrice(),
                RegisterUserResponseDto.from(cart.getUser()),
                DisplayOrderProductDto.from(cart.getList())
        );
    }

    //nema potreba od List<DisplayCartDetailsDto>
}
