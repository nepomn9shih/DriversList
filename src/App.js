import React, { useState, useEffect, useReducer }  from 'react'
import {Route, Switch} from 'react-router-dom';
import {DriversList} from './Components/DriversList';
import PageHeader from './Components/PageHeader'
import {DriverPage} from './Components/DriverPage'
import { 
  FETCH_DRIVERS_START,
  FETCH_DRIVERS_SUCCESS,
  FETCH_DRIVERS_FAILURE
} from './actionTypes'
import {initialState, rootReducer} from './reducers/driversReducer'

export default function App() {
  const [activePage, handlePageChange] = useState(1)
  const [state, dispatch] = useReducer(rootReducer, initialState)

  async function fetchDrivers(offset) {
    dispatch({type: FETCH_DRIVERS_START})
    const res = await fetch(`http://ergast.com/api/f1/drivers.json${offset ? `?offset=${offset}` : ''}`);
    res
      .json()
      .then(res => {
        dispatch({type: FETCH_DRIVERS_SUCCESS, payload: res.MRData})
      })
      .catch(err => {
        dispatch({type: FETCH_DRIVERS_FAILURE ,payload: err})
      });
  }

  useEffect(() => {
    fetchDrivers()
  }, []);

  function handlePageChangeF(activePage) {
    const offset = +activePage === 1 
      ? 0 
      : (+activePage * 30) - 30
      fetchDrivers(offset)
    handlePageChange(activePage)
  }

  return (
    <div className="App">
      <header className="App-header">
      </header>
      <PageHeader />
      {state.loading 
          ? <span>Loading...</span> 
          : state.error !== null
          ? <span>Error: {state.error}</span> 
          : <Switch>
              <Route
                path="/"
                exact
                component={props =>
                  <DriversList 
                  {...props} 
                    driversList={state.racersList.DriverTable && state.racersList.DriverTable.Drivers}
                    driversListTotal={state.racersList.total}
                    driversListLimit={state.racersList.limit}
                    handlePageChange={handlePageChangeF}
                    activePage={activePage} 
                  />
                }
              />
              <Route 
                exact
                path="/driver/:driverId" 
                component={props => 
                  <DriverPage 
                    {...props} 
                    driversList={state.racersList.DriverTable && state.racersList.DriverTable.Drivers}
                  />
                }
              />
            </Switch>
        }
    </div>
  )
}