package com.example.demo.service.domain.impl;

import com.example.demo.exceptions.ProductNotFoundException;
import com.example.demo.model.Product;
import com.example.demo.repository.ProductRepository;
import com.example.demo.service.domain.ProductService;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;


@Service
public class ProductServiceImpl implements ProductService {

    private final ProductRepository productRepository;

    public ProductServiceImpl(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    @Override
    public Product addProduct(Product product) {
        return this.productRepository.save(product);
    }

    @Override
    public Product updateProduct(Product product, Long id) {
        Product p = this.findById(id);

        p.setName(product.getName());
        p.setQuantity(product.getQuantity());
        p.setDescription(product.getDescription());
        p.setPrice(product.getPrice());
        p.setImages(product.getImages());
        p.setFeatureList(product.getFeatureList());

        return this.productRepository
                .save(p);
    }

    @Override
    public Product findById(Long id) {
        return this.productRepository
                .findById(id)
                .orElseThrow(ProductNotFoundException::new);
    }

    @Override
    public List<Product> listAllProducts() {
        return this.productRepository
                .findAll();
    }


    @Override
    public void addDiscount(int discount, Long productId) {
        Product p = this.findById(productId);
        p.setDiscount(discount);
        this.productRepository.save(p);
    }

    @Override
    public void deleteDiscount(Long productId) {
        Product p = this.findById(productId);
        p.setDiscount(0);
        this.productRepository.save(p);
    }

    @Override
    public int calculateDiscountPrice(Long productId) {
        Product p = this.findById(productId);
        int oldPrice = p.getPrice();
        int discount = p.getDiscount();
        return (int) ((1 - discount / 100.0) * oldPrice);
    }

    @Override
    public void deleteProduct(Long productId) {
        Product p = this.findById(productId);
        this.productRepository.delete(p);
    }

    @Override
    public void changeQuantity(int q, Long productId) {
        Product p = this.findById(productId);
        p.setQuantity(q);
        this.productRepository.save(p);
    }

}
