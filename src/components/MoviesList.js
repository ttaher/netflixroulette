import React from 'react';
import '../resources/header.module.css';
import '../resources/searchresult.module.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import MovieTemplate from './MovieTemplate';
class MoviesList extends React.Component {
    render() {
        return (
            <>
                <div className="row" name="resultcount">
                    {this.props.movieList.length} movie found
                </div>
                <div className="row"  >
                    {this.props.movieList.map(movie =>
                        <MovieTemplate movie={movie} ></MovieTemplate>
                    )}
                </div>
            </>
        );
    }

}
export default MoviesList;
