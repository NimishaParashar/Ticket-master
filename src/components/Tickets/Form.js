import React from 'react'
import {connect} from 'react-redux'
import {Multiselect} from 'multiselect-react-dropdown'

class TicketForm extends React.Component{
    constructor(props){
        super(props)
        this.state={
            code:'',
            customer:'',
            department:'',
            employees:'',
            message:'',
            priority:''
        }
    }
    
       
    handleChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    handleSubmit=(e)=>{
e.preventDefault()
const formData={
    code:this.state.code,
    customer:this.state.customer,
    department:this.state.department,
    employees:this.state.employees,
    message:this.state.message,
    priority:this.state.priority
}
this.props.handleSubmit(formData)

console.log(formData)

    }

    handleSelectChange=(e)=>{
const employees=e.target.selectedValues
console.log(e.target.displayValue )
this.setState({employees})
    }


    handleMultiselect= (e) =>{
       
        let selected = [...this.refs.select]
        .filter(option => option.selected)
        .map(option => option.value)

        console.log("show value"+selected)
    }

    onSelect=(selectedList, selectedItem) =>{
        console.log(selectedList+ selectedItem)
        this.setState({employees:selectedList})
    }
     
    onRemove=(selectedList, removedItem)=> {
        
    }
    handleRadio=(e)=>{
this.setState({priority:e.target.value})
    }

    render(){
        return (<div>
           
            <form onSubmit={this.handleSubmit}>
          <label>Code</label>
          <input type="text" value={this.state.code} name="code" onChange={this.handleChange} />
          <br/>
          <label>Customer</label>
         <select name="customer" id="dropdown" value={this.state.customer} onChange={this.handleChange} >
             <option key={1}> {"select"}</option>
             {this.props.customers.map(customer=>{
             return <option key={customer._id} value={customer._id}>{customer.name}</option>
             })}
         </select>
          <br/>
          <label>Department</label>
          <select name="department" id = "dropdown" value={this.state.department} onChange={this.handleChange}>
                <option key={1} value={1} >{"select"}</option>

                    {this.props.departments.map(department=>
                  
                    <option key={department._id} value={department._id} >{department.name}</option>)}
                </select>
                <br/>
          <label>Employees</label>
          <Multiselect
//options={this.state.options} // Options to display in the dropdown
options={this.props.employees.map(employee=>{
    return {name:employee.name,id:employee._id}
})}

ref={this.multiselectRef} onChange={this.handleMultiselect} 
selectedValues={this.state.selectedValue} // Preselected value to persist in dropdown
onSelect={this.onSelect} // Function will trigger on select event
onRemove={this.onRemove} // Function will trigger on remove event
displayValue="name" // Property name to display in the dropdown options

/>



          <br/>
          <label>Message</label>
          <input type="textarea" value={this.state.message} name="message" onChange={this.handleChange} />
          <br/>
          <label>Priority</label>
          
          <form name="priorityForm" >
  <input type="radio" name="High" value="High" checked={this.state.priority === "High"} 
                                       onChange={this.handleRadio} /> High
  <br/>
  <input type="radio" name="Medium" value="Medium" checked={this.state.priority === "Medium"} 
                                       onChange={this.handleRadio}  /> Medium
  <br/>
  <input type='radio' name="Low" value="Low" checked={this.state.priority === "Low"} 
                                       onChange={this.handleRadio} />Low
  <br/>
</form>
          <input type="submit"/>
            </form>
        </div>)
    }
}



const mapStateToProps=(state)=>{
    return {
        customers:state.customers,
        departments:state.departments,
        employees:state.employees
    }
}

export default connect(mapStateToProps)(TicketForm)