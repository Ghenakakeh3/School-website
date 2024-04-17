import React from 'react'
import Inner_Links from '../../Dashbord_layout/Content/Inner_Links'
import Content from '../../Dashbord_layout/Content/Content'
import { useTranslation } from "react-i18next";
import { NavLink, Outlet } from 'react-router-dom';


const Manage_user_accounts = () => {
    const { t } = useTranslation("global");
    const links = [
     
        { name: t("home_Admin_dash.Manage_user_accounts.0"), to: "/Admin_Settings/Manage_user_accounts/Admin_accounts" },
        { name: t("home_Admin_dash.Manage_user_accounts.1"), to: "/Admin_Settings/Manage_user_accounts/Parents_accounts"  },
        { name: t("home_Admin_dash.Manage_user_accounts.2"), to: "/Admin_Settings/Manage_user_accounts/Student_accounts" },
   
    
      ];
  return (
    <div className='bg-myGra rounded-md px-6'>
       <Inner_Links links={links} />
<div className='  rounded-md'>
<Content   >
    <Outlet/>

     </Content>
</div>
    </div>
  )
}

export default Manage_user_accounts
