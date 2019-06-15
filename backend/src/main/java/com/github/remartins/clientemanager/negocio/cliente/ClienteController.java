/**
 * 
 */
package com.github.remartins.clientemanager.negocio.cliente;

import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;


/**
 * @author Renato
 * 13 de jun de 2019
 */
@RestController
@RequestMapping("/api/clientes")
public class ClienteController {
	
	
	@PreAuthorize("hasRole('ROLE_ADMIN')")
    @RequestMapping(value="/teste", method = RequestMethod.GET)
    public String listUser(){
        return "testando";
    }

}
