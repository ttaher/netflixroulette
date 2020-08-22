import React from 'react';
import MoviesList from './MoviesList.js'
import '../resources/searchresult.module.css'
import '../resources/header.module.css';
class Searchresult extends React.Component {

    render() {
        const movieList = [
            { id: 1, movieName: "movie1", movieYear: "2020", movieImgUrl: "https://github.com/carlosavilae/Netflix-Clone/blob/master/img/p1.PNG?raw=true" },
            { id: 2, movieName: "movie2", movieYear: "2020", movieImgUrl: "https://github.com/carlosavilae/Netflix-Clone/blob/master/img/p2.PNG?raw=true" },
            { id: 3, movieName: "movie3", movieYear: "2020", movieImgUrl: "https://github.com/carlosavilae/Netflix-Clone/blob/master/img/p3.PNG?raw=true" },
            { id: 5, movieName: "movie5", movieYear: "2020", movieImgUrl: "https://github.com/carlosavilae/Netflix-Clone/blob/master/img/p5.PNG?raw=true" },
            { id: 6, movieName: "movie6", movieYear: "2020", movieImgUrl: "https://github.com/carlosavilae/Netflix-Clone/blob/master/img/p6.PNG?raw=true" },
            { id: 7, movieName: "movie7", movieYear: "2020", movieImgUrl: "https://github.com/carlosavilae/Netflix-Clone/blob/master/img/p7.PNG?raw=true" },
        ];
        return (
            <>
                <div className="searchResultCategory">
                    <nav className="navMenu">
                        <li>
                            <a>All</a>
                        </li>
                        <li >
                            <a>docunentary </a>
                        </li>
                        <li >
                            <a> comedy</a>
                        </li>
                        <li >
                            <a>   horror</a>
                        </li>
                        <li >
                            <a>   crime</a>
                        </li>
                        <li >
                            <a></a>
                        </li>
                        <li >
                            <a></a>
                        </li>
                        <li >
                            <a>    sort by</a>
                        </li>
                        <li  >
                            <a>   release date</a>
                        </li>
                    </nav>

                    <div className="container">
                        <MoviesList movieList={movieList}></MoviesList>
                    </div>

                </div>
            </>
        );
    }

}
export default Searchresult;
