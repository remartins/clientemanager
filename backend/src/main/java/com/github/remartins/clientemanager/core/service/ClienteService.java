/**
 * 
 */
package com.github.remartins.clientemanager.core.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import com.github.remartins.clientemanager.core.enums.TipoTelefone;
import com.github.remartins.clientemanager.core.model.Cliente;
import com.github.remartins.clientemanager.core.model.Email;
import com.github.remartins.clientemanager.core.model.Telefone;
import com.github.remartins.clientemanager.core.repository.ClienteRepository;
import com.github.remartins.clientemanager.core.repository.EmailRepository;
import com.github.remartins.clientemanager.core.repository.TelefoneRepository;

import lombok.extern.java.Log;




/**
 * @author Renato
 * 15 de jun de 2019
 */
@Log
@Service
@Transactional
public class ClienteService {
	
	@Autowired
	private ClienteRepository repository;
	
	@Autowired
	private EmailRepository emailRepository;
	
	@Autowired
	private TelefoneRepository telefoneRepository;
	
	
	public List<Cliente> consultarTodos() {
		return repository.findAll();
	}
	
	public List<Cliente> consultarClientesPorNome(Optional<String> nome) {
		if (nome.isPresent()) {
			return repository.findByNomeStartingWithIgnoreCase(nome.get());
		}
		return repository.findAll();
	}
	
	@Transactional(propagation = Propagation.REQUIRED)
	public void incluir(Cliente cliente) {
		repository.save(cliente);
	}
	
	@Transactional(propagation = Propagation.REQUIRED)
	public void excluir(Long id) {
		Cliente cliente = repository.findById(id).get();

		for (Email e : cliente.getEmails()) {
			emailRepository.delete(e);
		}
		
		for (Telefone t : cliente.getTelefones()) {
			telefoneRepository.delete(t);
		}
		
//		emailRepository.deleteInBatch(cliente.getEmails());
//		telefoneRepository.deleteInBatch(cliente.getTelefones());
		repository.delete(cliente);
	}
	


}
