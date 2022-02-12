package com.appslab.Smejsa.Jokes;
import com.appslab.Smejsa.User.User;

import javax.persistence.*;

@Entity
public class Joke {
    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private Long id;
    private String vtip;

    @ManyToOne
    private User user;

    public Joke(){
    }

    public Joke(Long id) {
        this.id = id;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getVtip() {
        return vtip;
    }

    public void setVtip(String vtip) {
        this.vtip = vtip;
    }
}
