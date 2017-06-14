import { Injectable } from '@angular/core';
import { Movie } from './movie';
import { MOVIES } from './mock-movies';

import { MovieTime } from './movie-time';
import { MOVIESTIME } from './mock-movies-time';

import { MovieReserve } from './movie-reserve';
import {MOVIERESERVE } from './mock-movies-reserve';
@Injectable()
export class MovieService {
  getMovies(): Promise<Movie[]> {
    return Promise.resolve(MOVIES);
  }

  getMoviesTime(): Promise<MovieTime[]> {
    return Promise.resolve(MOVIESTIME);
  }  

  getMoviesReserve(): Promise<MovieReserve[]> {
    return Promise.resolve(MOVIERESERVE);
  }



  getHeroesSlowly(): Promise<Movie[]> {
    return new Promise(resolve => {
      // Simulate server latency with 2 second delay
      setTimeout(() => resolve(this.getMovies()), 2000);
    });
  }

  getMovie(id: number): Promise<Movie> {
    return this.getMovies()
               .then(movies => movies.find(movie => movie.id === id));
  }

  getMovieTime(id: number): Promise<MovieTime>{
    return this.getMoviesTime()
               .then(moviesTime => moviesTime.find(movieTime => movieTime.id === id));
  }

  getMovieReserve(id: number, date: String, time: String): Promise<MovieReserve> {
    return this.getMoviesReserve()
               .then(moviesReserve => moviesReserve.find(                                                        
               (movieReserve => (movieReserve.id === id)&&(movieReserve.movieTime === time)&&(movieReserve.movieDate === date)))
               );
  }
}