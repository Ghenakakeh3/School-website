import React, { useRef, useState } from 'react'
import { useTranslation } from "react-i18next";
import TabsFillter from '../../Dashbord_layout/TabsFillter'
import Table from '../../Dashbord_layout/TableLayout'
import NoData from '../../Dashbord_layout/NoData/NoData';
import Radio from '../../../utilities/Radio';


const Division_materials_student = () => {
    const Subjects = [
        {
          ID: "01",
          Name: "العربية لغتي _ الفصل الأول",
          Number_of_classes: "6",
          Subject_teacher: "هادي الهادي",
    
    
        },
        {
            ID: "02",
            Name:"التربية الفنية",
            Number_of_classes: "6",
          Subject_teacher: " رامي حسون",

      
      
          },
          {
            ID: "03",
            Name:"التزبية الدينية الإسلامية",
            Number_of_classes: "6",
          Subject_teacher: "لانا العلي ",

      
      
          },   {
            ID: "04",
            Name:"الرياضيات الفصل الأول",
            Number_of_classes: "6",
          Subject_teacher: "فراس الأحمر ",
            
      
          },   {
            ID: "05",
            Name:"التربية الموسيقية",
            Number_of_classes: "6",
          Subject_teacher: " سنا الرومي",
            
      
          },   {
            ID: "06",
            Name:"العلوم _الفصل الأول",
            Number_of_classes: "6",
          Subject_teacher: " ماجدة الورد",
            
      
          },   {
            ID: "07",
            Name:"الدراسات الاجتماعية",
            Number_of_classes: "6",
          Subject_teacher: "سهام ضبيط ",
                  
      
          },
          {
            ID: "08",
            Name:"اللغة والانكليزية  ",
            Number_of_classes: "6",
          Subject_teacher: "لانا العلي  ",

      
      
          },
          
   
          
          
      ];
    const[data,setdata]=useState(Subjects)
    const { t } = useTranslation("global");
    const[valueRadio,setValueRadio]=useState(null)
    




  
     
  const columns = [
    t("Class_Admin_dash.Subjects.0") ,
    t("Class_Admin_dash.Subjects.1") ,
    t("Class_Admin_dash.Subjects.2") ,
    t("Class_Admin_dash.Subjects.3") ,






  ];
  const radioItems = [
    { value: t("Class_Admin_dash.Subjects_filter.0"), label: t("Class_Admin_dash.Subjects_filter.0")},
    { value: t("Class_Admin_dash.Subjects_filter.1"), label: t("Class_Admin_dash.Subjects_filter.1") },
  ];

 


 const  handleChange_valueRadio=(value)=>{
    setValueRadio(value)
 }
 
  return (
<div className='relative bg-white mt-3 shadow-slate-300 shadow-verfictionShadow rounded-md'>

<TabsFillter>
<div className='flex   items-center w-full justify-between'>
  <div className='flex gap-10'>
  <span className="ps-2 pe-5 py-1 border-[1px] border-solid border-myGray-100  flex items-center  justify-start rounded-lg   text-myGray-500">
              {data.length} {t("home_Admin_dash.record.0")}
            </span>
         <div className='flex  items-center gap-5'>
         <Radio     
               value={valueRadio}
          onChange={handleChange_valueRadio} 
          name="" 
          items={radioItems}/>
            </div>
  </div>

       
</div>
       

</TabsFillter>
{data.length >= 1 ? (
    <Table
      columns={columns}
      rows={data}
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

export default Division_materials_student
