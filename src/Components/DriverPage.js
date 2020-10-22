import React from 'react'
import {Link} from 'react-router-dom'
import {Driver} from './Driver'

export const DriverPage = props => {
  const driverId = props.match.params.driverId
  const driver = props.driversList && props.driversList.find(driver => driverId === driver.driverId)
  return (
    <>
      {driver &&
        <div className='DriverPage'>
          <Link to={`/`}>
              <span className="badge badge-dark m-2 p-2"><bold>НАЗАД</bold></span>
          </Link>
          <Driver driver={driver}/>
        </div>
      }
    </>
  )
}