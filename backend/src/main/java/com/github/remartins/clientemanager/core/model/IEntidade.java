/**
 * 
 */
package com.github.remartins.clientemanager.core.model;

import java.io.Serializable;

/**
 * @author Renato
 * 15 de jun de 2019
 */
public interface IEntidade<T> extends Serializable {

	abstract T getId();
}
