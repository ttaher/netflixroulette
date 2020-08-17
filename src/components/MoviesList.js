import React from 'react';
import {
    Link, BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom';
import '../resources/header.module.css';
import '../resources/searchresult.module.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
class MoviesList extends React.Component {
    render() {
        return (
            <>
                <div className="row" name="resultcount">
                    39 movie found
                </div>
                <Router>
                    <div className="row"  >
                        <div className="col-4">
                            <Link to="https://github.com/carlosavilae/Netflix-Clone/blob/master/img/p1.PNG?raw=true">
                                <div className="row">
                                    <div  >
                                        <img className="col" src="https://github.com/carlosavilae/Netflix-Clone/blob/master/img/p1.PNG?raw=true" alt="" />
                                        <div className="float-left">
                                            movie1
                                        </div>
                                        <div className="float-right">
                                            2020
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className="col-4">
                            <Link to="https://github.com/carlosavilae/Netflix-Clone/blob/master/img/p2.PNG?raw=true">
                                <div className="row">
                                    <div  >
                                        <img className="col" src="https://github.com/carlosavilae/Netflix-Clone/blob/master/img/p2.PNG?raw=true" alt="" />
                                        <div className="float-left">
                                            movie2
                                        </div>
                                        <div className="float-right">
                                            2020
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className="col-4">
                            <Link to="https://github.com/carlosavilae/Netflix-Clone/blob/master/img/p3.PNG?raw=true">
                                <div className="row">
                                    <div  >
                                        <img className="col" src="https://github.com/carlosavilae/Netflix-Clone/blob/master/img/p3.PNG?raw=true" alt="" />
                                        <div className="float-left">
                                            movie2
                                        </div>
                                        <div className="float-right">
                                            2020
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className="col-4">
                            <Link to="https://github.com/carlosavilae/Netflix-Clone/blob/master/img/p4.PNG?raw=true">
                                <div className="row">
                                    <div  >
                                        <img className="col" src="https://github.com/carlosavilae/Netflix-Clone/blob/master/img/p4.PNG?raw=true" alt="" />
                                        <div className="float-left">
                                            movie2
                                        </div>
                                        <div className="float-right">
                                            2020
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className="col-4">

                            <Link to="https://github.com/carlosavilae/Netflix-Clone/blob/master/img/p6.PNG?raw=true">
                                <div className="row">
                                    <div  >
                                        <img className="col" src="https://github.com/carlosavilae/Netflix-Clone/blob/master/img/p6.PNG?raw=true" alt="" />
                                        <div className="float-left">
                                            movie2
                                        </div>
                                        <div className="float-right">
                                            2020
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className="col-4">
                            <Link to="https://github.com/carlosavilae/Netflix-Clone/blob/master/img/p7.PNG?raw=true">
                                <div className="row">
                                    <div  >
                                        <img className="col" src="https://github.com/carlosavilae/Netflix-Clone/blob/master/img/p7.PNG?raw=true" alt="" />
                                        <div className="float-left">
                                            movie2
                                        </div>
                                        <div className="float-right">
                                            2020
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                </Router>
            </>
        );
    }

}
export default MoviesList;
