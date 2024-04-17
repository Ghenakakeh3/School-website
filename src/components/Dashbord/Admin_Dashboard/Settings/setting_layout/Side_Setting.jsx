

import React, { useState } from 'react'
import Typography from '../../../../utilities/Typography'
import { useTranslation } from "react-i18next";
import { NavLink } from 'react-router-dom';


const Side_Setting = () => {
  const { t } = useTranslation("global");
  const [active, setactive] = useState(0);


    const links = [
     
        { name: t("home_Admin_dash.Admin_Settings.1"), to: "/Admin_Settings/General_Settings" },
        { name: t("home_Admin_dash.Admin_Settings.2"), to: "/Admin_Settings/Manage_user_accounts"  },
        { name: t("home_Admin_dash.Admin_Settings.3"), to: "/Admin_Settings/System_settings" },
   
    
      ];
  return (
    <div className='bg-gray-50 w-[18%] flex flex-col shadow-md  '>
      <Typography component='h2' className='border-b-2 border-b-myGray-600 w-[70%] mx-auto pt-10 pb-2 mb-10 !text-myGray-600'>{t("home_Admin_dash.Admin_Settings.0")}</Typography>
      <div className='text-center flex flex-col justify-center items-center '>
      {links.map((link,index) => (
 

 <NavLink to={link.to} key={link.to}    className={({ isActive }) =>
        isActive ? `${setactive(index)} active   flex items-center gap-2 py-5 px-5  rounded-lg  text-[20px]  !text-orange `  : " hover:text-orange transition text-[18px] text-secondary flex items-center gap-2 py-5" 
       } >
   
   {link.name}
 </NavLink>


))}
      </div>
    </div>
  )
}

export default Side_Setting
