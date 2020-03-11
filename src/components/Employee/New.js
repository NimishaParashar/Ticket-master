import React from 'react'
import EmployeeForm from '../Employee/Form'
import {connect} from 'react-redux'
import {startAddEmployees} from '../../actions/employeeAction'
function NewEmployee(props){
    const handleSubmit=(formData)=>{
    const redirect=()=>props.history.push('/employees')
        props.dispatch(startAddEmployees(formData,redirect))
    }
    return(<div>

        <EmployeeForm handleSubmit={handleSubmit}/>
    </div>)
}

export default connect()(NewEmployee)