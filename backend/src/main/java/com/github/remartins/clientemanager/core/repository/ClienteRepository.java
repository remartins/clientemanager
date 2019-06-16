/**
 * 
 */
package com.github.remartins.clientemanager.core.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.github.remartins.clientemanager.core.model.Cliente;

/**
 * @author Renato
 * 15 de jun de 2019
 */
public interface ClienteRepository extends JpaRepository<Cliente, Long> {
	
	 List<Cliente> findByNomeStartingWithIgnoreCase(String nome);

}
