/**
 * 
 */
package com.github.remartins.clientemanager.core.model.audit;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Transient;

import org.hibernate.envers.RevisionEntity;
import org.hibernate.envers.RevisionNumber;
import org.hibernate.envers.RevisionTimestamp;

import lombok.Data;

/**
 * @author Renato
 * 15 de jun de 2019
 */
@Data
@Entity(name="AU_AUDITORIA")
@RevisionEntity(AuditListener.class)
public class Auditoria implements Serializable {

	private static final long serialVersionUID = -1908276093051397138L;
	
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@RevisionNumber
	private int id;

	@RevisionTimestamp
	private long timestamp;
	
	@Column(name = "USUARIO", length = 50)
	private String usuario;
	

	
	@Transient
	public Date getRevisionDate() {
		return new Date( timestamp );
	}

}
