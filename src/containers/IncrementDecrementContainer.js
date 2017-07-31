/**
 * Created by RAGU on 31-07-2017.
 */
/**
 * Created by RAGU on 31-07-2017.
 */
import React from "react"
import {incrementFunction, decrementFunction,resetFunction} from '../actions/action'
import {connect} from 'react-redux';
import IncrementDecrement from '../components/IncrementDecrement'

class IncrementDecrementContainer extends React.Component {

    constructor(props) {
        super(props)

    }

    render() {
        console.log(this.props.state)
        return (


            <IncrementDecrement incrementFunction={this.props.incrementFunction} decrementFunction={this.props.decrementFunction } counter={this.props.data.counter} />

        );
    }
}

const mapStateToProps= (state)=> {

    var data={
        counter:state.state.counter,
        state:state
    }
    return data;
}

const mapDispatchToProps= (dispatch)=> {
    return {
        incrementFunction:()=> dispatch(incrementFunction()),
        decrementFunction:()=> dispatch(decrementFunction())
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(IncrementDecrement)