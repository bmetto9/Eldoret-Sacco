import React, { useEffect, useState } from 'react';
import '../bookingform.css';
import $ from 'jquery';
import { useHistory, useLocation } from 'react-router-dom';
import fire from '../files/firebase';
import '../trip_details.css'


export const Ticketbookingform = () => {
    const history = useHistory();
    const location = useLocation();
    var profile = 'location.state.profile;'
    var password = 'location.state.password;'
    var username = 'location.state.username;'
    var mobile = 'location.state.mobile;'
    var moviename = 'location.state.moviename;'
    var ticketcost = 'location.state.ticketcost;'
    var bookingdate = 'location.state.bookingdate;'
    var movieimage = 'location.state.movieimage;'
    var email = 'location.state.email;'
    console.log(username, mobile, moviename, ticketcost, bookingdate);
    const [name, setname] = useState('');
    const [ceats, setceats] = useState('');
    const allSeatarray = [];
    const [bookedceats, setbookedceats] = useState([]);


    const startSelect = (e) => {
        e.preventDefault();
        if (name === "" || ceats === "") {
            alert("please enter name and ceats");
        } else {
            $(".inputForm *").prop("disabled", true);
            $(".seatStructure *").prop("disabled", false);
            $(".title").hide();
            $(".sub-title").hide();
            $(".inputForm *").hide();
            $(".confirm-selection").show();

            document.getElementById("notification").innerHTML = "<p class='alert-message'style='margin-bottom:0px;background:yellow;'>Please Select your Seats NOW!</p>";
            fire.firestore().collection("movieceats").where("moviename", "==", moviename).where("bookingdate", "==", bookingdate).get().then((snapshot) => snapshot.forEach(ele => {
                var data = ele.data();
                console.log(data.ceatnames);
                //$("#" + data.ceatnames).attr("disabled", true);
                $("#" + data.ceatnames).attr("disabled", true);
                // $("#" + data.ceatnames).css("background-color", "red");
                setbookedceats(arr => [...arr, { data: data }]);
            }))
        }

    }


    const confirmSelection = () => {
        if ($("input:checked").length == ceats) {
            $(".seatStructure *").prop("disabled", true);
            $(".confirm-selection").hide();
            $(".pay-btn").show();
            var allNameVals = [];
            var allNumberVals = [];
            var allSeatsVals = [];

            //Storing in Array
            allNameVals.push(name);
            allNumberVals.push(ceats);
            $('#seatsBlock :checked').each(function () {
                allSeatsVals.push($(this).val());
                allSeatarray.push($(this).val());

            });

            //Displaying 
            $('#nameDisplay').val(allNameVals);
            $('#NumberDisplay').val(allNumberVals);
            $('#seatsDisplay').val(allSeatsVals);
        }
        else {
            alert("Please select " + (ceats) + " seats")
        }
    }

    const paymentFunction = (e) => {
        var currentDate = new Date()
        var day = currentDate.getDate()
        var month = currentDate.getMonth() + 1
        var fullyear = currentDate.getFullYear()
        var fulldate = day + "-0" + month + "-" + fullyear;
        e.preventDefault();
        var options = {
            key: "rzp_test_xz4tqVIIc6MRSi", // Enter the Key ID generated from the Dashboard
            key_secret: "7kMiCxUxaQrhuPQ7WJFs8AKn",
            amount: ('ticketcost' * 100) * ceats, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
            currency: "INR",
            name: "AK CINEMAS ",
            description: 'moviename',
            image: 'movieimage',
            handler: function (response) {
                //alert(response.razorpay_payment_id);
                //alert(response.razorpay_order_id);
                //alert(response.razorpay_signature)
                //alert("working");
                fire.firestore().collection("Bookings").add({
                    currentdate: fulldate,
                    username: 'username',
                    email: 'email',
                    mobile: 'mobile',
                    bookingdate: 'bookingdate',
                    moviename: 'moviename',
                    moviewatchers: name,
                    totalceats: ceats,
                    ceatnames: allSeatarray,
                    totalcost: 'ticketcost' * ceats,
                }).then(() => {
                    fire.firestore().collection("movieceats").add({
                        bookingdate: 'bookingdate',
                        moviename: moviename,
                        ceatnames: allSeatarray,
                    });
                    alert("Your Booking Was Successfull");
                    history.push("/success")
                }).catch((err) => console.log(err));

            },
            prefill: {
                name: username,
                email: email,
                contact: mobile
            },
            notes: {
                address: "Razorpay Corporate Office"
            },
            theme: {
                color: "#3399cc"
            }
        };
        var pay = new window.Razorpay(options);
        pay.open();
    }


    useEffect(() => {
        $(".seatStructure *").prop("disabled", true);
        $(".displayerBoxes *").prop("disabled", true);
        $(".pay-btn").hide();
        $(".confirm-selection").hide();

        //$(".booking-pdf").hide();



    }, [])
    return (
        <div class="form-container sign-in-container" className="ticket-booking" >
            <form className="ceat-pick" style={{ background: '#f6f5f7', marginTop: "32%" }}>
                <h1 className="title">Pick Seats</h1>
                <span className="sub-title">One Ticket Cost : 500</span>
                <br />
                <div className="inputForm">
                    <input type="text" placeholder="Username" value={name} onChange={(e) => setname(e.target.value)} />
                    <input type="number" placeholder="Enter Number Of Seats" value={ceats} onChange={(e) => setceats(e.target.value)} />
                    <input type="button" value="Pick Cetas" className="pick-ceats" onClick={startSelect} />
                </div>

                <div class="seatStructure">
                    <center>
                        <p id="notification"></p>
                        <table id="seatsBlock" style={{ marginLeft: "15%" }}>

                            <tr>
                                <td colspan="14"><div class="screen" style={{
                                    width: '100%',
                                    height: '20px',
                                    background: '#ff4b2b',
                                    color: '#fff',
                                    lineHeight: '20px',
                                    fontSize: '15px'
                                }}>MATATU SEATS STRUCTURE</div></td>
                                <td rowspan="20">
                                    <div class="smallBox greenBox" style={{ width: 'max-content' }}> Selected Seat</div> <br />
                                    <div class="smallBox redBox" style={{ width: 'max-content' }}> Reserved Seat</div><br />
                                    <div class="smallBox emptyBox" style={{ width: 'max-content' }}> Empty Seat</div><br />
                                </td>

                                <br />
                            </tr>
                            <tr>
                                <td></td>
                                <td>1</td>
                                <td>2</td>
                                <td>3</td>
                                <td>4</td>
                            </tr>
                            <tr>
                                <td>A</td>
                                {/* <td><input type="checkbox" class="seats" value="A1" id="A1" /></td> */}
                                <td>X</td>
                                <td><input type="checkbox" class="seats" value="A2" id="A2" /></td>
                                <td><input type="checkbox" class="seats" value="A3" id="A3" /></td>
                                <td><input type="checkbox" class="seats" value="A4" id="A4" /></td>
                            </tr>
                            <tr>
                                <td>B</td>
                                <td><input type="checkbox" class="seats" value="B1" /></td>
                                <td><input type="checkbox" class="seats" value="B2" /></td>
                                <td><input type="checkbox" class="seats" value="B3" /></td>
                                <td><input type="checkbox" class="seats" value="B4" /></td>
                            </tr>
                            <tr>
                                <td>C</td>
                                <td><input type="checkbox" class="seats" value="C1" /></td>
                                <td><input type="checkbox" class="seats" value="C2" /></td>
                                <td><input type="checkbox" class="seats" value="C3" /></td>
                                <td><input type="checkbox" class="seats" value="C4" /></td>
                            </tr>
                            
                        </table>
                        <br /><input type="button" value="Confirm Selection" className="confirm-selection" id="con-select" onClick={confirmSelection} onclick="updateTextArea()" />
                    </center>
                </div>
                <br /><br />
                <div class="displayerBoxes">
                    <center>
                        <table class="Displaytable" style={{ marginLeft: 'auto', marginRight: 'auto' }}>
                            <tr>
                                <th>Name</th>
                                <th>Number of Seats</th>
                                <th>Seats</th>
                            </tr>
                            <tr>
                                <td><textarea id="nameDisplay"></textarea></td>
                                <td><textarea id="NumberDisplay"></textarea></td>
                                <td><textarea id="seatsDisplay"></textarea></td>
                            </tr>
                        </table>
                    </center>

                </div>
            </form>

            <br />
            <button className="pay-btn" style={{ marginLeft: "39%" }} onClick={paymentFunction}>Pay Now</button>
        </div>
    )
}
