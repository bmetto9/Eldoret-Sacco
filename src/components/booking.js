import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import fire from '../files/firebase';
import '../trip_details.css';

export const Booking = () => {
    const [userbookings, setuserbookings] = useState([]);

    // useEffect(() => {
    //     fire.firestore().collection("Bookings").where("email", "==", email).get().then((snapshot) => snapshot.forEach(ele => {
    //         const data = ele.data();
    //         setuserbookings(arr => [...arr, { data: data }]);
    //         // console.log(data);
    //     }))

    // }, [])
    //console.log(userbookings);
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
                        <li className="nav-item active ">
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
                        <div className="row">
                            <div className="col-md-12">
                                <div className="card">
                                    <div className="card-header card-header-primary">
                                        <h4 className="card-title">Bookings</h4>
                                        <p className="card-category" id="card-category">Eldoret Expree Bookings Appear Here</p>
                                    </div>
                                    <div className="card-body" id="movie-table-card">
                                        <div className="table-responsive" id="movie-table">
                                            <table className="table">
                                                <thead className=" text-primary">
                                                    <th>
                                                        Booking Date
                                                    </th>
                                                    <th>
                                                        Bus Type
                                                    </th>
                                                    <th>
                                                        Seat booked
                                                    </th>
                                                    <th>
                                                        Travel Date
                                                    </th>

                                                </thead>
                                                <tbody>
                                                    {/* {
                                                        userbookings.map((data, index) => {
                                                            return <tr key={index}>
                                                                <td>
                                                                    {data.data.currentdate}
                                                                </td>
                                                                <td>
                                                                    {data.data.moviename}
                                                                </td>
                                                                <td>
                                                                    {data.data.totalceats}
                                                                </td>
                                                                <td>
                                                                    {data.data.bookingdate}
                                                                </td>

                                                            </tr>
                                                        })
                                                    } */}

                                                    <tr>
                                                        <td>
                                                            20th November 2021
                                                        </td>
                                                        <td>
                                                            Coaster - KDA 515k
                                                        </td>
                                                        <td>
                                                            10
                                                        </td>
                                                        <td>
                                                            14th December 2021
                                                        </td>

                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
