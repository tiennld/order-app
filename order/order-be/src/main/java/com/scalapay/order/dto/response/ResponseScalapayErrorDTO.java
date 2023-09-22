package com.scalapay.order.dto.response;

import com.scalapay.order.dto.response.error.MessageErrorScalapayDTO;
import lombok.Getter;

@Getter
public class ResponseScalapayErrorDTO {

    private String errorCode;
    private String errorId;
    private MessageErrorScalapayDTO message;
    private int httpStatusCode;
}
