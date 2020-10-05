import {
    addMovie,
    editMovie,
    deleteMovie,
    loadMovieDetailSuccess,
    loadMoviesInProgress,
    loadMoviesSuccess,
    loadMoviesFailure,
} from './actions';

export const loadMovies = () => async (dispatch, getState) => {
    try {

        dispatch(loadMoviesInProgress());
        const response = await fetch('http://localhost:4000/movies');
        const result = await response.json();
        debugger;
        dispatch(loadMoviesSuccess(result.data));
    } catch (e) {
        dispatch(loadMoviesFailure());
        dispatch(displayAlert(e));
    }
}
export const loadMovieDetail = movie => async (dispatch, getState) => {
    try {
        dispatch(loadMoviesInProgress());
        const response = await fetch($`http://localhost:4000/movies/{movie.id}`);
        const movie = await response.json();
        
        dispatch(loadMovieDetailSuccess(movie));
    } catch (e) {
        dispatch(displayAlert(e));
    }
}

export const addNewMovie = movie => async dispatch => {
    try {
        dispatch(addMovie(movie));
    } catch (e) {
        dispatch(displayAlert(e));
    }
}
export const editSelectedMovie = movie => async dispatch => {
    try {
        dispatch(editMovie(movie));
    } catch (e) {
        dispatch(displayAlert(e));
    }
}
export const deleteSelectedMovie = movie => async dispatch => {
    try {
        debugger;
        fetch('http://localhost:4000/movies/' + movie.id, {
            method: 'DELETE',
        }).then(res => dispatch(deleteMovie(movie)));
    } catch (e) {
        dispatch(displayAlert(e));
    }
}
export const displayAlert = text => () => {
    console.log(text)
};