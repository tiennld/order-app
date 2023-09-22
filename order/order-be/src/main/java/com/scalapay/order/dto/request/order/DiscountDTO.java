package com.scalapay.order.dto.request.order;

import lombok.Getter;

@Getter
public class DiscountDTO {

    private AmountDTO amount;
    private String displayName;
}
