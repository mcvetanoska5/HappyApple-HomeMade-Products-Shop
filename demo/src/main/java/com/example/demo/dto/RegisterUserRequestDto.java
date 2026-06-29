package com.example.demo.dto;

import com.example.demo.model.User;

public record RegisterUserRequestDto(
        String username,
        String password,
        String name,
        String surname                             ) {

    public User toUser(){
        return new User(name, surname, username, password);
    }
}
