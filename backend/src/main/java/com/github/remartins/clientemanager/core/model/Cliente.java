/**
 * 
 */
package com.github.remartins.clientemanager.core.model;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import lombok.Data;

/**
 * @author Renato
 * 15 de jun de 2019
 */
@Data
@Entity
@Table(name = "TB_CLIENTE", schema = "SCM")
public class Cliente implements IEntidade<Long> {
	
	private static final long serialVersionUID = 6861036286253604112L;

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name = "ID", nullable = false, precision = 0)
	private Long id;
	
	@Column(name = "NOME", nullable = true, length = 100)
	private String nome;
	
	@Column(name = "CPF", nullable = true, length = 11)
	private Long cpf;
	
	@Column(name = "CEP", nullable = true, length = 8)
	private Long cep;
	
	@Column(name = "LOGRADOURO", nullable = true, length = 150)
	private String logradouro;
	
	@Column(name = "BAIRRO", nullable = true, length = 100)
	private String bairro;
	
	@Column(name = "CIDADE", nullable = true, length = 100)
	private String cidade;
	
	@Column(name = "UF", nullable = true, length = 2)
	private String uf;
	
	@Column(name = "COMPLEMENTO", length = 200)
	private String complemento;
	
	@OneToMany(cascade = CascadeType.ALL, orphanRemoval = true, fetch = FetchType.LAZY)
	@JoinColumn(name = "ID_CLIENTE")
	private List<Telefone> telefones;
	
	@OneToMany(cascade = CascadeType.ALL, orphanRemoval = true, fetch = FetchType.LAZY)
	@JoinColumn(name = "ID_CLIENTE")
	private List<Email> emails;

}
