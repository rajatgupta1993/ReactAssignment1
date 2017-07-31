/**
 * Created by RAGU on 31-07-2017.
 */
import * as action from '../actions/action'

import * as actionTypes from '../constants/actionType'
const initialState={

    counter: 99
}


export default function baseReducer(state = initialState , action){

    switch (action.type){

        case actionTypes.INCREMENT_COUNTER:

            console.log( `PREVIOUS STATE  IN INCREMENT IS `);
            console.log(state);
            return{
                ...state,
                counter:++state.counter
            };

        case actionTypes.DECREMENT_COUNTER:
            console.log(state);

            //throw("exception");
            return {
                ...state,
                counter:--state.counter
            };

        default:
            console.log(state);
            return initialState;
    }
}