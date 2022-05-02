package com.appslab.Smejsa.User;

import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserServicelpml implements UserService{
    UserRepository userRepository;
    private PasswordEncoder encoder;
    public UserServicelpml(UserRepository userRepository, PasswordEncoder encoder){
        this.userRepository = userRepository;
        this.encoder = encoder;
    }
    @Override
    public User addUser(User user) {
        user.setId((long) 0);
        return this.userRepository.save(user);
    }

    @Override
    public Optional<User> getUserByEmail(String email) {
        return this.userRepository.findByEmail(email);
    }

    @Override
    public User updateUser(User user) {
        return this.userRepository.save(user);
    }

    @Override
    public void saveUser(User user) {
        user.setPassword(encoder.encode(user.getPassword()));
        userRepository.save(user);
    }

    @Override
    public User getCurrentUser() {
        CustomUserDetails userDetails = (CustomUserDetails) SecurityContextHolder
                .getContext()
                .getAuthentication()
                .getPrincipal();
        String email = userDetails.getFullName();
        return this.userRepository.findByEmail(email).orElseThrow();
    }
}