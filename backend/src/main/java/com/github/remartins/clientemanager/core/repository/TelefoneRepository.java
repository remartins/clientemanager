/**
 * 
 */
package com.github.remartins.clientemanager.core.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.github.remartins.clientemanager.core.model.Telefone;

/**
 * @author Renato
 * 15 de jun de 2019
 */
public interface TelefoneRepository extends JpaRepository<Telefone, Long> {
	
	 

}
