
import React, { useRef, useState } from 'react'
import { useTranslation } from "react-i18next";
import TabsFillter from '../../Dashbord_layout/TabsFillter'
import NoData from '../../Dashbord_layout/NoData/NoData';
import { SearchBar } from '../../../utilities/SearchBar/SearchBar';
import { SearchResultsList } from '../../../utilities/SearchBar/SearchResultsList';
import { Time_recordQuery } from '../../../../API/Time_record/Time_recordQuery ';
import { useParams } from 'react-router-dom';
import { TableCell, TableRow,Table, TableHeader, } from '../../Dashbord_layout/Table';
import Loading from '../../../utilities/Loading/Loading';


const Time_record = () => {
   
 
    const { t } = useTranslation("global");
    const [results, setResults] = useState([]);
    const [selected_result, setselected_result] = useState("");
    const { id } = useParams();

    const { isLoading, data: Time_record, isFetched: FetchedTime_record, isError, error } = Time_recordQuery.GetAllBySection(id)

    console.log(Time_record)
    
  
     
  const TableHeaderArray = [
    t("Class_Admin_dash.Time_record.0") ,
    t("Class_Admin_dash.Time_record.1") ,
    t("Class_Admin_dash.Time_record.2") ,
    t("Class_Admin_dash.Time_record.3") ,








  ];

  return (
<div className='relative'>

<TabsFillter>
<div className='flex   items-center w-full justify-between'>
  <div className='flex gap-10'>
  <span className="ps-2 pe-5 py-1 border-[1px] border-solid border-myGray-100  flex items-center  justify-start rounded-lg   text-myGray-500">
              {Time_record?.data.length} {t("home_Admin_dash.record.0")}
            </span>

            {/* <div className="search-bar-container relative bg-slate-600">
        <SearchBar setResults={setResults} selected_result={selected_result} placeholder={ t("Class_Admin_dash.Time_record.1") } />
        {results && results.length > 0 && <SearchResultsList results={results} setselected_result={setselected_result} />}
      </div> */}
     
  </div>

       
</div>
       

</TabsFillter>

  <div className='px-10'>
          <Table className="mt-10 text-center text-xs sm:text-xs md:text-sm rounded-md">
            <TableHeader className="">
              <TableRow className="">
                {TableHeaderArray.map((header, index) => (
                  <TableCell className="py-2" key={index}>{header}</TableCell>
                ))}
              </TableRow>
            </TableHeader>
      

            <tbody>
              {isLoading ? (
                <td colSpan={12}>
                  <Loading size={60} />
                </td>
              ) :

                (Time_record?.data.length === 0 ? (
                  <td colSpan={12}>
                    <NoData />
                  </td>
                ) : (
                 
                  Time_record?.data?.map((Time_record_student,index)=>(
                    <TableRow
                    key={index}
                    className={
                      `${!Time_record_student.isPresent && "border-error border-[3px]"}`
                    }
                    rowIndex={index}
                  >
                       <TableCell>{index +1}</TableCell>
                       <TableCell>{Time_record_student.studentBase.firstName} {Time_record_student.studentBase.lastName}</TableCell>
                       <TableCell className={`${!Time_record_student.isPresent && "text-error"}`}>{Time_record_student.isPresent=== false ?"غير موجود":"موجود"  }</TableCell>
                       <TableCell>{Time_record_student.note }</TableCell>

                       


                 



                      

                      </TableRow>

                  ))
                  
                  
                 
                
                 


                   
                
                )

                )
              }


            </tbody>
          </Table>
        </div>
  
</div>
  )
}

export default Time_record