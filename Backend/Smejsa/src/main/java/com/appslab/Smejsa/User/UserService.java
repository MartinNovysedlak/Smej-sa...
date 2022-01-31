package com.appslab.Smejsa.User;

import java.util.Optional;
public interface UserService {
    User addUser(User user);
    Optional<User> getUserByEmail(String email);
    User updateUser(User user);
    void saveUser(User user);
}
