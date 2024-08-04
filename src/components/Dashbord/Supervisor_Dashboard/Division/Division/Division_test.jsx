





import React, { useEffect, useRef, useState } from 'react'
import { useTranslation } from "react-i18next";
import TabsFillter from '../../../Dashbord_layout/TabsFillter'
import NoData from '../../../Dashbord_layout/NoData/NoData';
import Radio from '../../../../utilities/Radio';
import Button from '../../../../utilities/Button';
import { IoIosAddCircle } from "react-icons/io";
import Add from '../../../Dashbord_layout/Mangment/Add';
import * as Yup from "yup";
import Edit from '../../../Dashbord_layout/Mangment/Edit';
import { ExamQuery } from '../../../../../API/Exam/ExamQuery ';
import { useParams } from 'react-router-dom';
import { TableCell, TableHeader, TableRow,Table } from '../../../Dashbord_layout/Table';
import Loading from '../../../../utilities/Loading/Loading';
import { TeatcherQuery } from '../../../../../API/Teatchers/TeatchersQueries';

const Division_test = () => {
 

    const { t } = useTranslation("global");
    const[teachers,setteachers]=useState([])
    const[teacher_selected,setTeacher_selected]=useState({})
    const[valueRadio,setValueRadio]=useState(null)
    const[add_Division_test,setadd_Division_test]=useState(false)
    const AddRef=useRef(null)
    const[edit_content,set_edit_content]=useState({})
    const [EditDate, setEditDate] = useState(new Date());
   
    const[Edit_active,setEdit_active]=useState(false)
    const { id }=useParams()
  
    const TableHeaderArray = [

      t("Class_Admin_dash.Exams.0") ,
      t("Class_Admin_dash.Exams.1") ,
      "اسم الاختبار",

      t("Class_Admin_dash.Exams.2") ,
      t("Class_Admin_dash.Exams.3") ,
      // t("Class_Admin_dash.Exams.4") ,
  
  
  
  
  
  
    ];
    const { isLoading, data: Exam, isFetched: FetchedExam, isError, error } = ExamQuery.GetExamsBySection(id)
    const {  data: Teachers, isFetched: FetchedTeachers } = TeatcherQuery.GetTeachersQuery_with_name()
  const { mutate: add_test ,isSuccess } = ExamQuery.AddExam()
console.log(Exam)
  
  


  
     useEffect(()=>{
      setteachers(Teachers?.data)
      // setEditDate(edit_content.Timing)
      
     },[FetchedTeachers])


   
  const handleChange_Teachers_Add = (value) => {
console.log(value)
setTeacher_selected(value)



  };
  const formConfig_Add = {
    info :[
     { title:  t("Division_Supervisor_dash.Division_test.5")},
    {descrption: t("Division_Supervisor_dash.Division_test.6")},
    { button_content:t("Division_Supervisor_dash.Division_test.5") }
    ],
           
    fields: [

      {
        name: "test_Name",
        label: "اسم الاختبار",
        img: "<MdOutlineDriveFileRenameOutline />",
        type: "input",
        inputType: "text",
        component: "input",

      },
      {
        name: "teacher_Name",
        label: "مدرس المادة ",
        img: "<MdOutlineDriveFileRenameOutline />",
        type: "Dropdown",
        inputType: "text",
        component: "Dropdown",
        options: Teachers ,
        onChange: handleChange_Teachers_Add,
        isFetched: FetchedTeachers


      },
      {
        name: "Timing",
        label: t("Division_Supervisor_dash.Division_test.2"),
        img: "<PiUser />",
        type: "date",
        inputType: "text",
        component: "input",


      },
  
      {
        name: "Test_type",
        label: t("Division_Supervisor_dash.Division_test.3"),
        type: "radio",
        inputType: "text" ,
        component: "radio",
        options: [
            {value : t("Division_Supervisor_dash.Division_test.7"), name:"chapter one" ,label: t("Division_Supervisor_dash.Division_test.7")},
            {value : t("Division_Supervisor_dash.Division_test.8"), name:"chapter Second" ,label: t("Division_Supervisor_dash.Division_test.8")}

        
        ],


      },
     

    ],
    initialValues : {
      teacher_Name:"",
      Timing: "",
      Test_type: "",
  
  
      // Initialize other fields
    },

        validationSchema: {
      test_Name: Yup.string().required("اسم الاختبار مطلوب !"),
      Timing: Yup.date().required(t("Division_Supervisor_dash.Division_test.13")),
      Test_type: Yup.string().required(t("Division_Supervisor_dash.Division_test.12")),


    }
    
  };
  const formConfig_Edit = {
    info :[
     { title:  t("Division_Supervisor_dash.Division_test.14")},
    {descrption: t("Division_Supervisor_dash.Division_test.15")},
    { button_content:t("Division_Supervisor_dash.Division_test.14") }
    ],
           
    fields: [

      {
        name: "Subject_Name",
        label: t("Division_Supervisor_dash.Division_test.1"),
        img: "<MdOutlineDriveFileRenameOutline />",
        type: "input",
        inputType: "text",
        component: "input",
        // value: edit_content.Name
      },
      {
        name: "Timing",
        label: t("Division_Supervisor_dash.Division_test.2"),
        img: "<PiUser />",
        type: "date",
        inputType: "date",
        component: "input",
        // value: edit_content.Timing

      },
  
      {
        name: "Test_type",
        label: t("Division_Supervisor_dash.Division_test.3"),
        img:"showpass ? <FaRegEye /> : <FaEyeSlash />" ,
        type: "radio",
        inputType: "text" ,
        // value:  edit_content.Test_type,
        component: "radio",
        options: [
            {value : "Exam" ,name: "Exam" ,label: t("Division_Supervisor_dash.Division_test.7")},
            {value : "Test", name: "testt" ,label: t("Division_Supervisor_dash.Division_test.8")}

        
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
          Subject_Name: Yup.string().min(3,t("Division_Supervisor_dash.Division_test.11") ).max(50,t("Division_Supervisor_dash.Division_test.10")).required(t("Division_Supervisor_dash.Division_test.9")),
          Timing: Yup.date().required(t("Division_Supervisor_dash.Division_test.13")),
          Test_type: Yup.string().required(t("Division_Supervisor_dash.Division_test.12")),


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

const handleAddSubmit = (values, { setSubmitting }) => {
  console.log(values)
  const newTest={
  "name": values.test_Name,
  "type": values.Test_type === "مذاكرة" ? 1 :0,
  "date": values.Timing,
  "teatcherId": teacher_selected.id,
  "sectionId": id
}
add_test(newTest)






};
  return (
<div className='relative'>
{add_Division_test ? (
            <Add
            formConfig={formConfig_Add}
              ref={AddRef}  
              add_active={add_Division_test}
              set_add_active={setadd_Division_test}
              handleSubmit={handleAddSubmit}
          


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
         
  </div>

            <div className=''>
     
     <Button  className="flex bg-success items-center gap-2 " onClick={()=>{setadd_Division_test(true)}}>{ t("Division_Supervisor_dash.Division_test.5") } <IoIosAddCircle /> </Button>
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
                 
                  Exam?.data?.map((Exam,index)=>{
                    const date = new Date(Exam.date)
                    
                  
                    return(
                    
                    
                    <TableRow
                    key={index}
                    className={
                      ""
                    }
                    rowIndex={index}
                  >
                       
                       <TableCell className=" ">{index +1}</TableCell>

                      <TableCell className=" ">{Exam.material.name }</TableCell>
                      <TableCell className=" ">{Exam.name }</TableCell>

                      <TableCell className=" ">{date.getDate()}-{date.getUTCMonth() + 1}-{date.getUTCFullYear()}  : {date.getHours()} :{date.getMinutes()}</TableCell>
                      <TableCell className=" ">{Exam.type === 0 ?"فحص" : "مذاكرة" }</TableCell>


              
                      



                      

                      </TableRow>

                  )})
                  
                  
                 
                
                 


                   
                
                )

                )
              }


            </tbody>
          </Table>
        </div>
</div>
  )
}

export default Division_test
