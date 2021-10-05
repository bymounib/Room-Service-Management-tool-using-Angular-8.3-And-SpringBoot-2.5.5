package com.example.demo.service;

import java.util.List;

import com.example.demo.model.Claim;

public interface ClaimService {
	
	List<Claim> get();
	
	Claim get(int id);
	
	void save(Claim claim);
	
	void delete(int id); 
}
