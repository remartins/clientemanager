package com.github.remartins.clientemanager.config.domain;

import java.io.Serializable;

import org.springframework.security.core.GrantedAuthority;

public class Role implements Serializable, GrantedAuthority {
	
	private static final long serialVersionUID = 1L;

	private String id;
	private String name;

	public Role() {
	}

	public Role(String name) {
		this.name = name;
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	@Override
	public String getAuthority() {
		return getName();
	}
}
