import React from 'react'
import { Link } from 'react-router-dom';
import '../trip_details.css';


export const TripDetails = () => {

    return (
        <div className="wrapper ">
            <link href="../assets/css/material-dashboard.css?v=2.1.2" rel="stylesheet" />
            <div className="sidebar" data-color="purple" data-background-color="white" data-image="../assets/img/sidebar-1.jpg">
                <div className="logo"><a href="http://www.creative-tim.com" className="simple-text logo-normal">
                    Eldoret Sacco
                </a></div>
                <div className="sidebar-wrapper">
                    <ul className="nav">
                        <li className="nav-item">
                            <Link to="/homepage" className="nav-link">
                                <i className="material-icons">home</i>
                                <p>Home</p>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/dashboard" className="nav-link">
                                <i className="material-icons">dashboard</i>
                                <p>Dashboard</p>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/bookings" className="nav-link">
                                <i className="material-icons">content_paste</i>
                                <p>Bookings</p>
                            </Link>
                        </li>
                        <li className="nav-item ">
                            <Link to="/userprofile" className="nav-link">
                                <i className="material-icons">person</i>
                                <p>User Profile</p>
                            </Link>
                        </li>
                        <li className="nav-item ">
                            <Link to="/feedback" className="nav-link" >
                                <i className="material-icons">notifications</i>
                                <p>Feedback</p>
                            </Link>
                        </li>
                        <li className="nav-item ">
                            <Link to="" className="nav-link" >
                                <i className="material-icons">logout</i>
                                <p>Logout</p>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="main-panel">
                <nav class="navbar navbar-expand-lg navbar-transparent navbar-absolute fixed-top ">
                    <div class="container-fluid">
                        <div class="navbar-wrapper">

                        </div>
                        <button class="navbar-toggler" id="table-nav" type="button" data-toggle="collapse" aria-controls="navigation-index" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="sr-only">Toggle navigation</span>
                            <span class="navbar-toggler-icon icon-bar"></span>
                            <span class="navbar-toggler-icon icon-bar"></span>
                            <span class="navbar-toggler-icon icon-bar"></span>
                        </button>

                    </div>
                </nav>
                <div className="content">
                    <div className="container-fluid">
                        <div className="row trip-info">
                            <div>
                                <h2 style={{ fontWeight: "normal", fontSize: "larger" }}>From : Nairobi</h2>
                                <h2 style={{ fontWeight: "normal", fontSize: "larger" }}>Destination : Eldoret</h2>
                                <h2 style={{ fontWeight: "normal", fontSize: "larger" }}>Date : 14th December 2020 </h2>
                                <h2 style={{ fontWeight: "normal", fontSize: "larger" }}>Depature Time : 09:00am </h2>
                                <h2 style={{ fontWeight: "normal", fontSize: "larger" }}>Arrival Time : 12:00pm </h2>
                                <h2 style={{ fontWeight: "normal", fontSize: "larger" }}>Driver : Brian Metto </h2>
                                <h2 style={{ fontWeight: "normal", fontSize: "larger" }}>Ride Type : Coaster </h2>
                                <h2 style={{ fontWeight: "normal", fontSize: "larger" }}>Total Rate : Ksh 1,000.00 </h2>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    
    )
}
