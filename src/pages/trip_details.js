import React from 'react'
import '../trip_details.css';


export const TripDetails = () => {

    return (
        
        <div>
            <br /><br />
            <div className="card" style={{ width: "70%", marginLeft: "16%", background: "lightpink" }}>
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
    )
}
