package com.authapp.security.repository;

import java.util.Optional;

import com.authapp.security.models.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Integer> {

    Optional<User> findByEmail(String email);

}
