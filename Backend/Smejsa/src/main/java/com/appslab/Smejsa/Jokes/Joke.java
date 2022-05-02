package com.appslab.Smejsa.Jokes;
import javax.persistence.*;

@Entity
public class Joke {

    @ManyToOne
    @JoinColumn(name = "user_id", insertable = false, updatable=false)

    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private Long id;
    private String vtip;

    public Joke(Long id, String vtip) {
        this.id = id;
        this.vtip = vtip;
    }

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
