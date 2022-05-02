package com.appslab.Smejsa.User;

import com.appslab.Smejsa.Jokes.Joke;

import javax.persistence.*;
import java.util.Set;

@Entity
@Table(name = "users")
public class User {
    @OneToMany(mappedBy = "users")
    public Set<Joke> jokes;

    public User(Long id, String email, String password, String firstName, String lastName, Set<Joke> jokes) {
        this.id = id;
        this.email = email;
        this.password = password;
        this.firstName = firstName;
        this.lastName = lastName;
        this.jokes = jokes;
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, unique = true, length = 45)
    private String email;

    @Column(nullable = false, length = 64)
    private String password;

    @Column(name = "first_name", nullable = false, length = 20)
    private String firstName;

    @Column(name = "last_name", nullable = false, length = 20)
    private String lastName;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public Set<Joke> getJokes() {
        return jokes;
    }

    public void setItems(Set<Joke> jokes) {
        this.jokes = jokes;
    }
}

