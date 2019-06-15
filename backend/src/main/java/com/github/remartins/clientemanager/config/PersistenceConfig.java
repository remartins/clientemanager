/**
 * 
 */
package com.github.remartins.clientemanager.config;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.orm.jpa.JpaTransactionManager;
import org.springframework.transaction.PlatformTransactionManager;
import org.springframework.transaction.annotation.EnableTransactionManagement;

/**
 * @author Renato 15 de jun de 2019
 */
@Configuration
@EnableTransactionManagement
@EnableJpaRepositories(basePackages = "com.github.remartins.clientemanager.core.repository")
public class PersistenceConfig {

	@PersistenceContext
	private EntityManager em;

	@Bean
	public PlatformTransactionManager transactionManager() {
		JpaTransactionManager transactionManager = new JpaTransactionManager();
		transactionManager.setEntityManagerFactory(em.getEntityManagerFactory());
		return transactionManager;
	}

}
