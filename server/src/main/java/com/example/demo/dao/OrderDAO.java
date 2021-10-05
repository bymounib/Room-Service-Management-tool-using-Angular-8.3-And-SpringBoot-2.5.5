package com.example.demo.dao;

import java.util.List;

import com.example.demo.model.Order;

public interface OrderDAO {
	
	List<Order> get();
	
	Order get(int id);
	
	void save(Order order);
	
	void delete(int id); 
}
