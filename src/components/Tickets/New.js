import React from 'react'
import TicketForm from '../Tickets/Form'
import {connect} from 'react-redux'
import {startAddTickets} from '../../actions/ticketsAction'

function NewTicket(props){

    const handleSubmit=(formData)=>{
const redirect=()=>props.history.push('/tickets')
props.dispatch(startAddTickets(formData,redirect))
    }
    return (<div>
        <h1>Add Ticket</h1>
        <TicketForm  handleSubmit={handleSubmit}/>
    </div>)
}

export default connect()(NewTicket)





