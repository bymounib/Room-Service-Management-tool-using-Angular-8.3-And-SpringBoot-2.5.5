package com.example.demo.service;

import java.util.List;

import com.example.demo.model.Order;

public interface OrderService {
	
	List<Order> get();
	
	Order get(int id);
	
	void save(Order order);
	
	void delete(int id);

	List<Order> getByUserId(int userId);
}
