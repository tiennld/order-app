package com.scalapay.order.dto.request.order;

import lombok.Getter;

@Getter
public class AddressDTO {

    private String phoneNumber;
    private String countryCode;
    private String name;
    private String postcode;
    private String suburb;
    private String line1;
}
