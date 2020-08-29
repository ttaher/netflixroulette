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
        const movies = [
            { id: 1, movieName: "movie1", movieYear: "2020", movieImgUrl: "https://github.com/carlosavilae/Netflix-Clone/blob/master/img/p1.PNG?raw=true", isDeleted: false },
            { id: 2, movieName: "movie2", movieYear: "2020", movieImgUrl: "https://github.com/carlosavilae/Netflix-Clone/blob/master/img/p2.PNG?raw=true", isDeleted: false },
            { id: 3, movieName: "movie3", movieYear: "2020", movieImgUrl: "https://github.com/carlosavilae/Netflix-Clone/blob/master/img/p3.PNG?raw=true", isDeleted: false },
            { id: 5, movieName: "movie5", movieYear: "2020", movieImgUrl: "https://github.com/carlosavilae/Netflix-Clone/blob/master/img/p5.PNG?raw=true", isDeleted: false },
            { id: 6, movieName: "movie6", movieYear: "2020", movieImgUrl: "https://github.com/carlosavilae/Netflix-Clone/blob/master/img/p6.PNG?raw=true", isDeleted: false },
            { id: 7, movieName: "movie7", movieYear: "2020", movieImgUrl: "https://github.com/carlosavilae/Netflix-Clone/blob/master/img/p7.PNG?raw=true", isDeleted: false },
        ];

        dispatch(loadMoviesSuccess(movies));
    } catch (e) {
        dispatch(loadMoviesFailure());
        dispatch(displayAlert(e));
    }
}
export const loadMovieDetail = movie => async (dispatch, getState) => {
    try {
        const movies = [
            { id: 1, movieName: "movie1", movieYear: "2020", movieImgUrl: "https://github.com/carlosavilae/Netflix-Clone/blob/master/img/p1.PNG?raw=true", isDeleted: false },
            { id: 2, movieName: "movie2", movieYear: "2020", movieImgUrl: "https://github.com/carlosavilae/Netflix-Clone/blob/master/img/p2.PNG?raw=true", isDeleted: false },
            { id: 3, movieName: "movie3", movieYear: "2020", movieImgUrl: "https://github.com/carlosavilae/Netflix-Clone/blob/master/img/p3.PNG?raw=true", isDeleted: false },
            { id: 5, movieName: "movie5", movieYear: "2020", movieImgUrl: "https://github.com/carlosavilae/Netflix-Clone/blob/master/img/p5.PNG?raw=true", isDeleted: false },
            { id: 6, movieName: "movie6", movieYear: "2020", movieImgUrl: "https://github.com/carlosavilae/Netflix-Clone/blob/master/img/p6.PNG?raw=true", isDeleted: false },
            { id: 7, movieName: "movie7", movieYear: "2020", movieImgUrl: "https://github.com/carlosavilae/Netflix-Clone/blob/master/img/p7.PNG?raw=true", isDeleted: false },
        ];
        dispatch(loadMovieDetailSuccess(movies.filter(m => m.id == movie.id)));
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
        dispatch(deleteMovie(movie));
    } catch (e) {
        dispatch(displayAlert(e));
    }
}
export const displayAlert = text => () => {
    console.log(text)
};