import React, { useEffect, useState } from 'react'
import Content from '../../Dashbord_layout/Content/Content'
import Inner_Links from '../../Dashbord_layout/Content/Inner_Links';
import { useTranslation } from "react-i18next";
import { Outlet, useParams } from 'react-router-dom';
import  { Card_student } from '../../Dashbord_layout/Card/Card';
import { StudentQuery } from '../../../../API/Students/StudentsQueries';

const Students_details = ({Admin,Supervisor}) => {


    const { t } = useTranslation("global");

    const [student_selcted,setstudent_selcted]=useState({})
    const {id}=useParams()
    // const student_selcted_=Students.filter((row)=>{
    //     return row.ID === Id
    //   })
    console.log(id)
    const { isLoading, data:student, isFetched: Fetchedstudent_selcted, isError, error } = StudentQuery.GetStudentById(id)

    console.log(student_selcted)
    

     useEffect(()=>{
      setTimeout(() => {
        Fetchedstudent_selcted && setstudent_selcted(student.data[0])
    }, 300);


   

   


     } ,[Fetchedstudent_selcted,isLoading])
      
    
    const Admin_links = [
     
        // { name: t("Students_Admin_dash.Students_links.0"), to: `/School-website/Admin_dashboard/students/${Id}/Division_materials` },
        { name: t("Students_Admin_dash.Students_links.1"), to: `/School-website/Admin_dashboard/students/${id}/exams`  },
        { name: t("Students_Admin_dash.Students_links.2"), to: `/School-website/Admin_dashboard/students/${id}/Time_record` },
        // { name: t("Students_Admin_dash.Students_links.3"), to: `/School-website/Admin_dashboard/students/${Id}/Weekly_program` },
        { name: t("Students_Admin_dash.Students_links.4"), to: `/School-website/Admin_dashboard/students/${id}/Behvier_notification` },

        
       
      

        
   
    
      ];
      const Supervisor_links = [
     
        { name: t("Students_Admin_dash.Students_links.0"), to: `/School-website/Supervisor_dashboard/students/${id}/Division_materials` },
        { name: t("Students_Admin_dash.Students_links.1"), to: `/School-website/Supervisor_dashboard/students/${id}/exams`  },
        { name: t("Students_Admin_dash.Students_links.2"), to: `/School-website/Supervisor_dashboard/students/${id}/Time_record` },
        { name: t("Students_Admin_dash.Students_links.3"), to: `/School-website/Supervisor_dashboard/students/${id}/Weekly_program` },
        { name: t("Students_Admin_dash.Students_links.4"), to: `/School-website/Supervisor_dashboard/students/${id}/Behvier_notification` },

        
       
      

        
   
    
      ];

      
  return (
    <Content
  
     path={`${Fetchedstudent_selcted &&` ${student_selcted.class?.name} / ${student_selcted.section?.name}/   الطالب ${student_selcted?.firstName} ${student_selcted?.lastName}`}`}
    classNameChildern=""

  >
 <div className='flex  gap-6'>
 <Card_student student={Fetchedstudent_selcted && student_selcted} />
<div className='flex flex-col  bg-whit w-[95%] ' >
<Inner_Links links={Admin ? Admin_links :Supervisor_links }  />
 <Outlet/>
</div>
     
 </div>
    

    </Content>
  )
}

export default Students_details
