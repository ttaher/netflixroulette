import React, { useState, useEffect } from 'react';
import NotFoundPage from './NotFoundPage';

const MoviePage = ({ match }) => {
    const id = match.params.id;
    debugger;

    const [movieInfo, setmovieInfo] = useState({
        id: 0, title: "", tagline: "", vote_average: 0, vote_count: 0, release_date: "", poster_path: "", overview: "", budget: 0, revenue: 0, genres: [], runtime: 0
    });
    debugger;


    useEffect(() => {
        const fetchData = async () => {
            debugger;
            const result = await fetch(`http://localhost:4000/movies/${id}`);
            const body = await result.json();
            debugger;
            setmovieInfo(body);
        }
        fetchData();
    }, [id])

    if (movieInfo.id == 0) {
        return <NotFoundPage></NotFoundPage>
    }
    return (
        <>
            <header name="header" style={{ backgroundImage: `url(${movieInfo.poster_path})` }} className="header">
                <div className="row">
                    <label className="headerTitle">
                        {movieInfo.title}
                    </label>
                    <h3>{movieInfo.release_date}</h3>
                </div>
            </header>
        </>
    )
};

export default MoviePage;
