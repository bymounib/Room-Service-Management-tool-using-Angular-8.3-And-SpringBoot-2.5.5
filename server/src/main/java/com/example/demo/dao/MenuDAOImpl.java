package com.example.demo.dao;

import java.util.List;

import javax.persistence.EntityManager;

import org.hibernate.Session;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.example.demo.model.Menu;

@Repository
public class MenuDAOImpl implements MenuDAO {

	@Autowired
	private EntityManager entityManager;
	
	@Override
	public List<Menu> get() {
		Session currentSession = entityManager.unwrap(Session.class);
		Query<Menu> query = currentSession.createQuery("from Menu", Menu.class);
		List<Menu> list = query.getResultList();
		return list;
	}

	@Override
	public Menu get(int id) {
		Session currentSession = entityManager.unwrap(Session.class);
		Menu menuObj = currentSession.get(Menu.class, id);
		return menuObj;
	}

	@Override
	public void save(Menu menu) {
		Session currentSession = entityManager.unwrap(Session.class);
		currentSession.saveOrUpdate(menu);
	}

	@Override
	public void delete(int id) {
		Session currentSession = entityManager.unwrap(Session.class);
		Menu menuObj = currentSession.get(Menu.class, id);
		currentSession.delete(menuObj);
	}

}
