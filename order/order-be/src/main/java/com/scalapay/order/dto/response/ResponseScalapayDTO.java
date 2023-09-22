package com.scalapay.order.dto.response;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ResponseScalapayDTO {

    private String token;
    private String expires;
    private String checkoutUrl;
}
