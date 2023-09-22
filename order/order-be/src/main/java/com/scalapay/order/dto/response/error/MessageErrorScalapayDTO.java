package com.scalapay.order.dto.response.error;

import lombok.Getter;

import java.util.List;

@Getter
public class MessageErrorScalapayDTO {

    private int status;
    private String statusText;
    private List<ErrorScalapayDTO> errors;
}
