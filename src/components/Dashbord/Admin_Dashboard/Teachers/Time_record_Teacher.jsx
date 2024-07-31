import React, { useRef, useState } from 'react'
import { useTranslation } from "react-i18next";
import TabsFillter from '../../Dashbord_layout/TabsFillter'
import NoData from '../../Dashbord_layout/NoData/NoData';
import { Time_recordQuery } from '../../../../API/Time_record/Time_recordQuery ';
import { TableCell, TableHeader ,Table, TableRow} from '../../Dashbord_layout/Table';
import Loading from '../../../utilities/Loading/Loading';
import { useParams } from 'react-router-dom';

const Time_record_Teacher = () => {

 
    const { t } = useTranslation("global")
    const { id } = useParams();

    const { isLoading, data:Techer_TimeRecord, isFetched: FetchedTecher_TimeRecord, isError, error } = Time_recordQuery.GetTeacher_TimeRecord(id)
     console.log(Techer_TimeRecord)
  const TableHeaderArray = [
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
              {Techer_TimeRecord?.data.length} {t("home_Admin_dash.record.0")}
            </span>


     
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

                (Techer_TimeRecord?.data.length === 0 ? (
                  <td colSpan={12}>
                    <NoData />
                  </td>
                ) : (
                 
                  Techer_TimeRecord?.data.map((TimeRecord,index)=>(
                    <TableRow
                    key={index}
                    className={
                       `${!TimeRecord.isPresent && "border-error border-[3px]"}`
                    }
                    rowIndex={index}
                  >
                       
                      <TableCell className=" ">{index + 1}</TableCell>
                      <TableCell className=" ">{TimeRecord.date}</TableCell>
                      <TableCell className={`${!TimeRecord.isPresent && "text-error"}`}>{TimeRecord.isPresent? "موجود" :"غير موجود"}</TableCell>
                      <TableCell>{TimeRecord.note}</TableCell>

                     

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

export default Time_record_Teacher
