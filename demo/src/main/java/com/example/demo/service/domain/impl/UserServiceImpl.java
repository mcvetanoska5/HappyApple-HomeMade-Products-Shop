package com.example.demo.service.domain.impl;

import com.example.demo.exceptions.PasswordIsIncorrectException;
import com.example.demo.exceptions.UserNotFoundException;
import com.example.demo.exceptions.UsernameAlreadyExistException;
import com.example.demo.model.User;
import com.example.demo.repository.UserRepository;
import com.example.demo.service.domain.UserService;
import org.springframework.stereotype.Service;
import org.springframework.security.crypto.password.PasswordEncoder;


import java.util.List;


@Service
public class UserServiceImpl implements UserService {
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;


    public UserServiceImpl(UserRepository userRepository, PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
    }


    @Override
    public User findByUsername(String username) {
        return this.userRepository
                .findUserByUsername(username)
                .orElseThrow(UserNotFoundException::new);
    }

    @Override
    public User registerUser(User user) {
        if(this.userRepository.findUserByUsername(user.getUsername()).isPresent()){
            throw new UsernameAlreadyExistException();
        }

        //public User(String name, String surname, String username, String password
        User newUser = new User(user.getName(), user.getSurname(), user.getUsername(), passwordEncoder.encode(user.getPassword()));
        return this.userRepository.save(newUser);
    }

    @Override
    public List<User> listUsers() {
        return this.userRepository
                .findAll();
    }

    @Override
    public User updateUser(String username, User user) {
        User u = this.findByUsername(username);

        u.setName(user.getName());
        u.setSurname(user.getSurname());
        if(!user.getPassword().isEmpty()){
            u.setPassword(passwordEncoder.encode(user.getPassword()));
        }
        //WE ARE NOT CHANGING ROLE IN THIS METHOD
        return this.userRepository.save(u);
    }

    @Override
    public void deleteUser(String username) {
        User user = this.findByUsername(username);
        this.userRepository.delete(user);
    }

    @Override
    public User login(String username, String password) {
        User u = this.findByUsername(username);

        if(passwordEncoder.matches(password, u.getPassword())){
            return u;
        }else throw new PasswordIsIncorrectException();

    }
}