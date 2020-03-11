import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {startRemoveDepartment} from '../../actions/departmentAction'
import Swal from 'sweetalert2'

function DepartmentList(props){
    const handleRemove=(id)=>{
        
        props.dispatch(startRemoveDepartment(id))
    }
    return (<div>
<h1>Departments-{props.departments.length}</h1>
<ul>
    {props.departments.map(department=>{
        return <li key={department._id}><Link to={`/departments/${department._id}`}>{department.name}</Link>
        <button onClick={()=>{
handleRemove(department._id)
        }}>Remove</button>
        </li>
    })}
</ul>
<label><Link to={`/departments/new`}>Add Departments</Link></label>
    </div>)
}

const mapStateToProps=(state)=>{
    return {
        departments:state.departments
    }
}
export default connect(mapStateToProps)(DepartmentList)