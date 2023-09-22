package com.scalapay.order.dto.response;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ResponseDTO {

    private String status;
    private int code;
    private Object message;
}
