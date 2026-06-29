package com.example.demo.service.domain;

import com.example.demo.model.User;

import java.util.List;

public interface UserService {
    User findByUsername(String username);

    User registerUser(User user);
    List<User> listUsers();

    //update User
    User updateUser(String username, User user);
    void deleteUser(String username);

    User login(String username, String password);

    //it is not finished ... + log in + something else
}
