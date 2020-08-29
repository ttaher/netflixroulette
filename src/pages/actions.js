export const ADD_MOVIE = 'ADD_MOVIE';
export const addMovie = movie => ({
    type: ADD_MOVIE,
    payload: { movie },
});

export const EDIT_MOVIE = 'EDIT_MOVIE';
export const editMovie = movie => ({
    type: EDIT_MOVIE,
    payload: { movie },
});

export const DELETE_MOVIE = 'DELETE_MOVIE';
export const deleteMovie = movie => ({
    type: DELETE_MOVIE,
    payload: { movie },
});


export const LOAD_MOVIES_IN_PROGRESS = 'LOAD_MOVIES_IN_PROGRESS';
export const loadMoviesInProgress = () => ({
    type: LOAD_MOVIES_IN_PROGRESS,
});

export const LOAD_MOVIES_SUCCESS = 'LOAD_MOVIES_SUCCESS';
export const loadMoviesSuccess = movies => ({
    type: LOAD_MOVIES_SUCCESS,
    payload: { movies },
});

export const LOAD_MOVIE_DETAIL = 'LOAD_MOVIE_DETAIL';
export const loadMovieDetailSuccess = movie => ({
    type: LOAD_MOVIE_DETAIL,
    payload: { movie }
});
export const LOAD_MOVIES_FAILURE = 'LOAD_MOVIES_FAILURE';
export const loadMoviesFailure = () => ({
    type: LOAD_MOVIES_FAILURE,
});