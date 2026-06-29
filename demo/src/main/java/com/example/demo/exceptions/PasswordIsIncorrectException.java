package com.example.demo.exceptions;

public class PasswordIsIncorrectException extends RuntimeException{
    public PasswordIsIncorrectException() {
        super("This password do NOT match the username!");
    }

    public PasswordIsIncorrectException(String message) {
        super(message);
    }
}
