/**
 * 
 */
package com.github.remartins.clientemanager.core.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.github.remartins.clientemanager.core.model.Cliente;
import com.github.remartins.clientemanager.core.service.ClienteService;


/**
 * @author Renato
 * 13 de jun de 2019
 */
@RestController
@RequestMapping("/api/clientes")
public class ClienteController {
	
	@Autowired
	private ClienteService service;
	
	@PreAuthorize("hasRole('ROLE_ADMIN')")
    @GetMapping(value="/teste")
    public String listUser(){
		
		service.testeInsert();
        return "testando";
    }
	
	
	@PreAuthorize("hasRole('ROLE_ADMIN') or hasRole('ROLE_COMUM')")
    @GetMapping(value="/consultar-nome/{nome}")
    public ResponseEntity<List<Cliente>> consultarClientesPorNome(@PathVariable String nome){
		return ResponseEntity.ok().body(service.consultarClientesPorNome(Optional.of(nome)));
    }
	
	@PreAuthorize("hasRole('ROLE_ADMIN') or hasRole('ROLE_COMUM')")
    @GetMapping(value="/consultar-nome/")
    public ResponseEntity<List<Cliente>> consultarClientesPorNome(){
		return ResponseEntity.ok().body(service.consultarClientesPorNome(Optional.empty()));
    }

}
