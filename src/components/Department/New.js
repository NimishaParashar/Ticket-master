import React from 'react'
import DepartmentForm from '../Department/Form'
import {startAddDepartment} from '../../actions/departmentAction'
import {connect} from 'react-redux'


function NewDepartment(props){
const handleSubmit=(formData)=>{
    const redirect=()=>props.history.push('/department')
    props.dispatch(startAddDepartment(formData,redirect))
}
    
    return (<div><h1>Department Details</h1>
    <DepartmentForm  handleSubmit={handleSubmit}/>
    </div>)
}


export default connect()(NewDepartment)