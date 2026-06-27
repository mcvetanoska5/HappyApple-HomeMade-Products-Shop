package com.example.demo.model;


import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
public class OrderProduct {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "product_id")
    private Product product;
    private int requiredQuantity;

    @ManyToOne
    @JoinColumn(name = "cart_id")
    private Cart cart;

    public OrderProduct(Product product, int requiredQuantity){
        this.product = product;
        this.requiredQuantity = requiredQuantity;
    }

    public OrderProduct(){

    }
}
