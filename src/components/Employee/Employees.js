import React from 'react'
import {connect} from 'react-redux'
import {Link,withRouter} from 'react-router-dom'
import {startRemoveEmployee} from '../../actions/employeeAction'


function EmployeesList(props){
    
    const handleRemove=(id)=>{
        console.log("id is"+ id)
        props.dispatch(startRemoveEmployee(id))
    }

    const handleShow=(id)=>{
          props.history.push(`/employees/${id}`)
    }
    return (<div>
      
        <h1>Employees-{props.employees.length}</h1>
        
    <Link to="/employees/new">Add Employee</Link>
   
    {props.employees.length&& props.departments.length&&
    <table border="2">
        <thead>
<tr>
   
    <th>Name</th>
    <th>Email</th>
    <th>Mobile</th>
    <th>Department</th>
    <th>Actions</th>
    <th>Remove</th>
</tr>
        </thead>
        <tbody>
            {props.employees.length&& props.departments.length==0?<h1>Loading</h1>: props.employees.map(employee=>{
        
 
        return (<tr key={employee._id}>
            <td>{employee.name?employee.name:''}</td>
            <td>{employee.email?employee.email:''}</td>
            <td>{employee.mobile?employee.mobile:''}</td>
    <td>{(props.departments.find(depart=>depart._id==employee.department._id))?(props.departments.find(depart=>depart._id==employee.department._id)).name || (props.departments.find(depart=>depart._id==employee.department)).name:''}</td> 
    <td><button onClick={()=>{handleShow(employee._id)}}>Show</button></td>
    <td><button onClick={()=>{handleRemove(employee._id)}}>Remove</button></td>

         
        </tr>)
    })}


        
        </tbody>
    </table>
}
    </div>)
}

const mapStateToProps=(state,props)=>{
    return {
        employees:state.employees,
        departments:state.departments
    }
}
export default connect(mapStateToProps)(EmployeesList)