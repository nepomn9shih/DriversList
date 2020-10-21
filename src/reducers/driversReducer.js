import { 
    FETCH_DRIVERS_START,
    FETCH_DRIVERS_SUCCESS,
    FETCH_DRIVERS_FAILURE
  } from '../actionTypes.js'

export const initialState = {
    racersList:[],
    loading:false,
    error:null
}

export function rootReducer(state = initialState, {type, payload}) {
    switch (type) {
        case FETCH_DRIVERS_START:
            return {...state, loading:true}
        case FETCH_DRIVERS_SUCCESS:
            return {
                ...state,
                racersList:payload,
                loading:false
            };
        case FETCH_DRIVERS_FAILURE:
            return {
                ...state,
                error:payload,
                loading:false
            };
        default:
            return state
    }
  }