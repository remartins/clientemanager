/**
 * 
 */
package com.github.remartins.clientemanager.core.model.audit;

import org.hibernate.envers.RevisionListener;
import org.springframework.security.core.context.SecurityContextHolder;

/**
 * @author Renato
 * 15 de jun de 2019
 */
public class AuditListener implements RevisionListener {

	@Override
	public void newRevision(Object revisionEntity) {
		Auditoria auditoria = (Auditoria) revisionEntity;
		
		//pega o login
		auditoria.setUsuario(SecurityContextHolder.getContext().getAuthentication().getPrincipal().toString());
	}

}
