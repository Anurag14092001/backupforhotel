import React, { useState } from 'react'
import './anuragstyles.css'


const Data = (props) => {
    const {fun} = props;
    const [hover,setHover]=useState(false)
 
    const info =props.info
  return (
    <>
    <div className='link'></div>
    <div onClick={()=>{fun(info)}} className={!hover?'datpt':'ddt'} onMouseEnter={()=>{setHover(true)}} onMouseLeave={()=>{setHover(false)}}></div>
    </>
  )
}

export default Data