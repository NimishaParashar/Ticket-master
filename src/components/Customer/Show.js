import React from 'react'
import {connect} from 'react-redux'
import {findCustomer} from '../../selectors/customerSelector'
import {Link}from 'react-router-dom'

function CustomerShow(props){
    console.log(props)

    const {_id,name,email,mobile}=props.customer ||{}
    return(<div>
        {props.customer?
        <div><h1>Name-{name}</h1>
<h3>Email-{email}</h3>
<h3>Mobile-{mobile}</h3>
<h3>Id-{_id}</h3>
<Link to={`/customers/edit/${_id}`}>Edit</Link>
</div>:(<div>...loading
    </div>)}

<Link to={'/customers'}>back</Link>
    </div>)
}
const mapStateToProps=(state,props)=>{
   const id=props.match.params.id
   
    return {
        customer:findCustomer(state.customers,id)
    }
}

export default connect(mapStateToProps)(CustomerShow)