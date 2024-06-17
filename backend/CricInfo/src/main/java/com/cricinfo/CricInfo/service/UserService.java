package com.cricinfo.CricInfo.service;

import com.cricinfo.CricInfo.model.User;
import com.cricinfo.CricInfo.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;


    public User signup(User user){
        return userRepository.save(user);
    }

    public String login(String email, String password) {
        Optional<User> optionalUser = userRepository.findByEmail(email);
        if (optionalUser.isEmpty()) {
            return "User not found";
        }

        User user = optionalUser.get();
        if (!user.getPassword().equals(password)) {
            return "Incorrect password";
        }

        return "Login successful";
    }
}
