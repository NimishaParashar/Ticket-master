import React from 'react'
import {connect} from 'react-redux'
function Account(props){

    console.log("acoount",props)
    return (<div>
        <h1>My Account</h1>
        <h2>Username-{props.user.username}</h2>
        <h2>Username-{props.user.email}</h2>
    </div>)
}

const mapStateToProps=(state)=>{
    return {
        user:state.user
    }
}
export default connect(mapStateToProps)(Account)