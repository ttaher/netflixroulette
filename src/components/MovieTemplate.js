import React from 'react';
import '../resources/header.module.css';
import '../resources/searchresult.module.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import MovieControl from './MovieControl.js'
class MovieTemplate extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            movieControlMenu: false
        };

        this.showControlMenu = this.showControlMenu.bind(this);
    }
    showControlMenu() {
        console.log("test showControlMenu ")
        this.setState({
            movieControlMenu: !this.state.movieControlMenu
        });
        console.log(this.state.movieControlMenu)

    }
    render() {
        return (
            <>
                <div id={this.props.movie.id} className="col-4">
                    <div class="b5fwa0m2 pmk7jnqg plgsh5y4 edit-content">
                        <button onClick={this.showControlMenu.bind(this)} >...</button>
                        {
                            this.state.movieControlMenu ?
                                <MovieControl className="row"
                                    text='Close Me'
                                    closemenu={this.showControlMenu.bind(this)}
                                    movie={this.props.movie}
                                />
                                : null
                        }
                    </div>
                    <a href="/">
                        <div className="row">
                            <div  >
                                <img className="col" src={this.props.movie.movieImgUrl} alt="" />
                                <div className="float-left">
                                    {this.props.movie.movieName}
                                </div>
                                <div className="float-right">
                                    {this.props.movie.movieYear}

                                </div>
                            </div>
                        </div>
                    </a>
                </div>
            </>
        );
    }

}
export default MovieTemplate;
