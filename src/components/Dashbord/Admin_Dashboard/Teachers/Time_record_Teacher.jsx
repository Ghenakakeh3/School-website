import React, { useRef, useState } from 'react'
import { useTranslation } from "react-i18next";
import TabsFillter from '../../Dashbord_layout/TabsFillter'
import Table from '../../Dashbord_layout/TableLayout'
import NoData from '../../Dashbord_layout/NoData/NoData';

const Time_record_Teacher = () => {
    const Time_record = [
        {
            ID: "01",
            Timing: "3/7/2001",
            Checking: "موجود-متأخر",
            reason: "  بسبب المواصلات",
   
    
        },
        {
            ID: "02",
            Timing: "4/7/2001",
            Checking: "موجود",
            reason: "  ",
   
    
        },
        {
            ID: "03",
            Timing: "5/7/2001",
            Checking: "موجود",
            reason: "  ",
   
    
        },
        {
            ID: "04",
            Timing: "6/7/2001",
            Checking: "غير موجود",
            reason: "  ",
   
    
        },

   
          
          
      ];
    const[data,setdata]=useState(Time_record)
    const { t } = useTranslation("global")
     
  const columns = [
    t("Students_Admin_dash.Time_record.0") ,
    t("Students_Admin_dash.Time_record.1") ,
    t("Students_Admin_dash.Time_record.2") ,
    t("Students_Admin_dash.Time_record.3") ,








  ];

  return (
<div className='relative bg-white  mt-3 shadow-slate-300 shadow-verfictionShadow rounded-md'>

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

export default Time_record_Teacher
