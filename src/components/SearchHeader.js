import React from 'react';
import '../resources/searchheader.module.css';
class SeachHeader extends React.Component {
    render() {
        return (
            <>
                <div name="header" className="row">
                    <div className="searchTitle">
                        <h4> FIND YOUR MOVIE</h4>
                        <input type="search" className="searchInput" aria-describedby="emailHelp" placeholder="what do you want to watch?" />
                        <button type="button" className="searchButton">Search</button>
                    </div>
                </div>
            </>
        );
    }

}
export default SeachHeader;
