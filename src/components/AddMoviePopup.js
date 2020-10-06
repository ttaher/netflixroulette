import React from 'react';
import { connect } from 'react-redux';
import '../resources/AddMoviePopup.css';
import { editSelectedMovie } from '../pages/thunks';
import { useFormik } from 'formik';
const AddMoviePopup = ({ movie = {}, closePopup, editMoviePressed }) => {
    let formAction = "";
    if (movie.id == undefined) {
        formAction = "Create New Movie";
    } else {
        formAction = "Edit Movie";
    }

    const validate = values => {
        const errors = {};
        if (!values.title) {
            errors.title = 'Required';
        }

        if (!values.release_date) {
            errors.release_date = 'Required';
        }
        return errors;
    };
    const formik = useFormik({
        initialValues: {
            id: movie && movie.id ? movie.id : '',
            title: movie && movie.title ? movie.title : '',
            tagline: movie && movie.tagline ? movie.tagline : '',
            vote_average: movie && movie.vote_average ? movie.vote_average : '',
            vote_count: movie && movie.vote_count ? movie.vote_count : '',
            release_date: movie && movie.release_date ? movie.release_date : '',
            poster_path: movie && movie.poster_path ? movie.poster_path : '',
            overview: movie && movie.overview ? movie.overview : '',
            budget: movie && movie.budget ? movie.budget : '',
            revenue: movie && movie.revenue ? movie.revenue : '',
            genres: movie && movie.genres ? movie.genres : '',
            runtime: movie && movie.runtime ? movie.runtime : ''
        },
        validate,
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
            editMoviePressed(values);
            closePopup();
        },
    });

    return (
        <div className='popup'>
            <div className='popup_inner'>
                <h1>{formAction}</h1>
                <button onClick={closePopup}>close me</button>
                <form onSubmit={formik.handleSubmit}>
                    <div className="row">
                        <h3 className="form-input-title">TITLE</h3>
                        <br />
                        <input type="hidden" id="id" name="id" value={formik.values.id}></input>
                        {formik.errors.title ? <div style={{ color: "red" }}>{formik.errors.title}</div> : null}
                        <input id="title" type="text" name="title" placeholder="movie title" value={formik.values.title}
                            onChange={formik.handleChange}></input>
                    </div>
                    <div className="row">
                        <h3 className="form-input-title"> RELEASE DATE</h3>
                        <br />
                        <input id="release_date" type="date" name="release_date" placeholder="movie realse date" value={formik.values.release_date} onChange={formik.handleChange}></input>
                    </div>

                    <div className="row">
                        <h3 className="form-input-title">MOVIE URL</h3>
                        <br />
                        <input name="poster_path" type="text" placeholder="movie url" value={formik.values.poster_path} onChange={formik.handleChange}></input>
                    </div>
                    <div className="row">
                        <h3 className="form-input-title">GENRE</h3>
                        <br />
                        <select id="genres" type="text" multiple={true} name="genres" value={formik.values.genres} onChange={formik.handleChange}>
                            <option value="0">select genre</option>
                            <option value="lime">Lime</option>
                            <option value="coconut">Coconut</option>
                            <option value="mango">Mango</option>
                        </select>
                    </div>

                    <div className="row">
                        <h3 className="form-input-title">OVERVIEW</h3>
                        <br />
                        <input id="overview" type="text" name="overview" placeholder="movie overview" value={formik.values.overview} onChange={formik.handleChange}></input>
                    </div>
                    <div className="row">
                        <h3 className="form-input-title">RUNTIME</h3>
                        <br />
                        <input id="runtime" type="text" name="runtime" placeholder="movie runtime" value={formik.values.runtime} onChange={formik.handleChange}></input>
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