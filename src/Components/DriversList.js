import React from 'react'
import {Driver} from './Driver'
import Pagination from 'react-js-pagination'

export const DriversList = props => {
  const {
    driversList,
    driversListTotal,
    driversListLimit,
    handlePageChange,
    activePage
  } = props
 
  return (
    <div>
      {driversList && driversList.map((driver, index) => (
        <Driver key={driver.driverId} driver={driver} index={index+1} activePage={activePage}/>
      ))}
      <div className="d-flex justify-content-center align-items-center mt-3 paginationStyle">
      <Pagination
        hideDisabled
        activePage={activePage}
        itemsCountPerPage={driversListLimit}
        totalItemsCount={driversListTotal}
        onChange={handlePageChange}
        itemClass="page-item"
        linkClass="page-link"
       />
      </div>
      
    </div>
  );
};
