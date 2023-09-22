package com.scalapay.order.dto.request.order;

import lombok.Getter;

@Getter
public class MerchantDTO {

    private String redirectCancelUrl;
    private String redirectConfirmUrl;
}
