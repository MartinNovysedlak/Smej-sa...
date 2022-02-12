package com.appslab.Smejsa.Jokes;

import org.springframework.stereotype.Service;

@Service
public class JokeServiceImpl implements JokeService{
    JokeRepository jokeRepository;

    public JokeServiceImpl(JokeRepository jokeRepository){
        this.jokeRepository = jokeRepository;
    }

    @Override
    public void saveJoke(Joke joke){jokeRepository.save(joke);}

    @Override
    public Iterable<Joke> getJokes() {
        return jokeRepository.findAll();
    }

    @Override
    public void deleteJoke(long id) {

    }
}






