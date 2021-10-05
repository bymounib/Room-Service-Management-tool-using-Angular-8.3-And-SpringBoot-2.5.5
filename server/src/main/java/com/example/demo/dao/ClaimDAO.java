package com.example.demo.dao;

import java.util.List;

import com.example.demo.model.Claim;

public interface ClaimDAO {
	
	List<Claim> get();
	
	Claim get(int id);
	
	void save(Claim claim);
	
	void delete(int id); 
}
