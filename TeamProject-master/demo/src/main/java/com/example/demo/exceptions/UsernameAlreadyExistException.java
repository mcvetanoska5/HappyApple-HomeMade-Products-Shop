package com.example.demo.exceptions;

public class UsernameAlreadyExistException extends RuntimeException{
    public UsernameAlreadyExistException() {
        super("There is a user who already use this username! Invent another one.");
    }

    public UsernameAlreadyExistException(String message) {
        super(message);
    }
}
