package com.authapi.api.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

@Configuration
@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter {

    @Bean
    public BCryptPasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http
                .authorizeRequests()
                .antMatchers("/api/auth/register").permitAll()  // Разрешить доступ к регистрации без аутентификации
                .antMatchers("/api/auth/login").permitAll()     // Разрешить доступ к логину без аутентификации
                .anyRequest().authenticated()                    // Остальные запросы требуют аутентификации
                .and()
                .formLogin().permitAll();  // Разрешить доступ к форме логина для всех
    }
}
