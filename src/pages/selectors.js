import { createSelector } from 'reselect';
export const getMovies = state => state.movies.data;
export const getMovieDetails = state => state.movie.data;
export const getMoviesLoading = state => state.movies.isLoading;

export const getMoviesList = createSelector(
    getMovies,
    getMovieDetails,
    getMoviesLoading,
    (movies, isLoading) => movies.filter(movie => !movie.isDeleted),
);