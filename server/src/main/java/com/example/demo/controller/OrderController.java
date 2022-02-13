package com.example.demo.controller;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Menu;
import com.example.demo.model.Order;
import com.example.demo.service.MenuService;
import com.example.demo.service.OrderService;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api")
public class OrderController {

	@Autowired
	private OrderService orderService;
	
	@Autowired
	private MenuService menuService;
	
	@PostMapping("/order")
	public Order save(@RequestBody Order orderObj) {
		orderService.save(orderObj);
		return orderObj;
	}
	
	@GetMapping("/order")
	public List<Order> get(){
		return orderService.get();
	}
	
	@GetMapping("/order/{id}")
	public Order get(@PathVariable int id) {
		Order orderObj = orderService.get(id);
		if(orderObj == null) {
			throw new RuntimeException("Order not found for the Id:"+id);
		}
		return orderObj;
	}
	
	@GetMapping("/orders/{userId}")
	public List<Order> getByUserId(@PathVariable int userId) {
		List<Order> orderObj = orderService.getByUserId(userId);
		if(orderObj == null) {
			throw new RuntimeException("Order not found for the userId:"+userId);
		}
		return orderObj;
	}
	
	@PutMapping("/order")
	public Order update(@RequestBody Order orderObj) {
		orderService.save(orderObj);
		return orderObj;
	}
	
	@DeleteMapping("/order/{id}")
	public String delete(@PathVariable int id) {
		orderService.delete(id);
		return "Order has been deleted with id:"+id;
	}
	
	@PutMapping("/{orderId}/menu/{menuId}")
    Order assignMenuToOrder(
            @PathVariable int orderId,
            @PathVariable int menuId
    ) {
		Order order = orderService.get(orderId);
        Menu menu = menuService.get(menuId);
        order.menus.add(menu);
        orderService.save(order);
        return order;
    }
}
