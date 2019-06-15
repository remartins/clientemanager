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

import lombok.Data;

/**
 * @author Renato
 * 15 de jun de 2019
 */
@Data
@Entity
@Table(name = "TB_TELEFONE", schema = "SCM")
public class Telefone implements IEntidade<Long> {
	
	private static final long serialVersionUID = 6861036286253604112L;

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name = "ID", nullable = false, precision = 0)
	private Long id;
	
	@Column(name = "NUMERO", nullable = false, length = 11)
	private Long numero;
	
//	@Convert(converter = TipoTelefone.class)
//	@Column(name = "TIPO", nullable = false, length = 11)
//	private TipoTelefone tipo;
	
	@Column(name = "TIPO", nullable = false, length = 11)
	private Integer tipo;
	

}
