/**
 * Created by RAGU on 28-07-2017.
 */
import React from "react"
import { Link,} from 'react-router-dom'


export default class HomePage extends React.Component {

    render() {

        return (

            <div>
                <div style={{display: 'block',background: '#fff',padding:10 ,width:'100%' , height:'100%'}}>

                    <p>  <Link to="/increment"> Incremental Example </Link></p>

                </div>

            </div>

        );
    }
}