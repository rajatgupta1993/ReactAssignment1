/**
 * Created by RAGU on 28-07-2017.
 */
import React from "react"
import ReactDOM from "react-dom"
import Header from "./components/Header.js"
import Footer from "./components/Footer.js"
import Body from "./components/Body"
import { BrowserRouter as Router,} from 'react-router-dom'
import {Provider} from 'react-redux'
import {combineReducers, createStore,applyMiddleware} from 'redux'
import {default as myReducers} from './reducers/baseReducer'
import  App from './App'
import {logger,crashReporter} from './common/Middleware'


const reducers= combineReducers({
    state: myReducers

});

const store= createStore(reducers,
applyMiddleware(logger,crashReporter));
/*


 ReactDOM.render(
 <Router>

 <div>
 <ul>
 <li> <Link to="/"> Home </Link> </li>
 <li> <Link to="/about"> About </Link> </li>
 <li> <Link to="/Topics"> Topics </Link> </li>
 </ul>
 <hr />

 <Route exact path="/" component={FindDomElementUsingRefs} />
 <Route path="/about" component={ValidationExample} />
 <Route path="/Topics" component={Page} />

 </div>

 </Router>, document.getElementById('container'));*/
class A extends  React.Component{

    render () {

        return (
            <Router>
                <div >
                    <Provider store={store}>
                      <App/>
                   </Provider>
                </div>
            </Router>
        );
    }
}


ReactDOM.render( <A/>, document.getElementById('container'));
