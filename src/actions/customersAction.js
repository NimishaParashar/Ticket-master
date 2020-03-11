import axios from "../config/axios"


export const startSetCustomers=()=>{
    return (dispatch)=>{
        axios.get('/customers',{
            headers:{
                'x-auth':localStorage.getItem('authToken')
            }
        }).then(response=>{
            const customers=response.data
            console.log("customers",response.data)
            dispatch(setCustomers(customers))
        }).catch(err=>{
            console.log(err)
        })
    }
}




export const setCustomers=(customers)=>{
    return {
        type:'SET_CUSTOMERS',payload:customers
    }
}

export const startAddCustomer=(formData,redirect)=>{
    return(dispatch)=>{
        axios.post('/customers',formData,{
            headers:{
                'x-auth':localStorage.getItem('authToken')
            }
        }).then(response=>{
            console.log(response.data)
            dispatch(addCustomer(response.data))
            redirect()
        }).catch(err=>{
console.log(err)
        })
    }
}

export const addCustomer=(customer)=>{
    return{
        type:'ADD_CUSTOMER',payload:customer
    }
}

export const startRemoveCustomer=(id)=>{
    return (dispatch)=>{
        axios.delete(`/customers/${id}`,{
            headers:{
                'x-auth':localStorage.getItem('authToken')
            }
        }).then(response=>{
            console.log(response.data)
            dispatch(removeCustomer(id))
        }).catch(err=>{
            console.log(err)
        })
    }
}
export const removeCustomer=(id)=>{
    return {
        type:'REMOVE_CUSTOMER',payload:id
    }
}

export const startUpdateCustomer=(formData,id,redirect)=>{
    return(dispatch)=>{
        axios.put( `/customers/${id}`,formData,{
            headers:{
                'x-auth':localStorage.getItem('authToken')
            }
        }).then(response=>{
console.log(response.data)
dispatch(updateCustomer(response.data))
redirect()
        }).catch(err=>{
            console.log(err)
        })
    }
}


export const updateCustomer=(customer)=>{
    return{
        type:'UPDATE_CUSTOMER',payload:customer
    }
}

 
