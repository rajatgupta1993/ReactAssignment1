/**
 * Created by RAGU on 31-07-2017.
 */
const logger= store => next => action=> {
    console.log('dispatching', action);
    let result= next(action);
    console.log('next State', store.getState())
    return result
}

const crashReporter= store => next => action=> {
    try{
      return next(action)
    }catch(err){

        console.log("caught an exception", err);
        throw err
    }
}

export {logger,crashReporter};