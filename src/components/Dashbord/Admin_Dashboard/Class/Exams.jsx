


import React, { useEffect, useRef, useState } from 'react'
import { useTranslation } from "react-i18next";
import TabsFillter from '../../Dashbord_layout/TabsFillter'
import NoData from '../../Dashbord_layout/NoData/NoData';
import Radio from '../../../utilities/Radio';
import Button from '../../../utilities/Button';
import { IoIosAddCircle } from "react-icons/io";
import Add from '../../Dashbord_layout/Mangment/Add';
import * as Yup from "yup";
import Edit from '../../Dashbord_layout/Mangment/Edit';
import { ExamQuery } from '../../../../API/Exam/ExamQuery ';
import { useParams } from 'react-router-dom';
import { TableCell, TableHeader, TableRow ,Table } from '../../Dashbord_layout/Table';
import Loading from '../../../utilities/Loading/Loading';

const Exams = () => {
   
 
    const { t } = useTranslation("global");
    const[valueRadio,setValueRadio]=useState(null)
    const[add_Exams,setadd_Exams]=useState(false)
    const AddRef=useRef(null)
    const[edit_content,set_edit_content]=useState({})
    const [EditDate, setEditDate] = useState(new Date());
   
    const[Edit_active,setEdit_active]=useState(false)
  
    const { id }=useParams()
  

    const { isLoading, data: Exam, isFetched: FetchedExam, isError, error } = ExamQuery.GetExamsBySection(id)
    console.log(Exam)
  
     useEffect(()=>{

      setEditDate(edit_content.Timing)
      
     },[Edit_active])
  const TableHeaderArray = [
    t("Class_Admin_dash.Exams.0") ,
    t("Class_Admin_dash.Exams.1") ,
    t("Class_Admin_dash.Exams.2") ,
    t("Class_Admin_dash.Exams.3") ,
    // t("Class_Admin_dash.Exams.4") ,






  ];

  const radioItems = [
    { value: t("Class_Admin_dash.Exams_filter.0"), label: t("Class_Admin_dash.Exams_filter.0")},
    { value: t("Class_Admin_dash.Exams_filter.1"), label: t("Class_Admin_dash.Exams_filter.1") },
  ];


  const formConfig_Edit = {
    info :[
     { title:  t("Class_Admin_dash.Exams.14")},
    {descrption: t("Class_Admin_dash.Exams.15")},
    { button_content:t("Class_Admin_dash.Exams.14") }
    ],
           
    fields: [

      {
        name: "Subject_Name",
        label: t("Class_Admin_dash.Exams.1"),
        img: "<MdOutlineDriveFileRenameOutline />",
        type: "input",
        inputType: "text",
        component: "input",
        // value: edit_content.Name
      },
      {
        name: "Timing",
        label: t("Class_Admin_dash.Exams.2"),
        img: "<PiUser />",
        type: "date",
        inputType: "date",
        component: "input",
        // value: edit_content.Timing

      },
  
      {
        name: "Test_type",
        label: t("Class_Admin_dash.Exams.3"),
        img:"showpass ? <FaRegEye /> : <FaEyeSlash />" ,
        type: "radio",
        inputType: "text" ,
        // value:  edit_content.Test_type,
        component: "radio",
        options: [
            {value : "Exam" ,name: "Exam" ,label: t("Class_Admin_dash.Exams.7")},
            {value : "Test", name: "testt" ,label: t("Class_Admin_dash.Exams.8")}

        
        ],

      },
     
    ],
    initialValues : {
      Subject_Name: edit_content.Name,
      Timing: edit_content.Timing,
      Test_type:edit_content.Test_type==="فحص" ? "Exam": "Test",
  
  
      // Initialize other fields
    },

        validationSchema: {
       Subject_Name: Yup.string().min(3,t("Class_Admin_dash.Exams.11") ).max(12,t("Class_Admin_dash.Exams.12")).required(t("Class_Admin_dash.Exams.9")),
      Timing: Yup.date().required(t("Class_Admin_dash.Exams.13")),
      Test_type: Yup.string().min(3, (t("Class_Admin_dash.Exams.14"))).required(t("Class_Admin_dash.Exams.9")),


    }
    
  };

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
<div className='relative'>
{add_Exams ? (
            <Add
            formConfig={formConfig_Add}
              ref={AddRef}  
              add_active={add_Exams}
              set_add_active={setadd_Exams}
              rows={data}
              set_data={setdata}


            />
          ) : (
            ""
          )}

          
{Edit_active ? (
            <Edit
               
              Edit_active={Edit_active}
              set_Edit_active={setEdit_active}
              formConfig={formConfig_Edit}
              rows={data}
              set_data={setdata}


            />
          ) : (
            ""
          )}
<TabsFillter>
<div className='flex   items-center w-full justify-between'>
  <div className='flex gap-10'>
  <span className="ps-2 pe-5 py-1 border-[1px] border-solid border-myGray-100  flex items-center  justify-start rounded-lg   text-myGray-500">
              {Exam?.data.length} {t("home_Admin_dash.record.0")}
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

                (Exam?.data.length === 0 ? (
                  <td colSpan={12}>
                    <NoData />
                  </td>
                ) : (
                 
                  Exam?.data?.map((Exam,index)=>(
                    <TableRow
                    key={index}
                    className={
                      ""
                    }
                    rowIndex={index}
                  >
                       
                       <TableCell className=" ">{index +1}</TableCell>

                      <TableCell className=" ">{Exam.material.name }</TableCell>
                      <TableCell className=" ">{Exam.date }</TableCell>
                      <TableCell className=" ">{Exam.type === 0 ?"فحص" : "مذاكرة" }</TableCell>


              
                      



                      

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

export default Exams
