import React, { useContext, useState } from 'react';
import Login from './components/LOgin';
import AdminDashboard from './pages/AdminDashboard';
import EmployeeDashboard from './pages/EmployeeDashboard';
import { DataContext } from './context/Context';

const App = () => {

  const [role, setRole] = useState('')
  const data = useContext(DataContext)
  // console.log(data.employees.find((e)=>e.email == email && e.password == password))
  

  const handleLogin = (email, password) => {
    if(email == 'a@a.com' && password == '123'){
      setRole('admin')
    }else if(data && data.employees.find((e)=>e.email == email && e.password == password)){
      setRole('employee')
    }else{
      alert("WRONG CREDENTIALS")
    }
  }

 

  return ( 
    <>
    
    {!role ? <Login handleLogin={handleLogin}/> : ''}
    {role == 'admin' ? <AdminDashboard/> : <EmployeeDashboard /> }
    
    </>
   );
}
 
export default App;