package com.example.demo.service.application;

import com.example.demo.dto.LoginUserRequestDto;
import com.example.demo.dto.LoginUserResponseDto;
import com.example.demo.dto.RegisterUserRequestDto;
import com.example.demo.dto.RegisterUserResponseDto;

import java.util.List;

public interface UserApplicationService {

    RegisterUserResponseDto findByUsername(String username);

    RegisterUserResponseDto registerUser(RegisterUserRequestDto registerUserRequestDto);

    List<RegisterUserResponseDto> listUsers();

    RegisterUserResponseDto updateUser(String username, RegisterUserRequestDto registerUserRequestDto);

    void deleteUser(String username);

    LoginUserResponseDto login(LoginUserRequestDto loginUserRequestDto);

}
