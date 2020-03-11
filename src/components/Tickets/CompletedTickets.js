import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {startRemoveTickets,startUpdateStatus} from '../../actions/ticketsAction'

function CompletedTickets(props){
    const handleShow=(id)=>{
        props.history.push(`/tickets/${id}`)
   }
   const handleRemove=(id)=>{
console.log(id)

props.dispatch(startRemoveTickets(id))
   }
    const handleClick=()=>{
        console.log("pending")
    }
    const handleCompleted=()=>{
        console.log('completed')
    }
    const calculate=()=>{
        return  props.tickets.filter(ticket=>{
              return ticket.isResolved
          }).length/props.tickets.length*100
    }
    const handleCheck=(ticket,id)=>{
        ticket.isResolved=!ticket.isResolved
          props.dispatch(startUpdateStatus(ticket,id))
         console.log("check ka data"+ticket)
    }
    return(<div>


{props.tickets.length?(
<div>
<table border="2">
<thead>
<tr>
<th>Code-No</th>
<th>Customer</th>
<th>Department</th>
<th>Employees</th>
<th>Message</th>
<th>Priority</th>
<th>Actions</th>
<th>Remove</th>
<th>Complete</th>
</tr>
</thead>
<tbody>


{props.tickets.map(ticket=>{
return (<tr key={ticket._id}>
<td>{ticket.code}</td>



{(props.customers.find(custom=>{
    return custom._id==ticket.customer
}))?<td>{(props.customers.find(custom=>{
    return custom._id==ticket.customer
})).name }</td>:(<td>-----</td>)}

{(props.departments.find(depart=>{
    return depart._id==ticket.department
}))?(<td>{(props.departments.find(depart=>{
    return depart._id==ticket.department
})).name }</td>):(<td>-----</td>)}

   
<td>{<ul>
    {props.employees.map(employ=>{
   return <li>{employ._id}</li>
    })}
    
    
    </ul>}</td>
<td>{ticket.message}</td>
<td>{ticket.priority}</td>
    <td><button  onClick={()=>handleShow(ticket._id)}>Show</button></td>
    <td><button onClick={()=>handleRemove(ticket._id)}>Remove</button></td>
    <td><input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" checked={ticket.isResolved} onChange={()=>handleCheck(ticket,ticket._id)}/></td>
</tr>)
})}
</tbody>

</table>
<progress value={calculate()} max="100" />
</div>
):(<div>
    Loading.....!!!!!!!!!!!
</div>)}

<label><Link to="/tickets/new">Add Ticket</Link></label>
    </div>)
}
const mapStateToProps=(state)=>{
    return {
        tickets:state.tickets,
        
        customers:state.customers,
        departments:state.departments,
        employees:state.employees
    }
}
    
export default CompletedTickets