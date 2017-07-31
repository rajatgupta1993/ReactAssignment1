/**
 * Created by RAGU on 31-07-2017.
 */
import React from "react"

export default class IncrementDecrement extends React.Component {

    constructor(props) {
        super(props)

        this.state={
            value:0
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
            <div style={{display: 'block',background: '#fff',padding:10 ,width:'100%' , height:'100%'}}>

            <p style={{ marginLeft: '25px', fontSize:'20px'}}> {this.state.value}</p>

            <div style={{display: 'flex' }}>
                  <img src="add.png" width="20" height="20" alt="increment"
                       onClick={this.incrementValue}/>

                  <img style={{marginLeft:'20px'}} src="subtract.png" width="20" height="20" alt="decrement"
                  onClick={this.decrementValue}/>
            </div>
            </div>

        );
    }
}