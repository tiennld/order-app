package com.scalapay.order.dto.response.error;

import lombok.Getter;

import java.util.List;

@Getter
public class ErrorScalapayDTO {

    private List<String> field;
    private String location;
    private List<String> messages;
    private List<String> types;
}
