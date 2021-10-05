package com.example.demo.service;

import java.util.List;

import com.example.demo.model.Menu;

public interface MenuService {
	
	List<Menu> get();
	
	Menu get(int id);
	
	void save(Menu menu);
	
	void delete(int id); 
}
