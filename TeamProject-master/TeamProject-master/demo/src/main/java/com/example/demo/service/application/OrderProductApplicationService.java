package com.example.demo.service.application;

import com.example.demo.dto.CreateOrderProductDto;
import com.example.demo.dto.DisplayOrderProductDto;

import java.util.List;

public interface OrderProductApplicationService {

    DisplayOrderProductDto findById(Long id);

    List<DisplayOrderProductDto> findAll();

    Integer calculatePricePerOrderProduct(Long orderProductId);

    // isValidQuantity nema potreba / Kontrolerot nikogash ne go povikuva
}
