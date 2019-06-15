/**
 * 
 */
package com.github.remartins.clientemanager.core.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import org.hibernate.envers.AuditTable;
import org.hibernate.envers.Audited;
import org.hibernate.envers.RelationTargetAuditMode;

import lombok.Data;

/**
 * @author Renato
 * 15 de jun de 2019
 */
@Data
@Audited(targetAuditMode = RelationTargetAuditMode.NOT_AUDITED)
@AuditTable(value = "AU_EMAIL")
@Entity
@Table(name = "TB_EMAIL", schema = "SCM")
public class Email implements IEntidade<Long> {
	
	private static final long serialVersionUID = 6861036286253604112L;

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name = "ID", nullable = false, precision = 0)
	private Long id;
	
	@Column(name = "ENDERECO", nullable = false, length = 100)
	private String endereco;
	
	

}
