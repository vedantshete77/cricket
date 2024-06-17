package com.cricinfo.CricInfo.repository;

import com.cricinfo.CricInfo.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;


public interface UserRepository extends JpaRepository<User,Integer> {


    Optional<User> findByEmail(String email);
}
