package com.example.demo.exceptions;

public class NotEnoughQuantityException extends RuntimeException{
    public NotEnoughQuantityException() {
        super("We do not have that much quantity!");
    }

    public NotEnoughQuantityException(String message) {
        super(message);
    }
}
