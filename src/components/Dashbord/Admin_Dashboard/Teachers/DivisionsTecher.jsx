


import React, { useEffect, useRef, useState } from 'react'
import { useTranslation } from "react-i18next";
import TabsFillter from '../../Dashbord_layout/TabsFillter'
import NoData from '../../Dashbord_layout/NoData/NoData';
import { useParams  } from 'react-router-dom';
import { TeatcherQuery } from '../../../../API/Teatchers/TeatchersQueries';
import { TableCell, TableHeader, TableRow,Table } from '../../Dashbord_layout/Table';
import Loading from '../../../utilities/Loading/Loading';
import { AiOutlineEdit } from 'react-icons/ai';
import { RiDeleteBin5Line } from 'react-icons/ri';

const DivisionsTecher = () => {
    const { id } = useParams();
 
    const[data,setdata]=useState()
    const { t } = useTranslation("global")
    const [techerSelected,settecherSelected]=useState({})
 
    const { isLoading, data:Techer, isFetched: FetchedTechers, isError, error } = TeatcherQuery.GetTecherById(id)
  console.log(Techer)
  console.log(techerSelected)
  useEffect(()=>{
    if(FetchedTechers){
      settecherSelected(Techer.data[0])

    }

  },[FetchedTechers])
  const TableHeaderArray=[
    t("Teachers_Admin_dash.Teachers_Table.0") ,
    t("Teachers_Admin_dash.Teachers_Table.7") ,
    t("Teachers_Admin_dash.Teachers_Table.8") ,



  ]



  return (
<div className='relative bg-white  mt-3 shadow-slate-300 shadow-verfictionShadow rounded-md'>

<TabsFillter>
<div className='flex   items-center w-full justify-between'>
  <div className='flex gap-10'>
  <span className="ps-2 pe-5 py-1 border-[1px] border-solid border-myGray-100  flex items-center  justify-start rounded-lg   text-myGray-500">
              {/* {data.length} {t("home_Admin_dash.record.0")} */}
            </span>


     
  </div>

       
</div>
       

</TabsFillter>
{/* {data.length >= 1 ? (
    <Table
      columns={columns}
      rows={data}
      action={{delete: false,update: false }}
      className={"min-h-screen px-6 pt-2"}
      RowlinK={false}
    />
  ) : (
    <NoData ></NoData>
  )} */}

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

                (Techer?.data.length === 0 ? (
                  <td colSpan={12}>
                    <NoData />
                  </td>
                ) : (
                 
                  techerSelected.section?.map((section,index)=>(
                    <TableRow
                    key={index}
                    className={
                      ""
                    }
                    rowIndex={index}
                  >
                       
                      <TableCell className=" ">{index + 1}</TableCell>
                      <TableCell className=" ">{section.name}</TableCell>
                      <TableCell className="">{section.class.name}</TableCell>

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

export default DivisionsTecher
