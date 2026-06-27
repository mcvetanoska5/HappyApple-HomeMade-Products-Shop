package com.example.demo.dto;

import com.example.demo.model.Role;
import com.example.demo.model.User;

import javax.swing.plaf.PanelUI;
import java.util.List;
import java.util.stream.Collectors;

public record RegisterUserResponseDto(
        String username,
        String name,
        String surname,
        Role role
) {
    public static RegisterUserResponseDto from(User user){
        return new RegisterUserResponseDto(
                user.getUsername(),
                user.getName(),
                user.getSurname(),
                user.getRole()
        );
    }

    public static List<RegisterUserResponseDto> from(List<User> users){
        return users.stream()
                .map(RegisterUserResponseDto::from)
                .collect(Collectors.toList());
    }
}
