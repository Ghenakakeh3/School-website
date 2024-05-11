import React, { useState } from 'react'
import Content from '../../Dashbord_layout/Content/Content'
import Inner_Links from '../../Dashbord_layout/Content/Inner_Links';
import { useTranslation } from "react-i18next";
import { Outlet } from 'react-router-dom';

const ClassDetales = () => {
    const { t } = useTranslation("global");
    const Id=location.pathname.split("/")[3]

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
     
        { name: t("Class_Admin_dash.ClassDetales.0"), to: `/Admin_dashboard/Class/${Id}/Subjects` },
        { name: t("Class_Admin_dash.ClassDetales.1"), to: `/Admin_dashboard/Class/${Id}/Registered_students`  },
        { name: t("Class_Admin_dash.ClassDetales.2"), to: `/Admin_dashboard/Class/${Id}/Weekly_program` },
        { name: t("Class_Admin_dash.ClassDetales.3"), to: `/Admin_dashboard/Class/${Id}/Time_record` },
        { name: t("Class_Admin_dash.ClassDetales.4"), to: `/Admin_dashboard/Class/${Id}/Exams` },
        { name: t("Class_Admin_dash.ClassDetales.5"), to: `/Admin_dashboard/Class/${Id}/Subject_marks` },
      

        
   
    
      ];
      const Class_selcted_=rows.filter((row)=>{
        return row.ID === Id
      })
      console.log(Class_selcted_)

      const[Class,setClass]=useState(Class_selcted_)
  return (
    <Content
    path={`${Class[0].Name} / ${Class[0].Division_name}`}
    classNameChildern="bg-white"

  >
      <Inner_Links links={links} />
      <Outlet/>

    </Content>
  )
}

export default ClassDetales
