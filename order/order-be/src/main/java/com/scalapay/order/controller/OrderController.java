package com.scalapay.order.controller;


import com.scalapay.order.dto.request.order.OrderDetailsDTO;
import com.scalapay.order.dto.response.ResponseDataDTO;
import com.scalapay.order.service.OrderService;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("v2/order")
@CrossOrigin("*")
public class OrderController {

    @Autowired
    private OrderService service;

    @Autowired
    private HttpServletResponse response;

//    @PostMapping
//    public ResponseEntity<String> createOrder(@org.springframework.web.bind.annotation.RequestBody
//                                                  OrderDetailsDTO orderDetailsDTO){
//        try{
//            OkHttpClient client = new OkHttpClient();
//
//            MediaType mediaType = MediaType.parse("application/json");
//            //        RequestBody body = RequestBody.create(mediaType, "{\"totalAmount\":{\"currency\":\"EUR\"},\"shippingAmount\":{\"currency\":\"EUR\"},\"taxAmount\":{\"currency\":\"EUR\"},\"type\":\"online\",\"product\":\"pay-in-3\",\"frequency\":{\"number\":1,\"frequencyType\":\"monthly\"},\"orderExpiryMilliseconds\":600000}");
//            RequestBody body = RequestBody.create(mediaType, "{\"totalAmount\":{\"currency\":\"EUR\",\"amount\":\"190.00\"},\"consumer\":{\"phoneNumber\":\"0400000001\",\"givenNames\":\"Joe\",\"surname\":\"Consumer\",\"email\":\"test@scalapay.com\"},\"billing\":{\"name\":\"Joe Consumer\",\"line1\":\"Via della Rosa, 58\",\"suburb\":\"Montelupo Fiorentino\",\"postcode\":\"50056\",\"countryCode\":\"IT\",\"phoneNumber\":\"0400000000\"},\"shipping\":{\"name\":\"Joe Consumer\",\"line1\":\"Via della Rosa, 58\",\"suburb\":\"Montelupo Fiorentino\",\"postcode\":\"50056\",\"countryCode\":\"IT\",\"phoneNumber\":\"0400000000\"},\"merchant\":{\"redirectConfirmUrl\":\"https://portal.integration.scalapay.com/success-url\",\"redirectCancelUrl\":\"https://portal.integration.scalapay.com/failure-url\"},\"shippingAmount\":{\"currency\":\"EUR\",\"amount\":\"10.00\"},\"taxAmount\":{\"currency\":\"EUR\",\"amount\":\"3.70\"},\"type\":\"online\",\"product\":\"pay-in-3\",\"frequency\":{\"number\":\"1\",\"frequencyType\":\"monthly\"},\"orderExpiryMilliseconds\":600000,\"items\":[{\"name\":\"T-Shirt\",\"category\":\"clothes\",\"subcategory\":[\"shirt\",\"long-sleeve\"],\"brand\":\"TopChoice\",\"gtin\":\"123458791330\",\"sku\":\"12341234\",\"quantity\":1,\"price\":{\"amount\":\"10.00\",\"currency\":\"EUR\"},\"pageUrl\":\"https://www.scalapay.com//product/view/\",\"imageUrl\":\"https://www.scalapay.com//product/view/\"},{\"name\":\"Jeans\",\"category\":\"clothes\",\"subcategory\":[\"pants\",\"jeans\"],\"brand\":\"TopChoice\",\"gtin\":\"123458722222\",\"sku\":\"12341235\",\"quantity\":1,\"price\":{\"amount\":\"20.00\",\"currency\":\"EUR\"}}],\"discounts\":[{\"displayName\":\"10% Off\",\"amount\":{\"amount\":\"3.00\",\"currency\":\"EUR\"}}],\"merchantReference\":\"merchantOrder-1234\"}");
//            ObjectMapper objectMapper = new ObjectMapper();
//            String jsonString = objectMapper.writeValueAsString(orderDetailsDTO);
//            RequestBody body3 = RequestBody.create(mediaType,jsonString);
//            System.out.println(jsonString);
//            Request request = new Request.Builder()
//                    .url("https://integration.api.scalapay.com/v2/orders")
//                    .post(body3)
//                    .addHeader("accept", "application/json")
//                    .addHeader("content-type", "application/json")
//                    .addHeader("Authorization", "Bearer qhtfs87hjnc12kkos")
//                    .build();
//            Response response = client.newCall(request).execute();
//            return new ResponseEntity<>(
//                    response.body().string(), HttpStatus.OK);
//        }catch (Exception e){
//            e.printStackTrace();
//        }
//        return new ResponseEntity<>(
//                "Test", HttpStatus.OK);
//    }

    @PostMapping
    public ResponseEntity<ResponseDataDTO> createOrder(@org.springframework.web.bind.annotation.RequestBody
                                              OrderDetailsDTO orderDetailsDTO){
        ResponseDataDTO dto = new ResponseDataDTO();
        dto.setCode(HttpStatus.MOVED_PERMANENTLY.value());
        dto.setStatus(HttpStatus.MOVED_PERMANENTLY.series().name());
        dto.setMessage("Created order successfully!");
        dto.setData(this.service.createOrder(orderDetailsDTO));
        return new ResponseEntity<>(dto, HttpStatus.MOVED_PERMANENTLY);
    }
}
