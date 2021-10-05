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

import com.example.demo.model.Claim;
import com.example.demo.service.ClaimService;

@RestController
@RequestMapping("/api")
public class ClaimController {

	@Autowired
	private ClaimService claimService;
	
	@PostMapping("/claim")
	public Claim save(@RequestBody Claim claimObj) {
		claimService.save(claimObj);
		return claimObj;
	}
	
	@GetMapping("/claim")
	public List<Claim> get(){
		return claimService.get();
	}
	
	@GetMapping("/claim/{id}")
	public Claim get(@PathVariable int id) {
		Claim claimObj = claimService.get(id);
		if(claimObj == null) {
			throw new RuntimeException("Claim not found for the Id:"+id);
		}
		return claimObj;
	}
	
	@PutMapping("/claim")
	public Claim update(@RequestBody Claim claimObj) {
		claimService.save(claimObj);
		return claimObj;
	}
	
	@DeleteMapping("/claim/{id}")
	public String delete(@PathVariable int id) {
		claimService.delete(id);
		return "Claim has been deleted with id:"+id;
	}
}
