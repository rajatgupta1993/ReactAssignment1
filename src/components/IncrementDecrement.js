/**
 * Created by RAGU on 31-07-2017.
 */
import React from "react"
import {incrementFunction, decrementFunction,resetFunction} from '../actions/action'
import {connect} from 'react-redux'

 export default class IncrementDecrement extends React.Component {

    constructor(props) {
        super(props)

      //  this.incrementFunction=this.incrementFunction.bind(this);
     //   this.decrementFunction=this.decrementFunction.bind(this);

    }

     /*incrementFunction(){

         this.props.incrementFunction();
     }*/

   /*  decrementFunction(){
         this.props.decrementFunction();
     }*/
    render() {
        console.log(this.props.state)
        return (
            <div style={{display: 'block',background: '#fff',padding:10 ,width:'100%' , height:'100%'}}>

            <p style={{ marginLeft: '25px', fontSize:'20px'}}> {this.props.counter}</p>

            <div style={{display: 'flex' }}>

                <p style={{marginLeft:'20px'}}  onClick={this.props.incrementFunction}> + </p>
                <p style={{marginLeft:'20px'}}  onClick={this.props.decrementFunction}> - </p>
            </div>
            </div>

        );
    }
}
