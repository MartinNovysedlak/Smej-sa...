package com.appslab.Smejsa.Jokes;
import org.springframework.web.bind.annotation.*;

@RestController
public class JokeController {
    JokeService jokeService;

    public JokeController(JokeService jokeService){
        this.jokeService = jokeService;
    }

    @GetMapping(value = "/Vtip")
    public void Joke(@RequestBody Joke joke){ jokeService.saveJoke(joke);
    }
}








