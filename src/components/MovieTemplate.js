import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import '../resources/header.module.css';
import AddMoviePopup from '../components/AddMoviePopup';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import { deleteSelectedMovie, loadMovieDetail } from '../pages/thunks';
const MovieTemplate = ({ movie, deleteMoviePressed, onMovieClicked }) => {
    const [movieControlMenu, setmovieControlMenu] = useState(false);
    const [showAddPopup, setShowAddPopup] = useState();
    return (
        <a id={movie.id} className="col-4"  >
            <div className="b5fwa0m2 pmk7jnqg plgsh5y4 edit-content">
                <button id="movie-menu" onClick={() => setmovieControlMenu(!movieControlMenu)} >...</button>
                {
                    movieControlMenu ?
                        <div >
                            <button onClick={() => setmovieControlMenu(!movieControlMenu)}>close me</button>
                            <button onClick={() => {
                                setShowAddPopup(true);
                            }
                            }>Edit</button>
                            {showAddPopup ?
                                <AddMoviePopup className="row" movie={movie}
                                    text='Close Me'
                                    closePopup={() => setShowAddPopup(false)}
                                />
                                : null
                            }
                            <button onClick={() => {
                                const confirmMessage = `Are you sure you want to delete this movie?  ${movie.title}`;
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
                <div className="row" onClick={() => onMovieClicked(movie)}>
                    <div  >
                        <img className="col" src={movie.poster_path} alt="" />
                        <div className="float-left">
                            {movie.title}
                        </div>
                        <div className="float-right">
                            {movie.release_date}
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
    deleteMoviePressed: movie => dispatch(deleteSelectedMovie(movie)),
    onMovieClicked: movie => dispatch(loadMovieDetail(movie))
});

export default connect(mapStateToProps, mapDispatchToProps)(MovieTemplate);
