import React from 'react';
import '../resources/AddMoviePopup.css';
class AddMoviePopup extends React.Component {
    constructor(props) {
        super(props);
        debugger;
        this.state = {
            title: "",
            releaseDate: null,
            movieUrl: "",
            movieGenre: "",
            movieOverview: "",
            movieRuntime: ""
        };
        this.AddNewMovie = this.AddNewMovie.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.name === 'isGoing' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    AddNewMovie(event) {
        event.preventDefault()
        console.log(this.state.title);
        console.log(this.state.releaseDate);
        console.log(this.state.movieUrl);
        console.log(this.state.movieGenre);
        console.log(this.state.movieOverview);
        console.log(this.state.movieRuntime);
        this.props.closePopup();
    }

    render() {
        return (
            <div className='popup'>
                <div className='popup_inner'>
                    <h1>{this.props.text}</h1>
                    <button onClick={this.props.closePopup}>close me</button>
                    <form onSubmit={this.AddNewMovie}>
                        <div className="row">
                            <h3 className="form-input-title">TITLE</h3>
                            <br />
                            <input id="title" type="text" name="title" placeholder="movie title" value={this.state.title} onChange={this.handleInputChange}></input>
                        </div>
                        <div className="row">
                            <h3 className="form-input-title"> RELEASE DATE</h3>
                            <br />
                            <input id="releaseDate" type="date" name="releaseDate" placeholder="movie realse date" value={this.state.releaseDate} onChange={this.handleInputChange}></input>
                        </div>

                        <div className="row">
                            <h3 className="form-input-title">MOVIE URL</h3>
                            <br />
                            <input name="movieUrl" type="text" placeholder="movie url" value={this.state.movieUrl} onChange={this.handleInputChange}></input>
                        </div>
                        <div className="row">
                            <h3 className="form-input-title">GENRE</h3>
                            <br />
                            <select id="movieGenre" type="text" name="movieGenre" value={this.state.movieGenre} onChange={this.handleInputChange}>
                                <option value="0">select genre</option>
                                <option value="lime">Lime</option>
                                <option value="coconut">Coconut</option>
                                <option value="mango">Mango</option>
                            </select>
                        </div>

                        <div className="row">
                            <h3 className="form-input-title">OVERVIEW</h3>
                            <br />
                            <input id="movieOverview" type="text" name="movieOverview" placeholder="movie overview" value={this.state.movieOverview} onChange={this.handleInputChange}></input>
                        </div>
                        <div className="row">
                            <h3 className="form-input-title">RUNTIME</h3>
                            <br />
                            <input id="movieRuntime" type="text" name="movieRuntime" placeholder="movie runtime" value={this.state.movieRuntime} onChange={this.handleInputChange}></input>
                        </div>

                        <button type="submit" >Submit</button>
                    </form>
                </div>
            </div>
        );
    }
}
export default AddMoviePopup;