package com.scalapay.order.exception;

public class InternalErrorException extends RuntimeException{

    public InternalErrorException(String msg){
        super(msg);
    }
}
