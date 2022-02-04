package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.example.demo.dao.OrderDAO;
import com.example.demo.model.Order;

@Service
public class OrderServiceImpl implements OrderService {

	@Autowired
	private OrderDAO orderDAO; 
	
	@Transactional
	@Override
	public List<Order> get() {
		return orderDAO.get();
	}

	@Transactional
	@Override
	public Order get(int id) {
		return orderDAO.get(id);
	}

	@Transactional
	@Override
	public void save(Order order) {
		orderDAO.save(order);
	}

	@Transactional
	@Override
	public void delete(int id) {
		orderDAO.delete(id);
	}
}
