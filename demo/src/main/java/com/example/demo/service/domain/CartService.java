package com.example.demo.service.domain;

import com.example.demo.model.Cart;
import com.example.demo.model.OrderProduct;
import com.example.demo.model.User;

import java.util.Optional;

public interface CartService {
    Cart findCartByUser(String username);

    Optional<Cart> findCartByUserOptional(String username);

    Cart createCart(User user);

    void addToCart(String username, OrderProduct orderProduct);

    void removeFromCart(String username, Long orderProductId);

    void clearCart(String username);

    int calculateTotalSum(Cart cart);

    void changeQuantity(Long orderProductId, int newQuantity, String username);

    //checkout(User user)    koga ke se ide na checkout treba da se odzeme taa kolicina i da se vide kolku proizvodi ostanuvat
    //vo sekoj metod checkout mora prvo da se provere dali do momentot koga se pritisne na checkout stvarno ima tolkava kolicina
    // (moze nekoj kupil vo megu vreme)
    //nema da ima payment procesor tuku ke ima korisnikot da vnese podatoci (tel broj, ulica, ime, prezime) i koga ke poraca preku kargo ke mu stigne
    // do doma i na lice mesto plaka
    //ustvari so metodot checkout korisnikot ja pravi narackata/ moze da ima eden prozorec "Dali ste sigurni deka sakate da naracate?"
}