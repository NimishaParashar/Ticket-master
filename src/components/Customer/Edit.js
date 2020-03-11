import React from 'react'
import CustomerForm from './Form'
import {connect} from 'react-redux'
import {startUpdateCustomer} from '../../actions/customersAction'


function CustomerEdit(props){
    const handleSubmit=(formData)=>{
        const redirect=()=>props.history.push('/customers')
        const id=props.match.params.id
        props.dispatch(startUpdateCustomer(formData,id,redirect))
    }
    return(<div><h1>Customer Edit</h1>

        <CustomerForm handleSubmit={handleSubmit}/>
    </div>)
}

export default connect()(CustomerEdit)