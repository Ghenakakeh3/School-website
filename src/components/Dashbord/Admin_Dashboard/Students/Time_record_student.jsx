
import React, { useRef, useState } from 'react'
import { useTranslation } from "react-i18next";
import TabsFillter from '../../Dashbord_layout/TabsFillter'
import NoData from '../../Dashbord_layout/NoData/NoData';
import { Time_recordQuery } from '../../../../API/Time_record/Time_recordQuery ';
import { TableCell, TableHeader, TableRow,Table } from '../../Dashbord_layout/Table';
import Loading from '../../../utilities/Loading/Loading';
import { useParams } from 'react-router-dom';


const Time_record_student = () => {
 
 
    const { t } = useTranslation("global");
    const { id } = useParams();
    console.log(id)

    const { isLoading, data: TimeRecorde_Student, isFetched: FetchedMarks, isError, error } = Time_recordQuery.GetAllByStudent(id)
  
    console.log(TimeRecorde_Student)

     
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
              {TimeRecorde_Student?.data.length} {t("home_Admin_dash.record.0")}
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

              (TimeRecorde_Student?.data.length === 0 ? (
                <td colSpan={12}>
                  <NoData />
                </td>
              ) : (

                TimeRecorde_Student?.data?.map((timeRecord, index) => (
                  <TableRow
                    key={index}
                    className={
                      `${!timeRecord.isPresent && "border-error border-[3px]"}`
                    }
                    rowIndex={index}
                  >

                    <TableCell>{index+1}</TableCell>
                    <TableCell>{timeRecord.date}</TableCell>
                    <TableCell className={`${!timeRecord.isPresent && "text-error"}`}>{timeRecord.isPresent? "موجود" :"غير موجود"}</TableCell>
                    <TableCell>{timeRecord.note}</TableCell>
                   











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

export default Time_record_student
