import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import SearchHeader from './SearchHeader';
import '../resources/header.module.css';
import ErrorBoundary from './ErrorBoundary';
import AddMoviePopup from './AddMoviePopup';
import { getMovieDetails } from '../pages/selectors';
import { loadMovieDetail, hideDetails } from '../pages/thunks';


const Header = ({ movieDetails, loadMovieDetails: { }, onHideDetailsPressed }) => {
    const [showAddPopup, setShowAddPopup] = useState(false);
    const header = <header name="header" className="header">
        <div className="row">
            <label className="headerTitle">
                NETFLIXROULETTE
            </label>
            <button type="button" onClick={() => setShowAddPopup(!showAddPopup)} className="headerAddMovie">
                + ADD MOVIE
                </button>
            {showAddPopup ?
                <AddMoviePopup className="row"
                    text='Close Me'
                    closePopup={() => setShowAddPopup(!showAddPopup)}
                />
                : null
            }
        </div>
        <div className="row">
            <ErrorBoundary>
                <SearchHeader></SearchHeader>
            </ErrorBoundary>
        </div>
    </header>
    return (
        (movieDetails == undefined || movieDetails == null) ? header :
            <header name="header" style={{ backgroundImage: `url(${movieDetails.poster_path})` }} className="header">
                <div className="row">
                    <button type="button" className="headerAddMovie">
                        X
                </button>
                    <label className="headerTitle">
                        {movieDetails.title}
                    </label>
                    <h3>{movieDetails.release_date}</h3>
                </div>
            </header>
    )

}
const mapStateToProps = state => {
    
    return ({
        movieDetails: state.movies.movieDetails
    })
};

const mapDispatchToProps = dispatch => ({
    loadMovieDetails: movie => dispatch(loadMovieDetail(movie)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Header);  
