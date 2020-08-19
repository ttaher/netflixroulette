import React from 'react';
import SearchHeader from './SearchHeader';
import '../resources/header.module.css';
import ErrorBoundary from './ErrorBoundary';
import AddMoviePopup from './AddMoviePopup';
class Header extends React.Component {
    constructor() {
        super();
        this.state = {
            showAddPopup: false
        };
    }
    toggleAddPopup() {
        this.setState({
            showAddPopup: !this.state.showAddPopup
        });
    }
    render() {
        return (
            <>
                <div name="header" className="header">
                    <div className="row">
                        <label className="headerTitle">
                            NETFLIXROULETTE
                        </label>
                        <button type="button" onClick={this.toggleAddPopup.bind(this)} className="headerAddMovie">
                            + ADD MOVIE
                            </button>
                        {this.state.showAddPopup ?
                            <AddMoviePopup className="row"
                                text='Close Me'
                                closePopup={this.toggleAddPopup.bind(this)}
                            />
                            : null
                        }
                    </div>
                    <div className="row">
                        <ErrorBoundary>
                            <SearchHeader></SearchHeader>
                        </ErrorBoundary>
                    </div>
                </div>
            </>
        );
    }

}
export default Header;
