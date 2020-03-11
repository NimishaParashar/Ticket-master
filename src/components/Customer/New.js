import React from 'react'
import CustomerForm from './Form'
import {connect} from 'react-redux'
import {startAddCustomer} from '../../actions/customersAction'


function CustomerNew(props){
    const handleSubmit=(formData)=>{
        const redirect=()=>props.history.push('/customers')
 props.dispatch(startAddCustomer(formData,redirect))

    }
    return(<div>Customer new
        <CustomerForm handleSubmit={handleSubmit}/>
    </div>)
}

export default connect()(CustomerNew)