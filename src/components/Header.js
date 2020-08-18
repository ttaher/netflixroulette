import React from 'react';
import styles from '../resources/header.module.css';
import SearchHeader from './SearchHeader';
import '../resources/header.module.css';
import ErrorBoundary from './ErrorBoundary'
class Header extends React.Component {
    render() {
        return (
            <>
                <div name="header" className={styles.header}>
                    <div className="row">
                        <label className={styles.headerTitle}>
                            NETFLIXROULETTE
                        </label>
                        <button type="button" className={styles.headerAddMovie}>
                            + ADD MOVIE
                            </button>
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
