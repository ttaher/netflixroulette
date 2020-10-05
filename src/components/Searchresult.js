import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import '../resources/searchresult.module.css'
import '../resources/header.module.css';
import { getMovies, getMoviesLoading }
    from '../pages/selectors';
import { loadMovies, deleteSelectedMovie, editSelectedMovie, loadMovieDetail }
    from '../pages/thunks';
import MovieTemplate from './MovieTemplate';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
const Searchresult = ({ MoviesList, isLoading, startLoadingMovies }) => {
    debugger;
    const movies = MoviesList.movies;
    useEffect(() => {
        startLoadingMovies()
    }, []);
    const loadingMessage = <div>Loading movies...</div>;
    const moviesListContent =
        <div className="searchResultCategory">
            <nav className="navMenu">
                <li>
                    <a>All</a>
                </li>
                <li >
                    <a>docunentary </a>
                </li>
                <li >
                    <a> comedy</a>
                </li>
                <li >
                    <a>   horror</a>
                </li>
                <li >
                    <a>   crime</a>
                </li>
                <li >
                    <a></a>
                </li>
                <li >
                    <a></a>
                </li>
                <li >
                    <a>    sort by</a>
                </li>
                <li  >
                    <a>   release date</a>
                </li>
            </nav>

            <div className="container">
                <div className="row" name="resultcount">
                    {movies.length} movie found
                </div>
                <div className='row' >
                    {
                        movies.map(movie =>
                            <MovieTemplate key={movie.id} movie={movie} ></MovieTemplate>
                        )}
                </div>
            </div>
        </div>
    return isLoading ? loadingMessage : moviesListContent;
}

const mapStateToProps = state => ({
    isLoading: getMoviesLoading(state),
    MoviesList: getMovies(state)
});

const mapDispatchToProps = dispatch => ({
    startLoadingMovies: () => dispatch(loadMovies())
});

export default connect(mapStateToProps, mapDispatchToProps)(Searchresult);
