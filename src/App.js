import React from 'react'
import {BrowserRouter,Link,Route,Switch} from 'react-router-dom'
import Login from './components/Login'
import Register from './components/Register'
import Home from './components/Home'
 import {connect} from 'react-redux'
 import Account from './components/Account'
 import CustomerList from './components/Customer/List'
 import CustomerShow from './components/Customer/Show'
 import CustomerNew from './components/Customer/New'
 import CustomerEdit from './components/Customer/Edit'
import { startLogout } from './actions/userAction'
import DepartmentList from './components/Department/List'
import NewDepartment from './components/Department/New'
import ShowDepartment from './components/Department/Show'
import EditDepartment from './components/Department/Edit'
import EmployeesList from './components/Employee/Employees'
import NewEmployee from './components/Employee/New'
import ShowEmployee from './components/Employee/Show'
import EditEmployee from './components/Employee/Edit'
import TicketsList from './components/Tickets/Tickets'
import NewTicket from './components/Tickets/New'
import ShowTickets from './components/Tickets/Show'
function App(props){

    const handleLogout=()=>{
        props.dispatch(startLogout())
    }
    return (<BrowserRouter>
    <div>
        <h1>Welcome To Ticket Master </h1>
        <label><Link to="/">Home</Link></label>
      
{
    Object.keys(props.user).length==0?(<div>

<label><Link to="/users/login">Login</Link></label>
        <label><Link to="/users/register">Register</Link></label>

    </div>):(<div>

        <label><Link to="/users/account">Account</Link></label>
        <label><Link to="#" onClick={()=>{
            handleLogout()
        }}>Logout</Link></label>
        <label><Link to="/customers">Customers</Link></label>
        <label><Link to="/department">Department</Link></label>
        <label><Link to="/employees">Employees</Link></label>
        <label><Link to="/tickets">Tickets</Link></label>


      
    </div>)
}


<Switch>
    
        <Route path="/" component={Home} exact={true} />
        <Route path="/users/account" component={Account} />
        <Route path="/users/login" component={Login} />
        <Route path="/users/register" component={Register} />
        <Route path="/customers"  component={CustomerList} exact={true} />
        <Route path="/customers/new" component={CustomerNew}  />
        <Route path="/customers/edit/:id" component={CustomerEdit} />
        <Route path="/customers/:id" component={CustomerShow} exact={true} />
        <Route path="/department" component={DepartmentList} exact={true}/>
        <Route path="/departments/new" component={NewDepartment} exact={true}/>
        <Route path ="/departments/edit/:id" component={EditDepartment} exact={true}/>
        <Route path="/departments/:id" component={ShowDepartment} exact={true}/>
        <Route path="/employees" component={EmployeesList} exact={true} />
        <Route path="/employees/new" component={NewEmployee} exact={true}/>
        <Route path="/employees/edit/:id" component={EditEmployee} />
        <Route path="/employees/:id" component={ShowEmployee}/>
        <Route path="/tickets" component={TicketsList}  exact={true}/>
        <Route path="/tickets/new" component={NewTicket} />
        <Route path="/tickets/:id" component={ShowTickets}/>
       
        </Switch>
    </div>
    </BrowserRouter>)
}
const mapStateToProps=(state)=>{
    return{
        user:state.user
    }
}
export default connect(mapStateToProps)(App)

