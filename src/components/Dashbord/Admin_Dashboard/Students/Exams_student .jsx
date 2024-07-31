import React, { useEffect, useRef, useState } from 'react'
import { useTranslation } from "react-i18next";
import TabsFillter from '../../Dashbord_layout/TabsFillter'

import NoData from '../../Dashbord_layout/NoData/NoData';
import Radio from '../../../utilities/Radio';
import { useParams } from 'react-router-dom';
import { ExamQuery } from '../../../../API/Exam/ExamQuery ';
import { TableCell, TableHeader, TableRow,Table } from '../../Dashbord_layout/Table';
import Loading from '../../../utilities/Loading/Loading';


const Exams_student  = () => {
  
   
    const { t } = useTranslation("global");
    const[valueRadio,setValueRadio]=useState(null) 
    const { id } = useParams();
    
    const { isLoading, data: studentExam, isFetched: FetchedstudentExams, isError, error } = ExamQuery.GetExamsByStudent(id)

    console.log(studentExam)

  const TableHeaderArray = [
    t("Students_Admin_dash.Students_Exams.0") ,
    t("Students_Admin_dash.Students_Exams.1") ,
    t("Students_Admin_dash.Students_Exams.2") ,
    t("Students_Admin_dash.Students_Exams.3") ,
    t("Students_Admin_dash.Students_Exams.4") ,










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
              {studentExam?.data.length} {t("home_Admin_dash.record.0")}
            </span>
         {/* <div className='flex  items-center gap-5'>
         <Radio     
               value={valueRadio}
          onChange={handleChange_valueRadio} 
          name="" 
          items={radioItems}/>
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

                (studentExam?.data.length === 0 ? (
                  <td colSpan={12}>
                    <NoData />
                  </td>
                ) : (
                 
                  studentExam?.data?.map((exam,index)=>(
                    <TableRow
                    key={index}
                    className={
                      ""
                    }
                    rowIndex={index}
                  >
                       
                       <TableCell> {index +1}</TableCell>
                       <TableCell> {exam.material.name}</TableCell>
                       <TableCell> {exam.date}</TableCell>
                       <TableCell> {exam.type}</TableCell>
                       <TableCell> {exam.name}</TableCell>



        



                 



                      

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

export default Exams_student 
