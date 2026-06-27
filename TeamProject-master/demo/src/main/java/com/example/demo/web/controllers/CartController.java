package com.example.demo.web.controllers;

import com.example.demo.dto.CreateOrderProductDto;
import com.example.demo.dto.DisplayCartDetailsDto;
import com.example.demo.model.User;
import com.example.demo.service.application.CartApplicationService;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/api/cart")
public class CartController {

    private final CartApplicationService cartApplicationService;

    public CartController(CartApplicationService cartApplicationService) {
        this.cartApplicationService = cartApplicationService;
    }

    @DeleteMapping("/delete/{orderProductId}")
    public ResponseEntity<Void> removeFromCart(@AuthenticationPrincipal User user, @PathVariable Long orderProductId) {
        this.cartApplicationService
                .removeFromCart(user.getUsername(), orderProductId);

        return ResponseEntity.noContent()
                .build();
    }   // Vo stranata ShoppingCart ako sakame da otstraneme orderProduct

    @GetMapping
    public ResponseEntity<DisplayCartDetailsDto> findCartByUser(@AuthenticationPrincipal User user) {
        return ResponseEntity.ok(this.cartApplicationService
                .findCartByUser(user.getUsername()));
    }


    @DeleteMapping("/clear")
    public ResponseEntity<Void> clearCart(@AuthenticationPrincipal User user) {
        this.cartApplicationService
                .clearCart(user.getUsername());

        return ResponseEntity.noContent().build();
    }


    @PostMapping("/add")
    public ResponseEntity<Void> addToCart(@AuthenticationPrincipal User user,
                                          @RequestBody CreateOrderProductDto createOrderProductDto) {

        this.cartApplicationService
                .addToCart(user.getUsername(), createOrderProductDto);

        return ResponseEntity.noContent()
                .build();
    }

    @PatchMapping("/modifyQuantity/{orderProductId}")
    public ResponseEntity<Void> changeQuantity(@PathVariable Long orderProductId,
                                               @RequestParam int newQuantity,
                                               @AuthenticationPrincipal User user) {

        this.cartApplicationService
                .changeQuantity(orderProductId, newQuantity, user.getUsername());

        return ResponseEntity
                .noContent().build();

    }   // za vo Shopping Cart stranata, ako nekoj smene quantity
    //vo Product.html takvo nesto ne e potrebno

}
