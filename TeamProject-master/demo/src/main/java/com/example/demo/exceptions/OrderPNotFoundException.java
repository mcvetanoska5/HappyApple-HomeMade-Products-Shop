package com.example.demo.exceptions;

public class OrderPNotFoundException extends RuntimeException{
    public OrderPNotFoundException() {
        super("This order for this product does NOT exist");
    }

    public OrderPNotFoundException(String message) {
        super(message);
    }
}
