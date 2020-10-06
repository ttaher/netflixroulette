import React from 'react';
import '../resources/AddMoviePopup.css';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
const MovieControl = ({ movie, closemenu }) => {
    return (
        <div >
            <div >
                <button onClick={closemenu}>close me</button>
                <button onClick={closemenu}>Edit</button>
                <button onClick={deleteMovieConfirm(movie, closemenu)}>Delete</button>
            </div>
        </div>
    )

}
function deleteMovieConfirm(movie, closemenu) {
    console.log(movie.movieName);
    const confirmMessage = `Are you sure you want to delete this movie?  ${movie.movieName}`;

    confirmAlert({
        title: 'Delete MOVIE',
        message: confirmMessage,
        buttons: [
            {
                label: 'Confirm',
                onClick: () => () => closemenu()
            }
        ]
    });
};
export default MovieControl;