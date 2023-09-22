package com.scalapay.order.exception;

public class BadRequestScalapayException extends RuntimeException{

    public BadRequestScalapayException(String msg){
        super(msg);
    }
}
