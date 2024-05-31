import React, { useEffect, useRef, useState } from 'react'
import { useTranslation } from "react-i18next";
import TabsFillter from '../../Dashbord_layout/TabsFillter'
import Table from '../../Dashbord_layout/TableLayout'
import NoData from '../../Dashbord_layout/NoData/NoData';
import Radio from '../../../utilities/Radio';


const Exams_student  = () => {
    const Exams = [
        {
          ID: "01",
          Name: "العربية لغتي _ الفصل الأول",
          Timing: "مايو 11, 2024 8:00ص",
          Test_type: "فحص",
          mark: 70,
          great_mark: 100,

    
    
        },
        {
            ID: "02",
            Name:"التربية الفنية",
            Timing: "20 /8 /2020 10:00pm",
          Test_type: "مذاكرة",
          mark: 70,
          great_mark: 100,


      
      
          },
          {
            ID: "03",
            Name:"التزبية الدينية الإسلامية",
            Timing: "20 /8 /2020 10:00pm",
          Test_type: "فحص",
          mark: 70,
          great_mark: 100,


      
      
          },   {
            ID: "04",
            Name:" 20 /8 /2020 10:00pm",
            Timing: "20 /8 /2020 10:00pm",
          Test_type: "فحص",
          mark: 70,
          great_mark: 100,

            
      
          },   {
            ID: "05",
            Name:" الموسيقية",
            Timing: "20 /8 /2020 10:00pm",
          Test_type: "مذاكرة",
          mark: 70,
          great_mark: 100,

            
      
          },   {
            ID: "06",
            Name:"العلوم _الفصل الأول",
            Timing: "20 /8 /2020 10:00pm",
          Test_type: " مذاكرة",
          mark: 70,
          great_mark: 100,


            
      
          },   {
            ID: "07",
            Name:"الدراسات الاجتماعية",
            Timing: "20 /8 /2020 10:00pm",
          Test_type: "مذاكرة ",
          mark: 70,
          great_mark: 100,

                  
      
          },
          {
            ID: "08",
            Name:"اللغة والانكليزية  ",
            Timing: "20 /8 /2020 10:00pm",
          Test_type: "مذاكرة",
          mark: 70,
          great_mark: 100,
      
      
          },
          
   
          
          
      ];
    const[data,setdata]=useState(Exams)
    const { t } = useTranslation("global");
    const[valueRadio,setValueRadio]=useState(null) 

  const columns = [
    t("Students_Admin_dash.Students_Exams.0") ,
    t("Students_Admin_dash.Students_Exams.1") ,
    t("Students_Admin_dash.Students_Exams.2") ,
    t("Students_Admin_dash.Students_Exams.3") ,
    t("Students_Admin_dash.Students_Exams.4") ,
    t("Students_Admin_dash.Students_Exams.5") ,









  ];

  const radioItems = [
    { value: t("Class_Admin_dash.Exams_filter.0"), label: t("Class_Admin_dash.Exams_filter.0")},
    { value: t("Class_Admin_dash.Exams_filter.1"), label: t("Class_Admin_dash.Exams_filter.1") },
  ];



 const  handleChange_valueRadio=(value)=>{
    setValueRadio(value)
 }
 const handleEdit=(ID)=>{

  const Edit_clicKed=data.find((ob,id)=>{
    setEdit_active(!Edit_active);
    return ob.ID === ID
  })
  set_edit_content(Edit_clicKed)


}
  return (
<div className='relative bg-white  mt-3 shadow-slate-300 shadow-verfictionShadow rounded-md'>

<TabsFillter>
<div className='flex   items-center w-full justify-between'>
  <div className='flex gap-10'>
  <span className="ps-2 pe-5 py-1 border-[1px] border-solid border-myGray-100 bg-white  flex items-center  justify-start rounded-lg   text-myGray-500">
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
      handleEdit={handleEdit}
      rowclassName={""}
      row_className=""
      action={{delete: false,update: false }}
      className={"min-h-screen px-6 pt-2 text-mySlate "}
      RowlinK={false}
    />
  ) : (
    <NoData ></NoData>
  )}
</div>
  )
}

export default Exams_student 
