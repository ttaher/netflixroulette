import { expect } from 'chai';
import { movie, movies } from '../../pages/reducers';

describe('the movies reducer', () => {

    it('Add new movie when ADD_MOVIE action is received', () => {

        const fakeMovie = {
            title: "test 1",
            tagline: "test 1",
            vote_average: 100,
            vote_count: 100,
            release_date: "1990-10-21",
            poster_path: "",
            overview: "test 1",
            budget: 10000,
            revenue: 20000,
            genres: ["drama"],
            runtime: 230
        };
        const fakeAction = {
            type: 'ADD_MOVIE',
            payload: fakeMovie
        };

        const originalState = { isLoading: false, data: [], movieDetails: null };
        console.log(actual);

        const expected = {
            isLoading: false,
            data: [fakeMovie,],
            movieDetails: null
        };
        console.log(actual);

        const actual = movies(originalState, fakeAction);
        console.log(actual);

        console.log(actual);

        expect(actual).to.deep.equal(expected);
    });
});