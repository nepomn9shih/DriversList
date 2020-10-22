import React from 'react';
import '../index.css';
import { Link } from 'react-router-dom';

export function Driver({driver, index, activePage}){
    let numberOfDriver = index + (activePage-1)*30
    return (
        <div className="row mx-2 flex-nowrap text-center card-group">
            <div className="card bg-warn col-1 mb-2">
                <h4 className="mt-4">{isNaN(numberOfDriver) ? '*' : numberOfDriver}</h4>
            </div>
            <div className="card col-2 mb-2">
                <h5 className="card bg-dark text-white">Name:</h5>
                <h5>
                <Link to={`/driver/${driver.driverId}`}>
                    {driver.givenName} {driver.familyName}
                </Link></h5></div>
            <div className="card col-2 mb-2">
                <h5 className="card bg-dark text-white">Date of birth:</h5>
                <h5 className="info">{new Date(driver.dateOfBirth).toDateString()}</h5>
            </div>
            <div className="card col-2 mb-2">
                <h5 className="card bg-dark text-white">Nationality:</h5>
                <h5 className="info">{driver.nationality}</h5>
            </div>
            <div className="card col-5 mb-2">
                <h5 className="card bg-dark text-white">Wikipedia link:</h5>
                <h5 className="info">
                    <a href={driver.url}>{driver.url}</a>
                </h5>
            </div>
        </div>
    )
}