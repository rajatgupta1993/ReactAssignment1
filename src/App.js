/**
 * Created by RAGU on 31-07-2017.
 */
/**
 * Created by RAGU on 28-07-2017.
 */
import React from "react"
import ReactDOM from "react-dom"
import Header from "./components/Header.js"
import Footer from "./components/Footer.js"
import Body from "./components/Body"
import { BrowserRouter as Router,} from 'react-router-dom'
import {connect} from 'react-redux';


const mapStateToProps= state=> {

    var data={
        counter:state.state.counter
    }
    return data;
}

 class App extends  React.Component{

    render () {

        return (
            <Router>
                <div >
                        <Header />
                        <Body/>
                        <Footer/>
                </div>
            </Router>
        );
    }
}

export default connect(mapStateToProps)(App)

