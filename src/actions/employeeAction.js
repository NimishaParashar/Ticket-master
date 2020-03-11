import axios from '../config/axios'

 export const startGetEmployees=()=>{
    return (dispatch)=>{
        axios.get('/employees',{
            headers:{
                'x-auth':localStorage.getItem('authToken')
            }
        }).then(response=>{
            console.log("response is"+response.data)
            dispatch(getEmployees(response.data))
        }).catch(err=>{

            console.log(err)
        })

    }
}

export const getEmployees=(employees)=>{
    return {
        type:'GET_EMPLOYEES',payload:employees
    }
}

export const startAddEmployees=(formData,redirect)=>{
    return(dispatch)=>{
        axios.post('/employees',formData,{
            headers:{
                'x-auth':localStorage.getItem('authToken')
            }
        }).then(response=>{
            console.log(response.data)
            dispatch(addEmployees(response.data))
        redirect()
            
        }).catch(err=>{
            console.log(err)
        })
    }
}

export const addEmployees=(employees)=>{
return{ type:'ADD_EMPLOYEE',payload:employees}
}

export const startRemoveEmployee=(id)=>{
    console.log('id i m getting'+ id)
    return(dispatch)=>{
        axios.delete(`/employees/${id}`,{
            headers:{
                'x-auth':localStorage.getItem('authToken')
            }
        }).then(response=>{

            console.log("delete ka response"+response.data)
            const employee=response.data

            dispatch(removeEmployee(employee._id))
        }).catch(err=>{
            console.log(err)
        })
    }
}

export const removeEmployee=(id)=>{
    return{
        type:'REMOVE_EMPLOYEE',payload:id
    }
}

export const startUpdateEmployee=(formData,id,redirect)=>
{
return (dispatch)=>{
    axios.put(`/employees/${id}`,formData,{
        headers:{
            'x-auth':localStorage.getItem('authToken')
        }
    }).then(response=>{
        console.log("update response"+response.data)
        const employee=response.data
        dispatch(updateEmployee(employee))
        redirect()
    }).catch(err=>{
        console.log(err)
    })
}
}

export const updateEmployee=(employee)=>{
    return {
        type:'UPDATE_EMPLOYEE',payload:employee
    }
}

