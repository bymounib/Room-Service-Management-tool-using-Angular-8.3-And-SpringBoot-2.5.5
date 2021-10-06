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
import com.example.demo.service.MenuService;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api")
public class MenuController {

	@Autowired
	private MenuService menuService;
	
	@PostMapping("/menu")
	public Menu save(@RequestBody Menu menuObj) {
		menuService.save(menuObj);
		return menuObj;
	}
	
	@GetMapping("/menu")
	public List<Menu> get(){
		return menuService.get();
	}
	
	@GetMapping("/menu/{id}")
	public Menu get(@PathVariable int id) {
		Menu menuObj = menuService.get(id);
		if(menuObj == null) {
			throw new RuntimeException("Menu not found for the Id:"+id);
		}
		return menuObj;
	}
	
	@GetMapping("/menu/category={category}")
	public List<Menu> getCategory(@PathVariable int category) {
		return menuService.getCategory(category);
	}
	
	@PutMapping("/menu")
	public Menu update(@RequestBody Menu menuObj) {
		menuService.save(menuObj);
		return menuObj;
	}
	
	@DeleteMapping("/menu/{id}")
	public String delete(@PathVariable int id) {
		menuService.delete(id);
		return "Menu has been deleted with id:"+id;
	}
}
