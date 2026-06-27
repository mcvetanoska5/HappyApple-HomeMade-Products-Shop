package com.example.demo.exceptions;

public class CartNotFoundException extends RuntimeException{
    public CartNotFoundException() {
        super("This user do NOT have a cart");
    }

    public CartNotFoundException(String message) {
        super(message);
    }
}
