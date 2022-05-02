package com.appslab.Smejsa.Jokes;
import java.util.Set;

public interface JokeService {
    void saveJoke(Joke joke);
    Iterable<Joke> getJokes();
    void deleteJoke(long id);
    Set<Joke> showUserJokes();

}

