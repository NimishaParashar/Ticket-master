import axios from '../config/axios'
import Swal from 'sweetalert2'

export const startSetDepartment=()=>{
    return(dispatch)=>{
        axios.get('/departments',{
            headers:{
                'x-auth':localStorage.getItem('authToken')
            }
        }).then(response=>{
            console.log(response.data)
            dispatch(setDepartment(response.data))
        }).catch(err=>{
            console.log(err)
        })
    }
}

export const setDepartment=(departments)=>{
    return {type:'SET_DEPARTMENT',payload:departments}
}

export const startAddDepartment=(formData,redirect)=>{
    return (dispatch)=>{
        axios.post('/departments',formData,{
            headers:{
                'x-auth':localStorage.getItem('authToken')
            }
        }).then(response=>{
            dispatch(addDepartment(response.data))
            console.log(response.data)
           // redirect()
           Swal.fire({
            title:'Successfully done',
            icon:'success'
        })
        }).catch(err=>{
          
            console.log(err)
        })
    }
}

export  const addDepartment=(department)=>{
    return {
        type:'ADD_DEPARTMENT',payload:department
    }
}
export const startRemoveDepartment=(id)=>{
return (dispatch)=>{
    axios.delete(`/departments/${id}`,{
        headers:{
            'x-auth':localStorage.getItem('authToken')
        }
    }).then(response=>{
        dispatch(removeDepartment(id))
        console.log(response.data)

        Swal.fire({
            title:'deleted',
            text:'Department was successfully deleted',
            icon:'error'
        })
    }).catch(err=>{
        console.log(err)
    })
}
}

export const removeDepartment=(id)=>{
    return {
        type:'REMOVE_DEPARTMENT',payload:id
    }
}

export const startUpdateDepartment=(formData,id,redirect)=>{
    return(dispatch)=>{
axios.put(`/departments/${id}`,formData,{
    headers:{
        'x-auth':localStorage.getItem('authToken')
    }
}).then(response=>{
    console.log(response.data)
    dispatch(updateDepartment(response.data))
    redirect()
}).catch(err=>{
    console.log(err)
})
    }
}

export const updateDepartment=(department)=>{
    return{
        type:'UPDATE_DEPARTMENT',payload:department
    }
}