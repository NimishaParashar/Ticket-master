import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {startRemoveCustomer} from '../../actions/customersAction'

function CustomerList(props){
    const handleRemove=(id)=>{
        props.dispatch(startRemoveCustomer(id))
    }
    console.log("this is cumst list",props)
    return(<div>
        
        <h1>Customer List-{props.customers.length}</h1>
    <ul>
        {props.customers.map(customer=>{
            return <li key={customer._id}><Link to={`/customers/${customer._id}`}>{customer.name}</Link>
            <button onClick={()=>{
                handleRemove(customer._id)
            }}>Remove</button></li>
        })}
    </ul>
    <Link to={'/customers/new'}>Add Customer</Link>
    </div>)
}

const mapStateToProps=(state)=>{
    return {
        customers:state.customers
    }
}

export  default connect(mapStateToProps)(CustomerList)