import React from 'react';
import Driver from './Driver'

function DriversList(){
    
    const [drivers, setDrivers] = React.useState([]);
 
    React.useEffect(() => {
        fetch('http://ergast.com/api/f1/drivers.json')
        .then(response => response.json())
        .then(result => setDrivers(result.MRData.DriverTable.Drivers))
      }, []);
    
    return (
        <div>
        {drivers.map((driver, index) => {
            return <Driver driverN={driver} key={driver.driverId} index={index+1}/>
        })}
        </div>
    )
}

export default DriversList