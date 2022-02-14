package com.appslab.Smejsa.Jokes;

public interface JokeService {
    void saveJoke(Joke joke);
    Iterable<Joke> getJokes();
    void deleteJoke(long id);

}

