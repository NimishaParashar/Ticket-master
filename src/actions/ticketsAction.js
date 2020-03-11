import axios from "../config/axios"

export const startGetTickets=()=>{
return(dispatch)=>{
axios.get('/tickets',{
    headers:{
        'x-auth':localStorage.getItem('authToken')
    }
}).then(response=>{
    console.log(response.data)
    dispatch(getTickets(response.data))
}).catch(err=>{
    console.log(err)
})
}
}


 const getTickets=(tickets)=>{
    return{
        type:'SET_TICKETS', payload:tickets
    }
}

export const startAddTickets=(fromData,redirect)=>{
    return (dispatch)=>{
        axios.post('/tickets',fromData,{
            headers:{
                'x-auth':localStorage.getItem('authToken')
            }
        }).then(response=>{
            console.log(response.data)
            dispatch(addTickets(response.data))
            redirect()
        }).catch(err=>{
            console.log(err)
        })
    }
}

const addTickets=(tickets)=>{
    return {
        type:'ADD_TICKETS',payload:tickets
    }
}

export const startRemoveTickets=(id)=>{
    return(dispatch)=>{
        axios.delete(`/tickets/${id}`,{
            headers:{
                'x-auth':localStorage.getItem('authToken')
            }
        }).then(response=>{
            console.log(response.data)
            dispatch(removeTicket(response.data))
           
        }).catch(err=>{
            console.log(err)
        })
    }
}

const removeTicket=(ticket)=>{
    return{
        type:'REMOVE_TICKET',payload:ticket
    }

}
export const startUpdateStatus=(formData,id)=>{
   return(dispatch)=>{
       axios.put(`/tickets/${id}`,formData,{
           headers:{
               'x-auth':localStorage.getItem('authToken')
           }
       }).then(response=>{
           console.log(response.data)
           dispatch(updateStatus(response.data))
       }).catch(err=>{
           console.log(err)
       })
   }
}

const updateStatus=(ticket)=>{
    return {
        type:'UPDATE_TICKET',payload:ticket
    }
}