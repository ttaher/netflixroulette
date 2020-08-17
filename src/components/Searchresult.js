import React from 'react';
import MoviesList from './MoviesList.js'
import styles from '../resources/searchresult.module.css'
import '../resources/header.module.css';
class Searchresult extends React.Component {
    render() {
        return (
            <>
                <div className={styles.searchResultCategory}>
                    <nav className={styles.navMenu}>
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
                        <MoviesList></MoviesList>
                    </div>

                </div>
            </>
        );
    }

}
export default Searchresult;
