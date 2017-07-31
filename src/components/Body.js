/**
 * Created by RAGU on 28-07-2017.
 */
import React from "react"
import { Route } from 'react-router-dom'
import ContactsPage from "./ContactsPage"
import AboutPage from "./AboutPage"
import HomePage from "./HomePage"
import IncrementDecrement from './IncrementDecrement'

export default class Body extends React.Component {

    constructor(props) {
        super(props)

        this.state={
            value:2
        }

        this.incrementValue=this.incrementValue.bind(this);
        this.decrementValue=this.decrementValue.bind(this);
    }

    incrementValue(){
        this.setState({value: ++this.state.value});
    }
    decrementValue(){
        this.setState({value: --this.state.value});
    }

    render() {

        return (
                <div style={{width:'100%' , height:'100%'}}>

                    <Route exact path="/" component={HomePage } />
                    <Route path="/contacts" component={ContactsPage} />
                    <Route path="/about" component={AboutPage} />

                    <Route path="/increment" render={()=><IncrementDecrement value={this.state.value} onIncrement={this.incrementValue} onDecrement={this.decrementValue} />}/>

                </div>
        );
    }
}