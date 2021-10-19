package com.example.demo.model;

import java.sql.Date;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;

@Entity
@Table(name = "order_tbl")
public class Order {

	@Column
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Integer id;
	@Column
	private Date date;

	@ManyToOne(targetEntity = Menu.class,cascade = CascadeType.ALL)
    @JoinColumn(name ="menu_id",referencedColumnName = "id")
    private Menu menus;
	public Menu getMenus() {
		return menus;
	}
	public void setMenus(Menu menus) {
		this.menus = menus;
	}
	@Column
	private Integer qte;
	@Column
	private String state;
	@Column
	private Integer deleted;
	@Column	
	@CreatedDate
    private Date created_at;
	@Column	
	@LastModifiedDate
	private Date updated_at;
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public Date getDate() {
		return date;
	}
	public void setDate(Date date) {
		this.date = date;
	}
	public Integer getQte() {
		return qte;
	}
	public void setQte(Integer qte) {
		this.qte = qte;
	}
	public String getState() {
		return state;
	}
	public void setState(String state) {
		this.state = state;
	}
	public Integer getDeleted() {
		return deleted;
	}
	public void setDeleted(Integer deleted) {
		this.deleted = deleted;
	}
	public Date getCreated_at() {
		return created_at;
	}
	public void setCreated_at(Date created_at) {
		this.created_at = created_at;
	}
	public Date getUpdated_at() {
		return updated_at;
	}
	public void setUpdated_at(Date updated_at) {
		this.updated_at = updated_at;
	}
	@Override
	public String toString() {
		return "Order [id=" + id + ", date=" + date + ", qte=" + qte + ", state=" + state
				+ ", created_at=" + created_at + ", updated_at=" + updated_at + "]";
	}

	}
