package com.example.demo.web.controllers;

import com.example.demo.dto.LoginUserRequestDto;
import com.example.demo.dto.LoginUserResponseDto;
import com.example.demo.dto.RegisterUserRequestDto;
import com.example.demo.dto.RegisterUserResponseDto;
import com.example.demo.model.User;
import com.example.demo.service.application.UserApplicationService;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/users")
public class UserController {
    private final UserApplicationService userApplicationService;

    public UserController(UserApplicationService userApplicationService) {
        this.userApplicationService = userApplicationService;
    }

    @GetMapping
    public ResponseEntity<List<RegisterUserResponseDto>> listUsers(){
        return ResponseEntity
                .ok(this
                .userApplicationService.listUsers());
    }

    @GetMapping("/{username}")
    public ResponseEntity<RegisterUserResponseDto> findByUsername(@PathVariable String username){
        return ResponseEntity.ok(this.userApplicationService
                .findByUsername(username));
    }

    @PostMapping("/register")
    public ResponseEntity<RegisterUserResponseDto> registerUser(@RequestBody RegisterUserRequestDto registerUserRequestDto){
        return ResponseEntity.ok(this.userApplicationService
                .registerUser(registerUserRequestDto));
    }

    @DeleteMapping("/delete/{username}")
    public ResponseEntity<Void> deleteUser(@PathVariable String username){
        this.userApplicationService
                .deleteUser(username);

        return ResponseEntity.noContent().build();
    }

    @PutMapping("/update")
    public ResponseEntity<RegisterUserResponseDto> updateUser(@AuthenticationPrincipal User user,
                                                              @RequestBody RegisterUserRequestDto registerUserRequestDto){
        System.out.println("******** " + registerUserRequestDto + " ****************");

        return ResponseEntity.ok(this.userApplicationService
                .updateUser(user.getUsername(), registerUserRequestDto));
    }


    @PostMapping("/login")
    public ResponseEntity<LoginUserResponseDto> login(@RequestBody LoginUserRequestDto loginUserRequestDto){

        return ResponseEntity.ok(this
                .userApplicationService
                .login(loginUserRequestDto));
    }

    @GetMapping("/me")
    public ResponseEntity<RegisterUserResponseDto> me(@AuthenticationPrincipal User user){
        return ResponseEntity.ok(userApplicationService
                .findByUsername(user.getUsername()));
    }

}
