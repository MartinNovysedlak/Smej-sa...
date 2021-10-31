package com.appslab.Smejsa.Jokes;

import org.springframework.data.repository.CrudRepository;

public interface JokeRepository extends CrudRepository <Joke, Long> {
}
