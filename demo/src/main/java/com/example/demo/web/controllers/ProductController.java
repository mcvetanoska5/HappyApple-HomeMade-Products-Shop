package com.example.demo.web.controllers;

import com.example.demo.dto.CreateProductDto;
import com.example.demo.dto.DisplayProductDto;
import com.example.demo.service.application.ProductApplicationService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/products")
public class ProductController {
    private final ProductApplicationService productApplicationService;

    public ProductController(ProductApplicationService productApplicationService) {
        this.productApplicationService = productApplicationService;
    }

    @GetMapping("/{id}")
    public ResponseEntity<DisplayProductDto> findById(@PathVariable Long id) {
        return ResponseEntity.ok(productApplicationService
                .findById(id));
    }

    @GetMapping
    public ResponseEntity<List<DisplayProductDto>> listAllProducts() {
        return ResponseEntity.ok(this.productApplicationService
                .listAllProducts());
    }

    @PostMapping("/add")
    public ResponseEntity<DisplayProductDto> addProduct(@RequestBody CreateProductDto createProductDto) {
        return ResponseEntity.ok(this.productApplicationService
                .addProduct(createProductDto));
    }


    @PutMapping("/{id}/update")
    public ResponseEntity<DisplayProductDto> updateProduct(@RequestBody CreateProductDto createProductDto, @PathVariable Long id) {
        return ResponseEntity.ok(this.productApplicationService
                .updateProduct(createProductDto, id));
    }

    @DeleteMapping("/{productId}/delete")
    public ResponseEntity<Void> deleteProduct(@PathVariable Long productId) {

        this.productApplicationService
                .deleteProduct(productId);

        return ResponseEntity.noContent().build();
    }

    @PatchMapping("/{productId}/quantity")
    public ResponseEntity<Void> changeQuantity(@PathVariable Long productId, @RequestParam int q) {

        this.productApplicationService
                .changeQuantity(q, productId);

        return ResponseEntity.noContent().build();
    }


    @PostMapping("/{productId}/discount")
    public ResponseEntity<Void> addDiscount(@PathVariable Long productId, @RequestParam int discount) {
        this.productApplicationService
                .addDiscount(discount, productId);

        return ResponseEntity.noContent()
                .build();
    }

    @DeleteMapping("/{productId}/discount")
    public ResponseEntity<Void> deleteDiscount(@PathVariable Long productId) {
        this.productApplicationService
                .deleteDiscount(productId);

        return ResponseEntity.noContent()
                .build();
    }


    /*
    @PostMapping("/{productId}/calculate-discount-price")
    public ResponseEntity<Integer> calculateDiscountPrice(@PathVariable Long productId){
        return ResponseEntity.ok(this.productApplicationService
                .calculateDiscountPrice(productId));
    }
     */

}
