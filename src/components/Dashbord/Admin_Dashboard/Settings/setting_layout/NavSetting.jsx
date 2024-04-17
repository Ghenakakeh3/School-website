import React from 'react'
import { useTranslation } from "react-i18next";
import DashPath from '../../../Dashbord_layout/DashPath/DashPath';
import { NavLink } from 'react-router-dom';

const NavSetting = () => {
  const { t } = useTranslation("global");

  return (
    <div className='bg-gray-50 p-4 flex justify-between'>
        <DashPath path={t("home_Admin_dash.Admin_Settings.0")}/>
      <div>
      <NavLink to='/Admin_dashboard'  className={({ isActive }) =>
        isActive ? `active border-error opacity-5    bg-sky-900  !text-white `  : "hover:text-orange transition  text-slate-700  " 
       }>{t('home_Admin_dash.Admin_Settings.4')}</NavLink>
      </div>
    </div>
  )
}

export default NavSetting
