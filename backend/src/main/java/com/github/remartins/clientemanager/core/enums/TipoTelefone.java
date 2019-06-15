/**
 * 
 */
package com.github.remartins.clientemanager.core.enums;

import java.util.Objects;

/**
 * @author Renato 15 de jun de 2019
 */
public enum TipoTelefone {

	RESIDENCIAL(1), COMERCIAL(2), CELULAR(3);

	private Integer valor;

	TipoTelefone(Integer valor) {
		this.valor = valor;
	}

	public Integer getValor() {
		return valor;
	}
	
	public static TipoTelefone fromValor(Integer valor) {
		if (Objects.nonNull(valor)) {
			for (TipoTelefone t : TipoTelefone.values()) {
				if (t.getValor().equals(valor)) {
					return t;
				}
			}
		}
		return null;
	}

}
