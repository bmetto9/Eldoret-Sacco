import React, { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import fire from '../files/firebase';
import '../trip_details.css';


export const Homepage = () => {
    const history = useHistory();
    const [moviedata, setmoviedata] = useState([]);

    useEffect(() => {
        fire.firestore().collection("currentmovies").get().then((snapshot) => {
            snapshot.forEach(doc => {
                var data = doc.data();
                //console.log(data);
                setmoviedata(arr => [...arr, { data: data }])

            })
        })
        console.log(moviedata);
    }, [])
    return (
        <div className="wrapper ">
            <link href="../assets/css/material-dashboard.css?v=2.1.2" rel="stylesheet" />
            <div className="sidebar" data-color="purple" data-background-color="white" data-image="../assets/img/sidebar-1.jpg">
                <div className="logo"><a href="http://www.creative-tim.com" className="simple-text logo-normal">
                    Eldoret Sacco
                </a></div>
                <div className="sidebar-wrapper">
                    <ul className="nav">
                        <li className="nav-item active  ">
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
                        <button class="navbar-toggler" type="button" data-toggle="collapse" aria-controls="navigation-index" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="sr-only">Toggle navigation</span>
                            <span class="navbar-toggler-icon icon-bar"></span>
                            <span class="navbar-toggler-icon icon-bar"></span>
                            <span class="navbar-toggler-icon icon-bar"></span>
                        </button>

                    </div>
                </nav>


                <div className="row">
                    {/* {
                        moviedata.map((data, index) => {
                            //console.log(data.image);
                            return(
                                <div className="col-4" key={index} style={{ marginLeft: "auto", marginRight: "auto" }}>
                                    <div className="card">

                                        <div className="card-img-top img-fluid">
                                            <img src={data.data.image} style={{ width: '18rem', height: '20rem' }} />
                                        </div>
                                        <button onClick={() => history.push("/details")}>View Details</button>
                                        <button onClick={() => history.push("/bookingform")}>Book Now</button>

                                    </div>
                                </div>
                            )
                            
                        })

                    } */}

                    <div className="col-4" style={{ marginLeft: "auto", marginRight: "auto" }}>
                        <div className="card">

                            <div className="card-img-top img-fluid">
                                <img src='https://res.cloudinary.com/emacon-production/image/upload/v1630587172/MaliSafi/kimon-maritz-mQiZnKwGXW0-unsplash_gaedsq.jpg' style={{ width: '20rem', height: '20rem' }} />
                            </div>
                            <button onClick={() => history.push("/details")}>View Details</button>
                            <button onClick={() => history.push("/bookingform")}>Book Now</button>

                        </div>
                    </div>

                    <div className="col-4" style={{ marginLeft: "auto", marginRight: "auto" }}>
                        <div className="card">

                            <div className="card-img-top img-fluid">
                                <img src='https://res.cloudinary.com/emacon-production/image/upload/v1630587172/MaliSafi/kimon-maritz-mQiZnKwGXW0-unsplash_gaedsq.jpg' style={{ width: '20rem', height: '20rem' }} />
                            </div>
                            <button onClick={() => history.push("/details")}>View Details</button>
                            <button onClick={() => history.push("/bookingform")}>Book Now</button>

                        </div>
                    </div>

                    <div className="col-4" style={{ marginLeft: "auto", marginRight: "auto" }}>
                        <div className="card">

                            <div className="card-img-top img-fluid">
                                <img src='https://res.cloudinary.com/emacon-production/image/upload/v1630587172/MaliSafi/kimon-maritz-mQiZnKwGXW0-unsplash_gaedsq.jpg' style={{ width: '20rem', height: '20rem' }} />
                            </div>
                            <button onClick={() => history.push("/details")}>View Details</button>
                            <button onClick={() => history.push("/bookingform")}>Book Now</button>

                        </div>
                    </div>





                </div>
            </div>
        </div>


    )
}
