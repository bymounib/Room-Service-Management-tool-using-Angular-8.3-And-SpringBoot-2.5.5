package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.example.demo.dao.ClaimDAO;
import com.example.demo.model.Claim;

@Service
public class ClaimServiceImpl implements ClaimService {

	@Autowired
	private ClaimDAO claimDAO; 
	
	@Transactional
	@Override
	public List<Claim> get() {
		return claimDAO.get();
	}

	@Transactional
	@Override
	public Claim get(int id) {
		return claimDAO.get(id);
	}

	@Transactional
	@Override
	public void save(Claim claim) {
		claimDAO.save(claim);
	}

	@Transactional
	@Override
	public void delete(int id) {
		claimDAO.delete(id);
	}

}
