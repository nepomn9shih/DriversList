import React from 'react';
import '../index.css';
import { Link } from 'react-router-dom';

function Driver({driverN, index}){
    
    return (
        <div className="driverTable">
            <div className="cellMin"><h3 className="article">№:</h3><h3>{index}</h3></div>
            <div className="cell"><h3 className="article">Name:</h3><h3 className="info"><Link to="/about">{driverN.givenName} {driverN.familyName}</Link></h3></div>
            <div className="cell"><h3 className="article">Date of birth:</h3><h3 className="info">{new Date(driverN.dateOfBirth).toDateString()}</h3></div>
            <div className="cell"><h3 className="article">Nationality:</h3><h3 className="info">{driverN.nationality}</h3></div>
            <div className="cellLong"><h3 className="article">Wikipedia link:</h3><h3 className="info"><a href='{driverN.url}'>{driverN.url}</a></h3></div>
        </div>
    )
}

export default Driver