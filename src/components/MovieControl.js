import React from 'react';
import '../resources/AddMoviePopup.css';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
class MovieControl extends React.Component {
    constructor(props) {
        super(props);
        this.deleteMovieConfirm = this.deleteMovieConfirm.bind(this);
    }

    deleteMovieConfirm() {
        console.log(this.props.movie.movieName);
        const confirmMessage = `Are you sure you want to delete this movie?  ${this.props.movie.movieName}`;

        confirmAlert({
            title: 'Delete MOVIE',
            message: confirmMessage,
            buttons: [
                {
                    label: 'Confirm',
                    onClick: () => () => this.props.closemenu
                }
            ]
        });
    };

    render() {
        return (
            <div >
                <div >
                    <button onClick={this.props.closemenu}>close me</button>
                    <button onClick={this.props.closemenu}>Edit</button>
                    <button onClick={this.deleteMovieConfirm}>Delete</button>
                </div>
            </div>
        );
    }
}
export default MovieControl;