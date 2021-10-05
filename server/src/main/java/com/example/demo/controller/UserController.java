package com.example.demo.controller;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.User;
import com.example.demo.service.UserService;

@RestController
@RequestMapping("/api")
public class UserController {

	@Autowired
	private UserService userService;
	
	@PostMapping("/user")
	public User save(@RequestBody User userObj) {
		userService.save(userObj);
		return userObj;
	}
	
	@GetMapping("/user")
	public List<User> get(){
		return userService.get();
	}
	
	@GetMapping("/user/{id}")
	public User get(@PathVariable int id) {
		User userObj = userService.get(id);
		if(userObj == null) {
			throw new RuntimeException("User not found for the Id:"+id);
		}
		return userObj;
	}
	
	@PutMapping("/user")
	public User update(@RequestBody User userObj) {
		userService.save(userObj);
		return userObj;
	}
	
	@DeleteMapping("/user/{id}")
	public String delete(@PathVariable int id) {
		userService.delete(id);
		return "User has been deleted with id:"+id;
	}
}
