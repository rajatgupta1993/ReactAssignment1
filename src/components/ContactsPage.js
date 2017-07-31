/**
 * Created by RAGU on 28-07-2017.
 */
import React from "react"

export default class ContactsPage extends React.Component{

    constructor(props){
        super(props);
        // this.myButton=this.props.myButton;
        this.state={
            companyName:'',
            empName:'',
            visibility:false
        }

        this.updateCompany=this.updateCompany.bind(this);
        this.updateEmpName=this.updateEmpName.bind(this);
        this.showAlert=this.showAlert.bind(this);
    }

    updateCompany(e) {
        this.setState({ companyName: e.target.value });
    }

    updateEmpName(e) {
        this.setState({ empName: e.target.value });
    }

    showAlert(){
        this.setState({visibility:true});
        alert("form submitted");

    }



    render (){

        return (
            <div style={{display:'block', marginTop:'20px'}}>



                    <form>
                        <label >
                            <span>Company Name</span>
                            <input id="companyText" style={{marginLeft:'10px'}}
                                   type="text"
                                   value={this.state.companyName}
                                   onChange={this.updateCompany}/>
                        </label>

                        <br/>
                        <br/>
                        <br/>
                        <label>
                            <span>Employee Name</span>
                            <input id="empName" style={{marginLeft:'10px'}}
                                   type="text"
                                   value={this.state.empName}
                                   onChange={this.updateEmpName}/>
                        </label>
                </form>



                 <input style={{color: '#000', textAlign : 'center',marginLeft:'100px', marginTop: '30px' }}
                        type ="submit" label="Submit" onClick={this.showAlert} />

                <div style={{display: this.state.visibility?'block': 'none'}}>
                    <p> company name is {this.state.companyName}</p>
                    <p> Employee name is {this.state.empName}</p>
                </div>
            </div>


        )
    }
}
