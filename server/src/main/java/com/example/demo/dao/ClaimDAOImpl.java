package com.example.demo.dao;

import java.util.List;

import javax.persistence.EntityManager;

import org.hibernate.Session;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.example.demo.model.Claim;

@Repository
public class ClaimDAOImpl implements ClaimDAO {

	@Autowired
	private EntityManager entityManager;
	
	@Override
	public List<Claim> get() {
		Session currentSession = entityManager.unwrap(Session.class);
		Query<Claim> query = currentSession.createQuery("from Claim", Claim.class);
		List<Claim> list = query.getResultList();
		return list;
	}

	@Override
	public Claim get(int id) {
		Session currentSession = entityManager.unwrap(Session.class);
		Claim claimObj = currentSession.get(Claim.class, id);
		return claimObj;
	}

	@Override
	public void save(Claim claim) {
		Session currentSession = entityManager.unwrap(Session.class);
		currentSession.saveOrUpdate(claim);
	}

	@Override
	public void delete(int id) {
		Session currentSession = entityManager.unwrap(Session.class);
		Claim claimObj = currentSession.get(Claim.class, id);
		currentSession.delete(claimObj);
	}

}
