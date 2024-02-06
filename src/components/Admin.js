import { useState } from 'react'
import React from 'react'
import './anuragstyles.css'
import ViewEmployee from './ViewEmployee'
import ViewFinancialReport from './ViewFinancialReport'
const Admin = () => {

  const [toggle,setToggle] = useState(true)
  return (
   <div className='full'>
  
   
    
    <div className='pack'>
    {toggle &&
    <div className='toolbar'>
        <div className='element'>
            View Staff details
        </div>
        <div className='element'>
            Edit Staff details
        </div>
        <div className='element'>
            View financial report
        </div>
        <div className='element'>
          Logout
        </div>
    </div>}<div className='backarrow' onClick={()=>{setToggle(!toggle)}}>{toggle?"←":"≡"}</div>
    </div>
    <div className='page'>
    <ViewFinancialReport/></div>
    
    
    </div>
  )
}

export default Admin
