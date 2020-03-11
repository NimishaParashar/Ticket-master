import React from 'react'
import DepartmentForm from '../Department/Form'
import {connect} from 'react-redux'
import {startUpdateDepartment} from '../../actions/departmentAction'
import {Link} from 'react-router-dom'

function ShowDepartment(props){
// const handleSubmit=(formData)=>{
// const id=props.match.params.id
// const redirect=()=>props.history.push('/department')
// props.dispatch(startUpdateDepartment(formData,id,redirect))
// }
const _id=props.match.params.id
    
    return (<div><h1>Department Details</h1>
            <h2>{props.department.name}</h2>
            
            <label><Link to={`/departments/edit/${_id}`}>Edit</Link></label>
    </div>)

    
}
const mapStateToPrrops=(state,props)=>{
    return{
        department:state.departments.find(department=>department._id==props.match.params.id)
    }
}
export default connect(mapStateToPrrops)(ShowDepartment)