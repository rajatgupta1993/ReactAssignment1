/**
 * Created by RAGU on 28-07-2017.
 */
import React from "react"

export default class Footer extends React.Component {



    render() {

        return (
            <div style={{display: 'flex',background: '#333',padding:10 , position:'absolute', bottom:0,left:0,right:0 }}>

              <p style={{color: '#fff',width: '100%', textAlign : 'center', }}> THIS IS FOOTER</p>

            </div>

        );
    }
}