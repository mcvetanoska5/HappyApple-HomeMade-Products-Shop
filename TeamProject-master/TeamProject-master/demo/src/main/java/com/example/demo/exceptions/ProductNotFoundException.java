package com.example.demo.exceptions;

public class ProductNotFoundException extends RuntimeException{
    public ProductNotFoundException() {
        super("The requested product doesn't exist");
    }

    public ProductNotFoundException(String message) {
        super(message);
    }
}
