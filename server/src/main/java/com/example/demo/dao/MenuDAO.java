package com.example.demo.dao;

import java.util.List;

import com.example.demo.model.Menu;

public interface MenuDAO {
	
	List<Menu> get();
	
	Menu get(int id);
	
	void save(Menu menu);
	
	void delete(int id); 
}
