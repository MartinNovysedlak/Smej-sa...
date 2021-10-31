package com.appslab.Smejsa.Jokes;
import javax.persistence.*;

@Entity
public class Joke {
    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private Long id;

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
}
