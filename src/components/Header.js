/**
 * Created by RAGU on 28-07-2017.
 */
import React from "react"
import {  Link, } from 'react-router-dom'
/*
import Test1 from "./ContactsPage"
import Test2 from "./AboutPage"
import Test3 from "./HomePage"*/

export default class Header extends React.Component {


    incrementValue(){
        this.setState({value: ++this.state.value});
    }

    decrementValue(){
        this.setState({value: --this.state.value});
    }



    render() {

        return (


                <div >
                    <div style={{ display: 'flex'}}>

                        <img src="reactLogo.png" width="50" height="50" alt="LOGO"/>

                        <div style={{display:'flex'}}>
                            <p style={{marginLeft:'20px'}}> <Link to="/"> Home </Link> </p>
                            <p style={{marginLeft:'20px'}}> <Link to="/about"> About </Link> </p>
                            <p style={{marginLeft:'20px'}}> <Link to="/contacts"> Contacts </Link> </p>
                        </div>


                    </div>
                     <hr/>

                </div>





    );
    }
    }