package com.scalapay.order.exception;

public class UnauthorizedScalapayException extends RuntimeException{

    public UnauthorizedScalapayException(String msg){
        super(msg);
    }
}
