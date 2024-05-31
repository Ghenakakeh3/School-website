





import React, { useRef, useState } from 'react'
import { useTranslation } from "react-i18next";
import TabsFillter from '../../../Dashbord_layout/TabsFillter'
import Table from '../../../Dashbord_layout/TableLayout'
import NoData from '../../../Dashbord_layout/NoData/NoData';


const Division_Weekly_program = () => {
    const Division_Weekly_program = [
        {
            Day: "الأحد",
          one: "العربية لغتي",
          tow: "التربية الفنية",
          three: "التزبية الدينية الإسلامية",
          four: "الرياضيات  ",
          five: "التربية الموسيقية",
          six: "الدراسات الاجتماعية" ,
    
        },
        {
            Day: "الاثنين",
            one: "العربية لغتي",
            tow: "التربية الفنية",
            three: "التزبية الدينية الإسلامية",
            four: "الرياضيات  ",
            five: "التربية الموسيقية",
            six: "الدراسات الاجتماعية" ,

      
      
          },
          {
            Day: "الثلاثاء",
            one: "العربية لغتي",
            tow: "التربية الفنية",
            three: "التزبية الدينية الإسلامية",
            four: "الرياضيات  ",
            five: "التربية الموسيقية",
            six: "الدراسات الاجتماعية" ,

      
      
          }, 
            {
            Day: "الأربعاء",
            one: "العربية لغتي",
            tow: "التربية الفنية",
            three: "التزبية الدينية الإسلامية",
            four: "الرياضيات  ",
            five: "التربية الموسيقية",
            six: "الدراسات الاجتماعية" ,
            
      
          },   {
            ID: "الخميس",
            one: "العربية لغتي",
            tow: "التربية الفنية",
            three: "التزبية الدينية الإسلامية",
            four: "الرياضيات  ",
            five: "التربية الموسيقية",
            six: "الدراسات الاجتماعية" ,
            
      
          }
          
   
          
          
      ];
    const[data,setdata]=useState(Division_Weekly_program)
    const { t } = useTranslation("global");
    

  
     
  const columns = [
    t("Class_Admin_dash.Weekly_program.0") ,
    t("Class_Admin_dash.Weekly_program.1") ,
    t("Class_Admin_dash.Weekly_program.2") ,
    t("Class_Admin_dash.Weekly_program.3") ,
    t("Class_Admin_dash.Weekly_program.4") ,
    t("Class_Admin_dash.Weekly_program.5") ,
    t("Class_Admin_dash.Weekly_program.6") ,







  ];







  return (
<div className='relative'>

<TabsFillter>
<div className='flex   items-center w-full justify-between'>
  <div className='flex gap-10'>
  <span className="ps-2 pe-5 py-1 border-[1px] border-solid border-myGray-100  flex items-center  justify-start rounded-lg   text-myGray-500">
              {data.length} {t("home_Admin_dash.record.0")}
            </span>
     
  </div>

       
</div>
       

</TabsFillter>
{data.length >= 1 ? (
    <Table
      columns={columns}
      rows={data}
    
      // handleDelte={handleDelte}
      action={{delete: false,update: false }}
      className={"min-h-screen px-6 pt-2"}
      RowlinK={false}
    />
  ) : (
    <NoData ></NoData>
  )}
</div>
  )
}

export default Division_Weekly_program
