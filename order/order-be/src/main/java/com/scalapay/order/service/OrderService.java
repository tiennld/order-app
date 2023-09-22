package com.scalapay.order.service;

import com.scalapay.order.dto.request.order.OrderDetailsDTO;
import com.scalapay.order.dto.response.ResponseScalapayDTO;

public interface OrderService {

    ResponseScalapayDTO createOrder(OrderDetailsDTO orderDetailsDTO);
}
