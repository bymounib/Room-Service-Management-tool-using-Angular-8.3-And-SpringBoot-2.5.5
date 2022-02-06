package com.example.demo.dao;

public class UserDTO
{
	private String username;
	private String token;

	public UserDTO()
	{
	}

	public String getUsername()
	{
		return this.username;
	}

	public String getToken()
	{
		return this.token;
	}
	public void setUsername(String username)
	{
		this.username = username;
	}

	public void setToken(String token)
	{
		this.token = token;
	}
}
