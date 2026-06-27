package com.example.demo.service.domain.impl;

import com.example.demo.exceptions.CartNotFoundException;
import com.example.demo.exceptions.NotEnoughQuantityException;
import com.example.demo.exceptions.OrderPNotFoundException;
import com.example.demo.model.Cart;
import com.example.demo.model.OrderProduct;
import com.example.demo.model.User;
import com.example.demo.repository.CartRepository;
import com.example.demo.service.domain.CartService;
import com.example.demo.service.domain.OrderProductService;
import com.example.demo.service.domain.ProductService;
import com.example.demo.service.domain.UserService;
import org.springframework.stereotype.Service;

import java.util.Objects;
import java.util.Optional;

@Service
public class CartServiceImpl implements CartService {

    private final CartRepository cartRepository;

    private final UserService userService;

    private final OrderProductService orderProductService;

    private final ProductService productService;

    public CartServiceImpl(CartRepository cartRepository, UserService userService, OrderProductService orderProductService, ProductService productService) {
        this.cartRepository = cartRepository;
        this.userService = userService;
        this.orderProductService = orderProductService;
        this.productService = productService;
    }


    @Override
    public Cart findCartByUser(String username) {
        User user = this.userService
                .findByUsername(username);

        return this.cartRepository
                .findCartByUser(user)
                .orElseThrow(CartNotFoundException::new);

    }

    @Override
    public Optional<Cart> findCartByUserOptional(String username) {
        User user = this.userService
                .findByUsername(username);

        return this.cartRepository
                .findCartByUser(user);
    }

    @Override
    public Cart createCart(User user) {
        Cart cart = new Cart(user);
        return this.cartRepository.save(cart);
    }

    public boolean doWeHaveThatProductBefore(Cart cart, OrderProduct orderProduct) {
        Optional<OrderProduct> optionalOrderProduct =
                cart.getList().stream()
                        .filter(op -> op.getProduct().getId().equals(orderProduct.getProduct().getId()))
                        .findFirst();

        return optionalOrderProduct.isPresent();
    }

    @Override
    public void addToCart(String username, OrderProduct orderProduct) {

        Cart cart = findCartByUserOptional(username)
                .orElseGet(() -> createCart(userService.findByUsername(username)));

        cart.addOrUpdateProduct(orderProduct);

        cart.setTotalPrice(calculateTotalSum(cart));

        cartRepository.save(cart);
    }


    @Override
    public void removeFromCart(String username, Long orderProductId) {
        Cart cc = this.findCartByUser(username);
        OrderProduct orderProduct = this.orderProductService.findById(orderProductId);

        cc.getList().remove(orderProduct);
        int total = calculateTotalSum(cc);
        cc.setTotalPrice(total);
        this.cartRepository.save(cc);
    }

    @Override
    public void clearCart(String username) {
        Cart cc = this.findCartByUser(username);

        cc.getList().clear();
        cc.setTotalPrice(0);
        this.cartRepository.save(cc);

    }

    @Override
    public int calculateTotalSum(Cart cart) {

        int sum = 0;

        for (int i = 0; i < cart.getList().size(); i++) {

            OrderProduct o = cart.getList().get(i);
            if (o.getProduct().getDiscount() == 0) {
                sum = sum + (o.getProduct().getPrice() * o.getRequiredQuantity());
            } else {
                sum = sum + ((this.productService.calculateDiscountPrice(o.getProduct().getId()))
                        * o.getRequiredQuantity());
            }
        }

        return sum;
    }

    @Override
    public void changeQuantity(Long orderProductId, int newQuantity, String username) {
        Cart cart = this.findCartByUser(username);

        OrderProduct orderProduct = cart
                .getList()
                .stream()
                .filter(op -> Objects.equals(op.getId(), orderProductId))
                .findFirst()
                .orElseThrow(OrderPNotFoundException::new);

        if (this.orderProductService.isValidQuantity(orderProduct)) {
            orderProduct.setRequiredQuantity(newQuantity);
            int total = calculateTotalSum(cart);
            cart.setTotalPrice(total);
            this.cartRepository.save(cart);
        } else throw new NotEnoughQuantityException();

    }
}