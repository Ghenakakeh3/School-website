import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

const Inner_Links = ({links}) => {
  const [active, setactive] = useState(0);

  return (
    <div className=' flex gap-3 border-b-2 px-5 rounded-md border-myGray-200  bg-white shadow-md '>
        {links.map((link,index) => (
 

 <NavLink to={link.to} key={link.to}    className={({ isActive }) =>
        isActive ? `${setactive(index)} active  border-orange  border-t-[3px] text-orange   text-[18px]  font-bold p-3 px-6`  : "hover:text-orange transition text-[18px] text-slate-700 p-3 px-5 " 
       } >
   
   {link.name}
 </NavLink>


))}
    </div>
  )
}

export default Inner_Links
