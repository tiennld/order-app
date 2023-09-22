package com.scalapay.order.service;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.scalapay.order.dto.request.order.OrderDetailsDTO;
import com.scalapay.order.dto.response.ResponseScalapayDTO;
import com.scalapay.order.exception.BadRequestScalapayException;
import com.scalapay.order.exception.InternalErrorException;
import com.scalapay.order.exception.UnauthorizedScalapayException;
import okhttp3.*;
import org.springframework.stereotype.Service;

import java.io.IOException;

@Service
public class OrderServiceImpl implements OrderService{

    private static final MediaType JSON
            = MediaType.parse("application/json");
    OkHttpClient client = new OkHttpClient();

    /*
    * Handle create order
    *
    * @param orderDetailsDTO This contains all fields information to create order
    *
    * @return ResponseScalapayDTO The response from Scalapay if operation is successful
    * @throw BadRequestScalapayException If the response from Scalapay is status 400
    * @throw InternalErrorException If there is any wrong in the process
    * */
    @Override
    public ResponseScalapayDTO createOrder(OrderDetailsDTO orderDetailsDTO) {
        try{

            OkHttpClient client = new OkHttpClient();
            ObjectMapper objectMapper = new ObjectMapper();
            // Exclude the empty fields from the request
            objectMapper.setSerializationInclusion(JsonInclude.Include.NON_EMPTY);
            String jsonString = objectMapper.writeValueAsString(orderDetailsDTO);
            RequestBody body = RequestBody.create(JSON,jsonString);

            // Call create order of scalapay api
            Request request = new Request.Builder()
                    .url("https://integration.api.scalapay.com/v2/orders")
                    .post(body)
                    .addHeader("accept", "application/json")
                    .addHeader("content-type", "application/json")
                    .addHeader("Authorization", "Bearer qhtfs87hjnc12kkos")
                    .build();
            Response response = client.newCall(request).execute();

            if(response.code() == 400){
                throw new BadRequestScalapayException(response.body().string());
            }

            if(response.code() == 401){
                throw new UnauthorizedScalapayException(response.body().string());
            }

            return objectMapper.readValue(response.body().string(),ResponseScalapayDTO.class);
        }catch (JsonMappingException e){
            throw new InternalErrorException("Something went wrong while creating an order!");
        }catch (JsonProcessingException e){
            throw new InternalErrorException("Something went wrong while creating an order!");
        }catch (IOException e){
            throw new InternalErrorException("Something went wrong while creating an order!");
        }
    }
}
