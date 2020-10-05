import {
    ADD_MOVIE,
    EDIT_MOVIE,
    DELETE_MOVIE,
    LOAD_MOVIE_DETAIL,
    LOAD_MOVIES_IN_PROGRESS,
    LOAD_MOVIES_SUCCESS,
    LOAD_MOVIES_FAILURE,
} from './actions';

const initialState = { isLoading: false, data: [], movieDetails: null };

export const movies = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case ADD_MOVIE: {
            const { movie } = payload;
            return {
                ...state,
                data: state.data.concat(movie),
            };
        }
        case EDIT_MOVIE: {
            const { movie } = payload;
            return {
                ...state,
                data: state.data,
            };
        }
        case DELETE_MOVIE: {
            const movieToDelete = payload;
            
            var result = {
                ...state,
                data: state.data.filter(movie => movie.id !== movieToDelete.id),
            };
                        return result;
        }
        case LOAD_MOVIE_DETAIL: {
            
            const movie = payload;
            return {
                ...state,
                isLoading: false,
                movieDetails: movie
            };
        }
        case LOAD_MOVIES_SUCCESS: {
            const movies = payload;
            return {
                ...state,
                isLoading: false,
                data: movies,
            };
        }
        case LOAD_MOVIES_IN_PROGRESS:
            return {
                ...state,
                isLoading: true,
            }
        case LOAD_MOVIES_FAILURE:
            return {
                ...state,
                isLoading: false,
            }
        default:
            return state;
    }
}

export const movie = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case LOAD_MOVIE_DETAIL: {
            const { movie } = payload;
            return {
                ...state,
                isLoading: false,
                data: movie
            };
        }
        default:
            return state;
    }
}