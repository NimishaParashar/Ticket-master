import React from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {findCustomer} from '../../selectors/customerSelector'
class CustomerForm extends React.Component{

    constructor(props){
        super(props)
        console.log("class ka console",props)
        this.state={
         name:props.customer?props.customer.name:'',
         email:props.customer?props.customer.email:'',
         mobile:props.customer?props.customer.mobile:''
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
            name:this.state.name,
            email:this.state.email,
            mobile:this.state.mobile
        }
        console.log(formData)
console.log("value bata"+ this.props)
this.props.handleSubmit(formData)
    }
    render(){
        return(<div>

           <form onSubmit={this.handleSubmit}>
               <label htmlFor="name">Name</label>
               <input type="text" name="name"id="name" placeholder="Enter name" value={this.state.name} onChange={this.handleChange} />
<br/>
               <label htmlFor="email">Email</label>
               <input type="text"  name="email" id="email" placeholder="Enter email" value={this.state.email} onChange={this.handleChange} />
               <br/>
               <label htmlFor="mobile">Mobile</label>
               <input type="text" name="mobile" id="mobile" placeholder="Enter mobile" value={this.state.mobile} onChange={this.handleChange} />
               <br/>
           <input type="submit"/>

           </form>
        </div>)
    }
    
}
const mapStateToProps=(state,props)=>{
    console.log('yhe props'+ props)
    const id=props.match.params.id
    
    return{
        customer:findCustomer(state.customers,id)
    }
}



export default withRouter(connect(mapStateToProps)(CustomerForm))