package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.example.demo.dao.MenuDAO;
import com.example.demo.model.Menu;

@Service
public class MenuServiceImpl implements MenuService {

	@Autowired
	private MenuDAO menuDAO; 
	
	@Transactional
	@Override
	public List<Menu> get() {
		return menuDAO.get();
	}

	@Transactional
	@Override
	public Menu get(int id) {
		return menuDAO.get(id);
	}
	
	public List<Menu> getCategory(int category) {
		return menuDAO.getCategory(category);
	}

	@Transactional
	@Override
	public void save(Menu menu) {
		menuDAO.save(menu);
	}

	@Transactional
	@Override
	public void delete(int id) {
		menuDAO.delete(id);
	}

}
