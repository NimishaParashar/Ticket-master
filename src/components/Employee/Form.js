import React from 'react'
import {connect} from 'react-redux'
import {startAddEmployees} from '../../actions/employeeAction'
import {withRouter} from 'react-router-dom'

class EmployeeForm extends React.Component{
    constructor(props){
        super(props)
        this.state={
  name:props.employee?props.employee.name:'',
  email:props.employee?props.employee.email:'',
  mobile:props.employee?props.employee.mobile:'',
  department:''
// department:props.employee?(props.departments.find(department=>department._id==props.employee.department._id)).name:''
        }
    }
    handleSubmit=(e)=>{
        e.preventDefault()
        const formData={
            name:this.state.name,
            email:this.state.email,
            mobile:this.state.mobile,
            department:this.state.department
        }
        
     //   const redirect=()=>this.props.history.push('/employees')
       // this.props.dispatch(startAddEmployees(formData,redirect))
       this.props.handleSubmit(formData)
        console.log(formData)
        
    }
    handleDepartment=(e)=>{
     const department=e.target.value
        this.setState({department})
    }
    handleChange=(e)=>{
this.setState({
    [e.target.name]:e.target.value
})
    }
    render(){
        console.log("department",this.state.department)
        return(<div>

            <form onSubmit={this.handleSubmit}>
                <label>Name</label>
                <input type="text" name="name" value={this.state.name} onChange={this.handleChange} />
                <br/>
                <label>Email</label>
                <input type="text" name="email" value={this.state.email} onChange={this.handleChange} />
                <br/>
                <label>Mobile</label>
                <input type="text" name="mobile" value={this.state.mobile} onChange={this.handleChange} />
                <br/>
                
              {  console.log("departmnt"+this.state.department)}
                <select name="department" id = "dropdown" value={this.state.department} onChange={this.handleDepartment}>
                <option key={1} value={1} >{"select"}</option>

                    {this.props.departments.map(department=>
                  
                    <option key={department._id} value={department._id} >{department.name}</option>)}
                </select>
                <br/>
                <input type="submit"/>
            </form>
        </div>)
    }
}
const mapStateToProps=(state,props)=>{
    return{
        departments:state.departments,
        employee:state.employees.find(employee=>employee._id==props.match.params.id)
    }
}
export default withRouter(connect(mapStateToProps)(EmployeeForm))