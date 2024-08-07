


import React, { useState } from 'react'
import Content from '../../../Dashbord_layout/Content/Content'
import Inner_Links from '../../../Dashbord_layout/Content/Inner_Links';
import { useTranslation } from "react-i18next";
import { Outlet } from 'react-router-dom';
import { SectionQuery } from '../../../../../API/Sections/SectionsQueries';

const DivisionDetales = () => {
    const { t } = useTranslation("global");
    const Id=location.pathname.split("/")[4]

    const rows = [
        {
          ID: "01",
          Name: "الصف الأول",
    
          Division_name: "الشعبة الأولى ",
    
    
    
    
    
    
    
        },
        {
          ID: "02",
    
          Name: "الصف الأول",
    
          Division_name: "الشعبة الثانية",
    
    
    
        },
    
        {
          ID: "03",
          Name: "الصف الثاني",
    
          Division_name: "الشعبة الأولى",
    
    
    
        },
        {
          ID: "04",
          Name: "الصف الثاني",
    
          Division_name: "الشعبة الثانية",
    
    
    
        },
        {
          ID: "05",
          Name: "الصف الثالث",
    
          Division_name: "الشعبة الأولى",
    
    
    
        },
         {
          ID: "06",
          Name: "الصف الثالث",
    
          Division_name: "الشعبة الثانية",
    
    
    
        },
         {
          ID: "07",
          Name: "الصف الرابع",
    
          Division_name: "الشعبة الأولى",
    
    
    
        },
         {
          ID: "08",
          Name: "الصف الرابع",
    
          Division_name: "الشعبة  الثانية",
    
    
    
        },
        {
          ID: "09",
          Name: " الصف الخامس",
    
          Division_name: "الشعبة الأولى",
    
    
    
        },
        , {
          ID: "10",
          Name: "الصف الخامس",
    
          Division_name: "الشعبة الثانية",
    
    
    
        },
    
        {
          ID: "11",
          Name: "الصف السادس",
    
          Division_name: "الشعبة الأولى",
    
    
    
        },
         {
          ID: "12",
          Name: "الصف السادس",
    
          Division_name: "الشعبة الثانية",
    
    
    
        },
      ];
      const links = [

        { name: t("Division_Supervisor_dash.DivisionDetales.0"), to: `/School-website/Supervisor_dashboard/Division/${Id}/Registered_students` },
        { name: t("Division_Supervisor_dash.DivisionDetales.1"), to: `/School-website/Supervisor_dashboard/Division/${Id}/Weekly_program` },
        { name: t("Division_Supervisor_dash.DivisionDetales.2"), to: `/School-website/Supervisor_dashboard/Division/${Id}/Time_record` },
        {name:  t("Division_Supervisor_dash.DivisionDetales.5")  ,to:`/School-website/Supervisor_dashboard/Division/${Id}/Daily_inspection`},
        { name: t("Division_Supervisor_dash.DivisionDetales.3"), to: `/School-website/Supervisor_dashboard/Division/${Id}/Exams` },
        { name: t("Division_Supervisor_dash.DivisionDetales.4"), to: `/School-website/Supervisor_dashboard/Division/${Id}/Subject_marks` },

      

        
   
    
      ];
      const {data:sections} =SectionQuery.GetAllSectionQuery()
      const Class_selcted_=sections?.data.filter((row)=>{
        return row.ID === Id
      })
      
    

      const[Class,setClass]=useState(Class_selcted_)
  return (
    <Content
    // path={`${Class[0].Name} / ${Class[0].Division_name}`}
    classNameChildern="bg-white"

  >
      <Inner_Links links={links} />
      <div className='min-h-screen'>
      <Outlet/>
      </div>

    </Content>
  )
}

export default DivisionDetales
