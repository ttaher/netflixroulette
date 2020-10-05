import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import '../resources/AddMoviePopup.css';
import { editSelectedMovie } from '../pages/thunks';

const AddMoviePopup = ({ movie = {}, closePopup, editMoviePressed }) => {
    let formAction = "";
    if (movie.id == undefined) {
        formAction = "Create New Movie";
    } else {
        formAction = "Edit Movie";
    }

    const [id, setid] = useState(movie && movie.id ? movie.id : "");
    const [title, settitle] = useState(movie && movie.title ? movie.title : "");
    const [release_date, setrelease_date] = useState(movie && movie.release_date ? movie.release_date : "");
    const [poster_path, setposter_path] = useState(movie && movie.poster_path ? movie.poster_path : "");
    const [overview, setoverview] = useState(movie && movie.overview ? movie.overview : "");
    const [genres, setgenres] = useState(movie && movie.genres ? movie.genres : "");
    const [runtime, setruntime] = useState(movie && movie.runtime ? movie.runtime : "");

    function postData(event) {

        debugger;
        let editedMovie = {
            id: id,
            title: title,
            release_date: release_date,
            poster_path: poster_path,
            overview: overview,
            genres: genres,
            runtime: runtime
        }
        editMoviePressed(editedMovie);
        closePopup();
    }

    return (
        <div className='popup'>
            <div className='popup_inner'>
                <h1>{formAction}</h1>
                <button onClick={closePopup}>close me</button>
                <form onSubmit={postData}>
                    <div className="row">
                        <h3 className="form-input-title">TITLE</h3>
                        <br />
                        <input type="hidden" value={id}></input>
                        <input id="title" type="text" name="title" placeholder="movie title" value={title}
                            onChange={e => settitle(e.target.value)}></input>
                    </div>
                    <div className="row">
                        <h3 className="form-input-title"> RELEASE DATE</h3>
                        <br />
                        <input id="release_date" type="date" name="release_date" placeholder="movie realse date" value={release_date} onChange={e => setrelease_date(e.target.value)}></input>
                    </div>

                    <div className="row">
                        <h3 className="form-input-title">MOVIE URL</h3>
                        <br />
                        <input name="poster_path" type="text" placeholder="movie url" value={poster_path} onChange={e => setposter_path(e.target.value)}></input>
                    </div>
                    <div className="row">
                        <h3 className="form-input-title">GENRE</h3>
                        <br />
                        <select id="genres" type="text" multiple={true} name="genres" value={genres} onChange={e => setgenres(e.target.value)}>
                            <option value="0">select genre</option>
                            <option value="lime">Lime</option>
                            <option value="coconut">Coconut</option>
                            <option value="mango">Mango</option>
                        </select>
                    </div>

                    <div className="row">
                        <h3 className="form-input-title">OVERVIEW</h3>
                        <br />
                        <input id="overview" type="text" name="overview" placeholder="movie overview" value={overview} onChange={e => setoverview(e.target.value)}></input>
                    </div>
                    <div className="row">
                        <h3 className="form-input-title">RUNTIME</h3>
                        <br />
                        <input id="runtime" type="text" name="runtime" placeholder="movie runtime" value={runtime} onChange={e => setruntime(e.target.value)}></input>
                    </div>

                    <button type="submit" >Submit</button>
                </form>
            </div>
        </div >
    );

}

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({
    editMoviePressed: movie => dispatch(editSelectedMovie(movie)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddMoviePopup);