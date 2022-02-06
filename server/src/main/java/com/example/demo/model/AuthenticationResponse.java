package com.example.demo.model;

import java.io.Serializable;

public class AuthenticationResponse implements Serializable {

	private final Integer id;
    private final String jwt;
    private final String nom;
    
    public AuthenticationResponse(Integer id, String nom,String jwt) {
        this.id=id;
    	this.nom=nom;
        this.jwt = jwt;
    }

    public String getJwt() {
        return jwt;
    }

	public Integer getId() {
		return id;
	}

	public String getNom() {
		return nom;
	}

}