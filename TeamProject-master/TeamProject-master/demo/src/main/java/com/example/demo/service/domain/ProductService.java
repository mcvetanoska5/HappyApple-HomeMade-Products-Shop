package com.example.demo.service.domain;

import com.example.demo.model.Product;

import java.util.List;

public interface ProductService {
    Product addProduct(Product product);  //ako toj produkt veke postoi [ako ima ist code] ProductAlreadyExistException
    Product updateProduct(Product product, Long id);  //    Product Already exist Exception

    Product findById(Long id);

    List<Product> listAllProducts();

    void addDiscount(int discount, Long productId);

    void deleteDiscount(Long productId);

    int calculateDiscountPrice(Long productId);
    void deleteProduct(Long productId);

    void changeQuantity(int q, Long productId);   //pominal rokot na proizvodite mora da gi otstrane



    //ROLE_CUSTOMER NE SMEE DA NAPRAVE add, update, delete, addQuantity and subtractQuantity

}
