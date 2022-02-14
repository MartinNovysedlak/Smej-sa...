package com.appslab.Smejsa.Jokes;
import javax.persistence.*;

@Entity
public class Joke {
    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private Long id;
    private String vtip;

    public Joke(String vtip) {
        this.vtip = vtip;
    }

    public Joke(){
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
