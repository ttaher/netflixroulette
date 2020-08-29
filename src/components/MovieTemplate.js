import React, { useState, useEffect } from 'react';
import ReactDOM from "react-dom";
import { connect } from 'react-redux';
import '../resources/header.module.css';
import MovieControl from './MovieControl';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import { editSelectedMovie, deleteSelectedMovie, loadMovieDetail } from '../pages/thunks';
const MovieTemplate = ({ movie, editMoviePressed, deleteMoviePressed, onMovieClicked }) => {
    const [movieControlMenu, setmovieControlMenu] = useState(false);
    return (
        <a id={movie.id} className="col-4" onClick={() => onMovieClicked(movie)} >
            <div className="b5fwa0m2 pmk7jnqg plgsh5y4 edit-content">
                <button onClick={() => setmovieControlMenu(!movieControlMenu)} >...</button>
                {
                    movieControlMenu ?
                        <div >
                            <button onClick={() => setmovieControlMenu(!movieControlMenu)}>close me</button>
                            <button onClick={() => editMoviePressed(movie)}>Edit</button>
                            <button onClick={() => {
                                const confirmMessage = `Are you sure you want to delete this movie?  ${movie.movieName}`;
                                confirmAlert({
                                    title: 'Delete MOVIE',
                                    message: confirmMessage,
                                    buttons: [
                                        {
                                            label: 'Confirm',
                                            onClick: () =>
                                                deleteMoviePressed(movie)
                                        }
                                    ]
                                })
                            }}>Delete</button>
                        </div>
                        : null
                }
            </div>
            <div>
                <div className="row">
                    <div  >
                        <img className="col" src={movie.movieImgUrl} alt="" />
                        <div className="float-left">
                            {movie.movieName}
                        </div>
                        <div className="float-right">
                            {movie.movieYear}
                        </div>
                    </div>
                </div>
            </div>
        </a >
    )
}

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({
    editMoviePressed: movie => dispatch(editSelectedMovie(movie)),
    deleteMoviePressed: movie => dispatch(deleteSelectedMovie(movie)),
    onMovieClicked: movie => dispatch(loadMovieDetail(movie))
});

export default connect(mapStateToProps, mapDispatchToProps)(MovieTemplate);
