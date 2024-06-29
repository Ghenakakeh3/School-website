import React, { useState } from 'react'
import Content from '../../Dashbord_layout/Content/Content'
import Inner_Links from '../../Dashbord_layout/Content/Inner_Links';
import { useTranslation } from "react-i18next";
import { Outlet } from 'react-router-dom';
import  { Card_Teacher } from '../../Dashbord_layout/Card/Card';
const Teachers_details = () => {
    const Teachers = [
        {
          ID: "01",
          Teacher_Name: "لارا ",
          Class: "الصف الأول",
          Division_name: "الشعبة الأولى ",
          Genders: "أنثى",  
          father : "رضا",  
          mom : "حلا",  
          date_of_birth: "2/7/2001", 


        },
    
         {
          ID: "02",
          Teacher_Name: "لارا ",
          Class: "الصف الأول",
          Division_name: "الشعبة الأولى ",
          Genders: "أنثى",
          father : "رضا",  
          mom : "حلا",  
          date_of_birth: "2/7/2001", 
 
    
        },
          {
          ID: "3",
          Teacher_Name: "لارا ",
          Class: "الصف الأول",
          Division_name: "الشعبة الأولى ",
          Genders: "أنثى",   
          father : "رضا",  
          mom : "حلا",  
          date_of_birth: "2/7/2001", 
    
        },
          {
          ID: "04",
          Teacher_Name: "لارا ",
          Class: "الصف الثا",
          Division_name: "الشعبة الأولى ",
          Genders: "أنثى",
          father : "رضا",  
          mom : "حلا",  
          date_of_birth: "2/7/2001", 
 
    
        },
          {
          ID: "05",
          Teacher_Name: "أحمد ",
          Class: "الصف الأول",
          Division_name: "الشعبة الأولى ",
          Genders: "ذكر", 
          father : "رضا",  
          mom : "حلا", 
          date_of_birth: "2/7/2001", 
      
        },
    
    
      ];

    const { t } = useTranslation("global");
    const Id=location.pathname.split("/")[4]
    const Teacher_selcted_=Teachers.filter((row)=>{
        return row.ID === Id
      })
    

      const[Teacher,setTeacher]=useState(Teacher_selcted_[0])
      
    
    const links = [
    
        { name: t("Teachers_Admin_dash.Teachers_links.0"), to: `/School-website/Admin_dashboard/Teachers/${Id}/Time_record` },
        { name: t("Teachers_Admin_dash.Teachers_links.1"), to: `/School-website/Admin_dashboard/Teachers/${Id}/Weekly_program` },  
        { name: t("Teachers_Admin_dash.Teachers_links.2"), to: `/School-website/Admin_dashboard/Teachers/${Id}/Divsions` },        

   
    
      ];
  return (
    <Content
    path={`${Teacher.Class} / ${Teacher.Division_name}/ ${Teacher.Genders === "أنثى" ? "الطالبة" : "  الطالب"} ${Teacher.Teacher_Name}`}
    classNameChildern=""

  >
 <div className='flex  gap-6'>
 <Card_Teacher Teacher={Teacher} />
<div className='flex flex-col  bg-whit w-[95%] ' >
<Inner_Links links={links}  />
 <Outlet/>
</div>
     
 </div>
    

    </Content>
  )
}

export default Teachers_details
