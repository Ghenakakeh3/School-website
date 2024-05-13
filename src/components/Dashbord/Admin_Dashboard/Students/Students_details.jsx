import React, { useState } from 'react'
import Content from '../../Dashbord_layout/Content/Content'
import Inner_Links from '../../Dashbord_layout/Content/Inner_Links';
import { useTranslation } from "react-i18next";
import { Outlet } from 'react-router-dom';
import Card from '../../Dashbord_layout/Card/Card';

const Students_details = () => {

    const Students = [
        {
          ID: "01",
          student_Name: "لارا ",
          Class: "الصف الأول",
          Division_name: "الشعبة الأولى ",
          Genders: "أنثى",   
        },
    
         {
          ID: "02",
          student_Name: "لارا ",
          Class: "الصف الأول",
          Division_name: "الشعبة الأولى ",
          Genders: "أنثى",
 
    
        },
          {
          ID: "03",
          student_Name: "لارا ",
          Class: "الصف الأول",
          Division_name: "الشعبة الأولى ",
          Genders: "أنثى",   
    
        },
          {
          ID: "04",
          student_Name: "لارا ",
          Class: "الصف الثا",
          Division_name: "الشعبة الأولى ",
          Genders: "أنثى",
 
    
        },
          {
          ID: "05",
          student_Name: "أحمد ",
          Class: "الصف الأول",
          Division_name: "الشعبة الأولى ",
          Genders: "ذكر", 
        },
    
    
      ];

    const { t } = useTranslation("global");
    const Id=location.pathname.split("/")[3]
    const student_selcted_=Students.filter((row)=>{
        return row.ID === Id
      })
    

      const[student,setstudent]=useState(student_selcted_[0])
      console.log(student)
    
    const links = [
     
        { name: t("Class_Admin_dash.ClassDetales.0"), to: `/Admin_dashboard/students/${Id}/Subjects` },
        { name: t("Class_Admin_dash.ClassDetales.1"), to: `/Admin_dashboard/students/${Id}/Registered_students`  },
        { name: t("Class_Admin_dash.ClassDetales.2"), to: `/Admin_dashboard/students/${Id}/Weekly_program` },
        { name: t("Class_Admin_dash.ClassDetales.3"), to: `/Admin_dashboard/students/${Id}/Time_record` },
        { name: t("Class_Admin_dash.ClassDetales.4"), to: `/Admin_dashboard/students/${Id}/Exams` },
        { name: t("Class_Admin_dash.ClassDetales.5"), to: `/Admin_dashboard/students/${Id}/Subject_marks` },
      

        
   
    
      ];
  return (
    <Content
    path={`${student.Class} / ${student.Division_name}/ ${student.Genders === "أنثى" ? "الطالبة" : "  الطالب"} ${student.student_Name}`}
    classNameChildern=""

  >
 <div className='flex  gap-6'>
 <Card person={student} />
<div className='flex flex-col  bg-whit w-[90%] ' >
<Inner_Links links={links}  />
 <Outlet/>
</div>
     
 </div>
    

    </Content>
  )
}

export default Students_details
