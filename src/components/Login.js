import React from 'react'
import {connect} from 'react-redux'
import {startLogin} from '../actions/userAction'

class Login extends React.Component{
    constructor(){
        super()
        this.state={
            email:'',
            password:''
        }
    }
    handleEmail=(e)=>{
        const email=e.target.value
        this.setState({email})
    }
    handlePassword=(e)=>{
        const password=e.target.value
        this.setState({password})
    }
    handleSubmit=(e)=>{
        e.preventDefault()
        const formData={
            email:this.state.email,
            password:this.state.password
        }
        console.log(formData)
        const redirect=()=>{
            return this.props.history.push('/')
        }
        this.props.dispatch(startLogin(formData,redirect))
    }
    render(){
        return(<div>
<form onSubmit={this.handleSubmit}>
    
    <input type="text" placeholder="Enter Email" value={this.state.email} onChange={this.handleEmail} />
    <br/>
    <input type="password" placeholder="Enter Password" value={this.state.password} onChange={this.handlePassword}/>
    <br/>
    <input type="submit" />

</form>
        </div>)
    }
}

export default connect()(Login)