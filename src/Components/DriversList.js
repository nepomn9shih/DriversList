import React, {useState} from 'react'
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

//start search  
let [filtered, setFiltered] = useState(driversList)

const onTextChanged = (e) => {
    let text = e.target.value.trim(); 
    let filteredList = driversList.filter((driver) => {return (
        (driver.nationality.toLowerCase().search(text) !== -1) || 
        (driver.givenName.toLowerCase().search(text) !== -1) ||
        (driver.familyName.toLowerCase().search(text) !== -1) 
        )})
    setFiltered(filteredList)
}   
//end search

  return (
    <div>
        <div className="input-group m-2 w-25">
            <div className="input-group-prepend">
                <span role="img" className="input-group-text" aria-label="">&#128269;</span>
                
            </div>
            <input type="text" className="form-control" placeholder="Поиск" onChange={onTextChanged} />
        </div>
      {filtered && filtered.map((driver, index) => (
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
