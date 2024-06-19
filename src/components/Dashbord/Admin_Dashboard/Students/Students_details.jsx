import React, { useState } from 'react'
import Content from '../../Dashbord_layout/Content/Content'
import Inner_Links from '../../Dashbord_layout/Content/Inner_Links';
import { useTranslation } from "react-i18next";
import { Outlet } from 'react-router-dom';
import  { Card_student } from '../../Dashbord_layout/Card/Card';

const Students_details = ({Admin,Supervisor}) => {

    const Students = [
        {
          ID: "01",
          student_Name: "لارا ",
          Class: "الصف الأول",
          Division_name: "الشعبة الأولى ",
          Genders: "أنثى",  
          father : "رضا",  
          mom : "حلا",  
          date_of_birth: "2/7/2001", 


        },
    
         {
          ID: "02",
          student_Name: "لارا ",
          Class: "الصف الأول",
          Division_name: "الشعبة الأولى ",
          Genders: "أنثى",
          father : "رضا",  
          mom : "حلا",  
          date_of_birth: "2/7/2001", 
 
    
        },
          {
          ID: "03",
          student_Name: "لارا ",
          Class: "الصف الأول",
          Division_name: "الشعبة الأولى ",
          Genders: "أنثى",   
          father : "رضا",  
          mom : "حلا",  
          date_of_birth: "2/7/2001", 
    
        },
          {
          ID: "04",
          student_Name: "لارا ",
          Class: "الصف الثا",
          Division_name: "الشعبة الأولى ",
          Genders: "أنثى",
          father : "رضا",  
          mom : "حلا",  
          date_of_birth: "2/7/2001", 
 
    
        },
          {
          ID: "05",
          student_Name: "أحمد ",
          Class: "الصف الأول",
          Division_name: "الشعبة الأولى ",
          Genders: "ذكر", 
          father : "رضا",  
          mom : "حلا", 
          date_of_birth: "2/7/2001", 
      
        },
    
    
      ];

    const { t } = useTranslation("global");
    const Id=location.pathname.split("/")[3]
    const student_selcted_=Students.filter((row)=>{
        return row.ID === Id
      })
    

      const[student,setstudent]=useState(student_selcted_[0])
      
    
    const Admin_links = [
     
        { name: t("Students_Admin_dash.Students_links.0"), to: `/Admin_dashboard/students/${Id}/Division_materials` },
        { name: t("Students_Admin_dash.Students_links.1"), to: `/Admin_dashboard/students/${Id}/exams`  },
        { name: t("Students_Admin_dash.Students_links.2"), to: `/Admin_dashboard/students/${Id}/Time_record` },
        { name: t("Students_Admin_dash.Students_links.3"), to: `/Admin_dashboard/students/${Id}/Weekly_program` },
        { name: t("Students_Admin_dash.Students_links.4"), to: `/Admin_dashboard/students/${Id}/Behvier_notification` },

        
       
      

        
   
    
      ];
      const Supervisor_links = [
     
        { name: t("Students_Admin_dash.Students_links.0"), to: `/Supervisor_dashboard/students/${Id}/Division_materials` },
        { name: t("Students_Admin_dash.Students_links.1"), to: `/Supervisor_dashboard/students/${Id}/exams`  },
        { name: t("Students_Admin_dash.Students_links.2"), to: `/Supervisor_dashboard/students/${Id}/Time_record` },
        { name: t("Students_Admin_dash.Students_links.3"), to: `/Supervisor_dashboard/students/${Id}/Weekly_program` },
        { name: t("Students_Admin_dash.Students_links.4"), to: `/Supervisor_dashboard/students/${Id}/Behvier_notification` },

        
       
      

        
   
    
      ];


  return (
    <Content
    path={`${student.Class} / ${student.Division_name}/ ${student.Genders === "أنثى" ? "الطالبة" : "  الطالب"} ${student.student_Name}`}
    classNameChildern=""

  >
 <div className='flex  gap-6'>
 <Card_student student={student} />
<div className='flex flex-col  bg-whit w-[95%] ' >
<Inner_Links links={Admin ? Admin_links :Supervisor_links }  />
 <Outlet/>
</div>
     
 </div>
    

    </Content>
  )
}

export default Students_details
