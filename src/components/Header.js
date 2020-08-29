import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import SearchHeader from './SearchHeader';
import '../resources/header.module.css';
import ErrorBoundary from './ErrorBoundary';
import AddMoviePopup from './AddMoviePopup';
import { getMovieDetails } from '../pages/selectors';
import { loadMovieDetail } from '../pages/thunks';


const Header = ({ movieDetails, loadMovieDetails: { } }) => {
    const [showAddPopup, setShowAddPopup] = useState(false);
    debugger
    // constructor() {
    //     super();
    //     this.state = {
    //         showAddPopup: false
    //     };
    // }
    // toggleAddPopup() {
    //     this.setState({
    //         showAddPopup: !this.state.showAddPopup
    //     });
    // }
    debugger;
    if (movieDetails != null) {
        console.log(movieDetails);
    }
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
        movieDetails !== null && movieDetails.length == 0 ? header : <header name="header" style={{ backgroundImage: `url(${movieDetails[0].movieImgUrl})` }} className="header">
        <div className="row">
            <label className="headerTitle">
                {movieDetails[0].movieName}
        </label>
        </div>
    </header>
    )

}
const mapStateToProps = state => ({
    movieDetails: getMovieDetails(state)
});

const mapDispatchToProps = dispatch => ({
    loadMovieDetails: movie => dispatch(loadMovieDetail(movie)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Header);  
