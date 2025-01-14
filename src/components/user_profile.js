import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import fire from '../files/firebase';
import '../profile.css';

export const Userprofile = () => {

    return (
        <div>
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
                        <li className="nav-item ">
                            <Link to="/bookings" className="nav-link">
                                <i className="material-icons">content_paste</i>
                                <p>Bookings</p>
                            </Link>
                        </li>
                        <li className="nav-item active">
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
                        <button class="navbar-toggler" id="pro-nav" type="button" data-toggle="collapse" aria-controls="navigation-index" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="sr-only">Toggle navigation</span>
                            <span class="navbar-toggler-icon icon-bar"></span>
                            <span class="navbar-toggler-icon icon-bar"></span>
                            <span class="navbar-toggler-icon icon-bar"></span>
                        </button>

                    </div>
                </nav>

                <div className="profile" style={{ fontFamily: 'sans-serif', textAlign: 'center', width: '450px', boxShadow: '0 0 10px rgba(0,0,0,0.2)', padding: '100px' }}>
                    <img src="" alt="Profile Image" className="profile__image" style={{ width: '150px', height: '150px', objectFit: 'cover', borderRadius: '50%', margin: '0 auto 20px auto', display: 'block', marginTop: '-8%' }} />
                    <div className="profile__name" style={{ fontSize: '1.2em', fontWeight: 'bold' }}>Victor Maina</div>
                    <br />
                    <div className="profile__title" style={{ marginBottom: '20px' }}>victorgithuim@gmail.com</div>

                    <div className="profile__detail" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.9em', marginBottom: '20px' }}>
                        <i className="material-icons">person</i>0701230892
                    </div>

                </div>
            </div>
        </div>

    )
}
