package com.github.remartins.clientemanager.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.oauth2.config.annotation.web.configuration.EnableResourceServer;
import org.springframework.security.oauth2.config.annotation.web.configuration.ResourceServerConfigurerAdapter;
import org.springframework.security.oauth2.config.annotation.web.configurers.ResourceServerSecurityConfigurer;
import org.springframework.security.oauth2.provider.error.OAuth2AccessDeniedHandler;

/**
 * 
 * @author Renato
 * 15 de jun de 2019
 */
@Configuration
@EnableResourceServer
public class ResourceServerConfiguration extends ResourceServerConfigurerAdapter {

    @Override
    public void configure(ResourceServerSecurityConfigurer resources) {
        resources.resourceId("api");
    }
    
    @Override
    public void configure(HttpSecurity http) throws Exception {

        http.logout().logoutSuccessUrl("/").permitAll()
            .invalidateHttpSession(true)
            .clearAuthentication(true)
            .and().authorizeRequests()
            .antMatchers("/api/**").hasAnyRole("ADMIN", "COMUM")
            .anyRequest().denyAll()
            .and()
            .exceptionHandling()
            .accessDeniedHandler(new OAuth2AccessDeniedHandler());
    }

}