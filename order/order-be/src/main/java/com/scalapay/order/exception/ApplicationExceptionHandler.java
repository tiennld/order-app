package com.scalapay.order.exception;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.scalapay.order.dto.response.error.ErrorScalapayDTO;
import com.scalapay.order.dto.response.ResponseDTO;
import com.scalapay.order.dto.response.ResponseScalapayErrorDTO;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestControllerAdvice
public class ApplicationExceptionHandler {


    /*
     * Handle bad request from the scalapay
     *
     * @param BadRequestScalapayException This contains all error fields when created order fail
     *
     * @return ResponseDTO It will contain a map of error fields and their error message
     * @throw InternalErrorException If there is any wrong in the process
     * */
    @ExceptionHandler(BadRequestScalapayException.class)
    public ResponseEntity<ResponseDTO> handleBadRequestScalapayException(BadRequestScalapayException ex) {

        // This map will contain all error fields and their error message
        Map<String,String> map = new HashMap<>();
        try{
            ObjectMapper objectMapper = new ObjectMapper();
            ResponseScalapayErrorDTO res = objectMapper.readValue(ex.getMessage(),ResponseScalapayErrorDTO.class);

            // Get error object from the scalapay response
            List<ErrorScalapayDTO> errors = res.getMessage().getErrors();
            List<String> fields = new ArrayList<>();
            for(ErrorScalapayDTO error : errors){
                fields = error.getField();

                // The size of fields represent for field and its child fields
                // If the size of field is bigger than 1 means it has its child and index of that child

                if(fields.size() == 1){
                    map.put(fields.get(0),
                            error.getMessages().get(error.getMessages().size() - 1)
                                    .replace("\""+fields.get(0)+"\"","This field"));
                    continue;
                }
                if(fields.size() == 2){
                    String newField = fields.get(0) + "-" + fields.get(1);
                    map.put(newField,error.getMessages().get(error.getMessages().size() - 1)
                            .replace("\""+fields.get(1)+"\"","This field"));
                    continue;
                }

                // fields.get(1) is the index of its child
                if(fields.size() == 3){
                    String newField = fields.get(0) + "-" + fields.get(1)  + "-"+ fields.get(2);
                    map.put(newField,error.getMessages().get(error.getMessages().size() - 1)
                            .replace("\""+fields.get(2)+"\"","This field"));
                    continue;
                }

                // fields.get(1) is the index of its child
                if(fields.size() == 4){
                    String newField = fields.get(0) + "-" + fields.get(1) + "-" + fields.get(2) + "-" + fields.get(3);
                    map.put(newField,error.getMessages().get(error.getMessages().size() - 1)
                            .replace("\""+fields.get(3)+"\"","This field"));
                }
            }
            ResponseDTO response = new ResponseDTO();
            response.setStatus(HttpStatus.BAD_REQUEST.name());
            response.setCode(HttpStatus.BAD_REQUEST.value());
            response.setMessage(map);
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(response);
        }catch (JsonMappingException e){
            ResponseDTO response = new ResponseDTO();
            response.setStatus(HttpStatus.BAD_REQUEST.name());
            response.setCode(HttpStatus.BAD_REQUEST.value());
            // This will happen when the response from scalapay doesn't have error field
            // It will cause one of two error

            // This error related to Frequency
            if(e.getMessage().contains("product_not_supported")){
                map.put("frequency-number",
                        "1. Number has to be 1 </br> 2. Type has to be monthly </br> " +
                                "3. Product has to be pay-in-3 or pay-in-4!");
            }else if(e.getMessage().contains("order_amount_less_than_minimum_limit")){// This error related to Total Amount
                map.put("totalAmount-amount","order_amount_less_than_minimum_limit");
            }
            response.setMessage(map);
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(response);
        }catch (JsonProcessingException e){
            e.printStackTrace();
            throw new InternalErrorException("Something went wrong while creating an order!");
        }
    }

    @ExceptionHandler(InternalErrorException.class)
    public ResponseEntity<ResponseDTO> handleInternalErrorException(InternalErrorException ex) {
        ResponseDTO response = new ResponseDTO();
        response.setStatus(HttpStatus.INTERNAL_SERVER_ERROR.name());
        response.setCode(HttpStatus.INTERNAL_SERVER_ERROR.value());
        response.setMessage(ex.getMessage());
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(response);
    }

    @ExceptionHandler(UnauthorizedScalapayException.class)
    public ResponseEntity<ResponseDTO> handleUnauthorizedScalapayException(UnauthorizedScalapayException ex) {
        ResponseDTO response = new ResponseDTO();
        response.setStatus(HttpStatus.UNAUTHORIZED.name());
        response.setCode(HttpStatus.UNAUTHORIZED.value());
        response.setMessage(ex.getMessage());
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(response);
    }
}
