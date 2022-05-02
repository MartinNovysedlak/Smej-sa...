package com.appslab.Smejsa.Jokes;
import com.appslab.Smejsa.User.UserService;
import org.springframework.web.bind.annotation.*;

@RestController
public class JokeController {
    JokeService jokeService;

    public JokeController(JokeService jokeService){
        this.jokeService = jokeService;
    }

    @PostMapping("/Vtip")
    public void saveJoke(@RequestBody Joke joke){ jokeService.saveJoke(joke);
    }
    @GetMapping(value = "/getVtip")
    public Iterable<Joke> getJokes(){return jokeService.getJokes();}

    @DeleteMapping(value = "/deleteVtip/{id}")
    public void deleteJoke(@PathVariable long id) {
        jokeService.deleteJoke(id);
    }

    @GetMapping("/showuserjokes")
    public Iterable<Joke> showUserJokes() {
        return UserService.getCurrentUser().getJokes();
    }
}
