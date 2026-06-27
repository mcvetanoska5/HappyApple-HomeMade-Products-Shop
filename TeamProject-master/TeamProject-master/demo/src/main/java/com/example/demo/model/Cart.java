package com.example.demo.model;


import com.example.demo.exceptions.NotEnoughQuantityException;
import jakarta.persistence.*;
import lombok.Data;

import java.util.ArrayList;
import java.util.List;

@Entity
@Data
public class Cart {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private int totalPrice;

    @OneToMany(mappedBy = "cart", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<OrderProduct> list;

    @OneToOne
    private User user;

    public Cart(User user) {
        this.user = user;
        this.totalPrice = 0;
        this.list = new ArrayList<>();
    }

    public Cart() {
        this.totalPrice = 0;
        this.list = new ArrayList<>();
    }

    public void addOrUpdateProduct(OrderProduct newOrderProduct) {

        for (OrderProduct existing : this.list) {

            if (existing.getProduct().getId()
                    .equals(newOrderProduct.getProduct().getId())) {

                int newQuantity = existing.getRequiredQuantity()
                        + newOrderProduct.getRequiredQuantity();

                if (newQuantity > existing.getProduct().getQuantity()) {
                    throw new NotEnoughQuantityException();
                }

                existing.setRequiredQuantity(newQuantity);
                return;
            }
        }

        // ако не постои → додај нов
        if (newOrderProduct.getRequiredQuantity() > newOrderProduct.getProduct().getQuantity()) {
            throw new NotEnoughQuantityException();
        }

        this.addOrderProduct(newOrderProduct);
    }

    public void addOrderProduct(OrderProduct orderProduct) {
        this.list.add(orderProduct);
        orderProduct.setCart(this);
    }

    public void removeOrderProduct(OrderProduct orderProduct) {
        list.remove(orderProduct);
        orderProduct.setCart(null);
    }

    /*
    public void changeQuantity(OrderProduct newOrderProduct) {

        for (OrderProduct existing : this.list) {

            if (existing.getProduct().getId()
                    .equals(newOrderProduct.getProduct().getId())) {

                int newQuantity = existing.getRequiredQuantity()
                        + newOrderProduct.getRequiredQuantity();

                existing.setRequiredQuantity(newQuantity);
                return;
            }
        }
    }

     */
}
