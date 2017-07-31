/**
 * Created by RAGU on 28-07-2017.
 */
import React from 'react'
import PropTypes from 'prop-types'


function Page(props){

    return(
        <div style={{}}>

            <p> {props.match.params.topicId}</p>
        </div>
    )
}

export default Page;