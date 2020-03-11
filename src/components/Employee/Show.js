import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {findEmployee} from '../../selectors/employeeSelector'
function ShowEmployee(props){
    const {_id,name,email,mobile}=props.employee ||{}
    return(<div>

        <h1>Show Page-{name}</h1>
        <h2>Email-{email}</h2>
        <h2>Mobile-{mobile}</h2>
    <h2>{Object.keys(props.departments)?props.employee.department._id:''}</h2>
    <h2>{Object.keys(props.departments)?(props.departments.find(department=>department._id==props.employee.department._id)).name:''}</h2>
   
    <label><Link to={`/employees/edit/${_id}`}>Edit Employee</Link></label>
    </div>)
}

const mapStateToProps=(state,props)=>{
    const id=props.match.params.id
    console.log("id show"+ id)
    return{
        employee:findEmployee(state.employees,id),
        departments:state.departments


    }
}

export default connect(mapStateToProps)(ShowEmployee)