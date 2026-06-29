package com.example.demo.service.application.impl;

import com.example.demo.dto.LoginUserRequestDto;
import com.example.demo.dto.LoginUserResponseDto;
import com.example.demo.dto.RegisterUserRequestDto;
import com.example.demo.dto.RegisterUserResponseDto;
import com.example.demo.helpers.JwtHelper;
import com.example.demo.model.User;
import com.example.demo.service.application.UserApplicationService;
import com.example.demo.service.domain.UserService;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class UserApplicationServiceImpl implements UserApplicationService {

    private final UserService userService;

    private final JwtHelper jwtHelper;

    public UserApplicationServiceImpl(UserService userService, JwtHelper jwtHelper) {
        this.userService = userService;
        this.jwtHelper = jwtHelper;
    }


    @Override
    public RegisterUserResponseDto findByUsername(String username) {
        return RegisterUserResponseDto.from(this.userService
                .findByUsername(username));
    }

    @Override
    public RegisterUserResponseDto registerUser(RegisterUserRequestDto registerUserRequestDto) {
        return RegisterUserResponseDto.from(this.userService
                .registerUser(registerUserRequestDto.toUser()));
    }

    @Override
    public List<RegisterUserResponseDto> listUsers() {
        return RegisterUserResponseDto.from(this.userService
                .listUsers());
    }

    @Override
    public RegisterUserResponseDto updateUser(String username, RegisterUserRequestDto registerUserRequestDto) {
        return RegisterUserResponseDto.from(this.userService
                .updateUser(username, registerUserRequestDto.toUser()));
    }

    @Override
    public void deleteUser(String username) {
        this.userService
                .deleteUser(username);
    }

    @Override
    public LoginUserResponseDto login(LoginUserRequestDto loginUserRequestDto) {
        User user = this.userService
                .login(loginUserRequestDto.username(), loginUserRequestDto.password());

        String token = jwtHelper.generateToken(user);

        return new LoginUserResponseDto(token);

    }
}
