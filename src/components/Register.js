import React from 'react'
import {connect} from 'react-redux'
import {startRegister} from '../actions/userAction'


class Register extends React.Component{
    constructor(){
        super()
        this.state={
            username:'',
            email:'',
            password:''

        }
    }

    handleUsername=(e)=>{
const username=e.target.value
this.setState({username})
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
                       username:this.state.username,
                       email:this.state.email,
                       password:this.state.password
                   }
                   console.log(formData)
                   const redirect=()=>{
                      return  this.props.history.push('/users/login')
                   }
                   this.props.dispatch(startRegister(formData,redirect))
                 
                    }
   render(){
       return(<div>
           <form onSubmit={this.handleSubmit}>
               <input type="text" placeholder="Username" value={this.state.username} onChange={this.handleUsername} />
               <br/>
               <input type="text" placeholder="Email" value={this.state.email} onChange={this.handleEmail}/>
               <br/>
               <input type="password" placeholder="Password" value={this.state.password} onChange={this.handlePassword} />
               <br/>
            <input type="submit" />
           </form>
       </div>)
   }
}
export default connect()(Register)