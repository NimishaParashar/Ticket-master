import React from 'react'
import {connect} from 'react-redux'
import {startAddDepartment} from '../../actions/departmentAction'
import {withRouter} from 'react-router-dom'
class DepartmentForm extends React.Component{

    constructor(props){
        super(props)
        console.log("props ky hai",props)
        this.state={  
name:props.department? props.department.name: ''
        }
    }
    handleChange=(e)=>{
        this.setState({name:e.target.value})
    }
    handleSubmit=(e)=>{
        e.preventDefault()
        const formData={
            name:this.state.name
        }
        console.log(formData)
       // const redirect=this.props.history.push('/department')
       // this.props.dispatch(startAddDepartment(formData,redirect))
       this.props.handleSubmit(formData)
    }

    render(){
        return(<div>
            <form onSubmit={this.handleSubmit}>
            <label>Add Department</label>
            <input type="text" value={this.state.name} onChange={this.handleChange}/>
            <input type="submit" />
            </form>
        </div>)
    }
}

const mapStateToProps=(state,props)=>{
    
return{
    department:state.departments.find(department=>department._id==props.match.params.id)
}
}



export default withRouter( connect(mapStateToProps)(DepartmentForm))