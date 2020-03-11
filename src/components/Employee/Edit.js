import React from 'react'
import EmployeeForm from '../Employee/Form'
import {connect} from 'react-redux'
import {startUpdateEmployee} from '../../actions/employeeAction'
function EditEmployee(props){

    const handleSubmit=(formData)=>{
        const redirect=()=>props.history.push('/employees')
        const id=props.match.params.id
props.dispatch(startUpdateEmployee(formData,id,redirect))
    }
    return(<div>
        <h1>Edit Page
            
        </h1>
    <EmployeeForm handleSubmit={handleSubmit} />
    </div>)
}

export default connect()(EditEmployee)