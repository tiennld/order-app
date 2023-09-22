package com.scalapay.order.dto.request.order;

import lombok.Getter;

import java.util.List;

@Getter
public class OrderDetailsDTO {

    private List<ItemDTO> items;
    private AddressDTO billing;
    private ConsumerDTO consumer;
    private MerchantDTO merchant;
    private AddressDTO shipping;
    private List<DiscountDTO> discounts;
    private AmountDTO taxAmount;
    private AmountDTO totalAmount;
    private AmountDTO shippingAmount;
    private String merchantReference;
    private String type = "online";
    private String product = "pay-in-3";
    private FrequencyDTO frequency;
    private Integer orderExpiryMilliseconds = 600000;
}
