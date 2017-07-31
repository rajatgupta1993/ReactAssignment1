/**
 * Created by RAGU on 31-07-2017.
 */

import * as types from '../constants/actionType'


export function incrementFunction(){

    return {

        type: types.INCREMENT_COUNTER,
        data: 'increment by 1'
    }
}

export function decrementFunction(){

    return {

        type: types.DECREMENT_COUNTER,
        data: 'decrement by 1'
    }
}


export function resetFunction(){

    return {

        type: types.RESET_COUNTER,
        data: 'Reset to default value'
    }
}
