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
	
	public void testeInsert() {
		Cliente cliente = new Cliente();
		cliente.setNome("cliente 1");
		cliente.setBairro("meu bairro");
		cliente.setCpf(11121241241L);
		cliente.setCep(74523550L);
		cliente.setCidade("jussara");
		cliente.setComplemento("ccc");
		cliente.setLogradouro("rua 1");
		cliente.setUf("go");
		
		Telefone telefone = new Telefone();
		telefone.setNumero(33731505L);
		telefone.setTipo(TipoTelefone.COMERCIAL.getValor());
		cliente.setTelefones(new ArrayList<Telefone>());
		cliente.getTelefones().add(telefone);
		
		Email email = new Email();
		email.setEndereco("jose@gmai.com");
		cliente.setEmails(new ArrayList<Email>());
		cliente.getEmails().add(email);
		
		repository.save(cliente);
		
		log.info("gravou o cliente: " + cliente.getId());
		
	}

}
