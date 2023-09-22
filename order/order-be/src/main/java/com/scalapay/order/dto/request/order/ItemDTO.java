package com.scalapay.order.dto.request.order;

import lombok.Getter;

import java.util.List;

@Getter
public class ItemDTO {

    private String sku;
    private String gtin;
    private String name;
    private String brand;
    private AmountDTO price;
    private String category;
    private Integer quantity;
    private List<String> subcategory;
    private String pageUrl;
    private String imageUrl;
}
