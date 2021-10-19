package com.example.demo.dao;

import java.util.List;

import javax.persistence.EntityManager;

import org.hibernate.Session;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.example.demo.model.Order;

@Repository
public class OrderDAOImpl implements OrderDAO {

	@Autowired
	private EntityManager entityManager;
	
	@Override
	public List<Order> get() {
		Session currentSession = entityManager.unwrap(Session.class);
		Query<Order> query = currentSession.createQuery("from Order", Order.class);
		List<Order> list = query.getResultList();
		return list;
	}

	@Override
	public Order get(int id) {
		Session currentSession = entityManager.unwrap(Session.class);
		Order orderObj = currentSession.get(Order.class, id);
		return orderObj;
	}

	@Override
	public void save(Order order) {
		Session currentSession = entityManager.unwrap(Session.class);
		currentSession.saveOrUpdate(order);
	}

	@Override
	public void delete(int id) {
		Session currentSession = entityManager.unwrap(Session.class);
		Order orderObj = currentSession.get(Order.class, id);
		currentSession.delete(orderObj);
	}
}