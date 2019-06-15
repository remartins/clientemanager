/**
 * 
 */
package com.github.remartins.clientemanager.core.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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

}
