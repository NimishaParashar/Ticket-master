import React from 'react'
import DepartmentForm from '../Department/Form'
import {connect} from 'react-redux'
import {startUpdateDepartment} from '../../actions/departmentAction'

function EditDepartment(props){
    const handleSubmit=(formData)=>{
        const redirect=()=>props.history.push('/department')
        const id=props.match.params.id
props.dispatch(startUpdateDepartment(formData,id,redirect))
    }
    return (<div>
       <DepartmentForm  handleSubmit={handleSubmit}/>
    </div>)
}

export default connect()(EditDepartment)