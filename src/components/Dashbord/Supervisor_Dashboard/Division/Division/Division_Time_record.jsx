


import React, {  useState } from 'react'
import { useTranslation } from "react-i18next";
import TabsFillter from '../../../Dashbord_layout/TabsFillter'
import Table from '../../../Dashbord_layout/TableLayout'
import NoData from '../../../Dashbord_layout/NoData/NoData';
import { SearchBar } from '../../../../utilities/SearchBar/SearchBar';
import { SearchResultsList } from '../../../../utilities/SearchBar/SearchResultsList';
import { InputDate } from '../../../../utilities/Inputs';


const Division_Time_record = () => {
    const Division_Time_record = [
        {
            ID: "01",
            student_Name: "غنى  كعكة",
            Checking: "موجود-متأخر",
            reason: "  بسبب المواصلات",
   
    
        },
        {
            ID: "02",
            student_Name: "زين مكي",
            Checking: "موجود",
            reason: "  ",
   
    
        },
        {
            ID: "03",
            student_Name: "لارا إدلبي حجي",
            Checking: "موجود",
            reason: "  ",
   
    
        },
        {
            ID: "04",
            student_Name: "مريم عبد الباري",
            Checking: "غير موجود",
            reason: "  ",
   
    
        },

   
          
          
      ];
    const[data,setdata]=useState(Division_Time_record)
    const { t } = useTranslation("global");
    const [results, setResults] = useState([]);
    const [selected_result, setselected_result] = useState("");
  
     
  const columns = [
    t("Division_Supervisor_dash.Time_record.0") ,
    t("Division_Supervisor_dash.Time_record.1") ,
    t("Division_Supervisor_dash.Time_record.2") ,
    t("Division_Supervisor_dash.Time_record.3") ,
  









  ];

  return (
<div className='relative'>

<TabsFillter>
<div className='flex   items-center w-full justify-between'>
  <div className='flex gap-10'>
  <span className="ps-2 pe-5 py-1 border-[1px] border-solid border-myGray-100  flex items-center  justify-start rounded-lg   text-myGray-500">
              {data.length} {t("home_Admin_dash.record.0")}
            </span>

            <div className="search-bar-container relative bg-slate-600">
        <SearchBar setResults={setResults} selected_result={selected_result} placeholder={ t("Division_Supervisor_dash.Time_record.1") } />
        {results && results.length > 0 && <SearchResultsList results={results} setselected_result={setselected_result} />}
      </div>

    <div>
    <InputDate />
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
      RowlinK={true}
    />
  ) : (
    <NoData ></NoData>
  )}
</div>
  )
}

export default Division_Time_record
