





import React, { useRef, useState } from 'react'
import { useTranslation } from "react-i18next";
import TabsFillter from '../../../Dashbord_layout/TabsFillter'
import NoData from '../../../Dashbord_layout/NoData/NoData';
import { TableCell, TableHeader, TableRow,Table } from '../../../Dashbord_layout/Table';
import Loading from '../../../../utilities/Loading/Loading';
import { useParams } from 'react-router-dom';
import { WeeklyProgramQuery } from '../../../../../API/WeeklyProggram/WeeklyProggramQuery';


const Division_Weekly_program = () => {

 
    const { t } = useTranslation("global");
    const { id } = useParams();
    
    console.log(id)
    
    const { isLoading, data: Weekly_programs, isFetched: FetchedSection, isError, error } = WeeklyProgramQuery.GetWeekly_programById(id)
    
      console.log(Weekly_programs)
         
      const TableHeaderArray = [
        t("Class_Admin_dash.Weekly_program.0") ,
        t("Class_Admin_dash.Weekly_program.1") ,
        t("Class_Admin_dash.Weekly_program.2") ,
        t("Class_Admin_dash.Weekly_program.3") ,
        t("Class_Admin_dash.Weekly_program.4") ,
        t("Class_Admin_dash.Weekly_program.5") ,
     
    
    
    
    
    
    
      ];

  
     







  return (
<div className='relative'>

<TabsFillter>
<div className='flex   items-center w-full justify-between'>
  <div className='flex gap-10'>
  <span className="ps-2 pe-5 py-1 border-[1px] border-solid border-myGray-100  flex items-center  justify-start rounded-lg   text-myGray-500">
              {Weekly_programs?.data.length} {t("home_Admin_dash.record.0")}
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

                (Weekly_programs?.data.length === 0 ? (
                  <td colSpan={12}>
                    <NoData />
                  </td>
                ) : (
                 
                  Weekly_programs?.data?.map((Weekly_program,index)=>(
                    <TableRow
                    key={index}
                    className={
                      ""
                    }
                    rowIndex={index}
                  >
                       
                       <TableCell className=" ">{Weekly_program.hour}</TableCell>

                      <TableCell className=" ">{Weekly_program.day ===0 && Weekly_program.material.name }</TableCell>
                      <TableCell className=" ">{Weekly_program.day ===1&& Weekly_program.material.name }</TableCell>
                      <TableCell className=" ">{Weekly_program.day ===2&& Weekly_program.material.name }</TableCell>
                      <TableCell className=" ">{Weekly_program.day ===3&& Weekly_program.material.name }</TableCell>
                      <TableCell className=" ">{Weekly_program.day ===4&&  Weekly_program.material.name }</TableCell>
                      



                      

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

export default Division_Weekly_program
