import React, { useEffect, useState } from 'react'
import Content from '../../Dashbord_layout/Content/Content'
import Inner_Links from '../../Dashbord_layout/Content/Inner_Links';
import { useTranslation } from "react-i18next";
import { Outlet, useParams } from 'react-router-dom';
import  { Card_Teacher } from '../../Dashbord_layout/Card/Card';
import { TeatcherQuery } from '../../../../API/Teatchers/TeatchersQueries';
const Teachers_details = () => {
  

    const { t } = useTranslation("global");
 
    const [teacher_selcted,setteacher_selcted]=useState({})
    const {id}=useParams()
 

    const { isLoading, data:Teacher, isFetched: FetchedTeacher_selcted, isError, error } = TeatcherQuery.GetTecherById(id)


    

     useEffect(()=>{
      setTimeout(() => {
        FetchedTeacher_selcted && setteacher_selcted(Teacher.data[0])
    }, 300);


   

   


     } ,[FetchedTeacher_selcted,isLoading])
 
    

      
    
    const links = [
    
        { name: t("Teachers_Admin_dash.Teachers_links.0"), to: `/School-website/Admin_dashboard/Teachers/${id}/Time_record` },
        // { name: t("Teachers_Admin_dash.Teachers_links.1"), to: `/School-website/Admin_dashboard/Teachers/${id}/Weekly_program` },  
        { name: t("Teachers_Admin_dash.Teachers_links.2"), to: `/School-website/Admin_dashboard/Teachers/${id}/Divsions` },        

   
    
      ];
  return (
    <Content
    path={` الأستاذ :${teacher_selcted?.firstName} ${teacher_selcted?.lastName}`}
    classNameChildern=""

  >
 <div className='flex  gap-6'>
 <Card_Teacher Teacher={teacher_selcted} />
<div className='flex flex-col  bg-whit w-[95%] ' >
<Inner_Links links={links}  />
 <Outlet/>
</div>
     
 </div>
    

    </Content>
  )
}

export default Teachers_details
