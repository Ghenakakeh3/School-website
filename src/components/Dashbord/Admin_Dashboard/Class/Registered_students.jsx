


import React, { useRef, useState } from 'react'
import { useTranslation } from "react-i18next";
import TabsFillter from '../../Dashbord_layout/TabsFillter'
import Table from '../../Dashbord_layout/TableLayout'
import NoData from '../../Dashbord_layout/NoData/NoData';
import Radio from '../../../utilities/Radio';
import Button from '../../../utilities/Button';
import { IoIosAddCircle } from "react-icons/io";

import { IoIosAddCircleOutline } from "react-icons/io";

import Add_acount from '../../Dashbord_layout/Mangment/Acount_mangment/Add_acount';
import Add from '../../Dashbord_layout/Mangment/Add';
import * as Yup from "yup";
import Edit from '../../Dashbord_layout/Mangment/Edit';
import { SearchBar } from '../../../utilities/SearchBar/SearchBar';
import { SearchResultsList } from '../../../utilities/SearchBar/SearchResultsList';

const Registered_students = () => {
    const Registered_students = [
        {
          ID: "01",
            Full_Name: "غنى ماهر كعكة",
            Number_of_marks: "10",
            date_of_registration: "1/1/2001",
            Number_of_days_of_attendance: "30",
            Attendance_rate: "70%",
    
    
        },
        {
          ID: "02",
            Full_Name: "مريم عبد الباري",
            Number_of_marks: "10",
            date_of_registration: "12/3/2001",
            Number_of_days_of_attendance: "45",
            Attendance_rate: "90%",

      
      
          },
          {
            ID: "03",
            Full_Name: "لارا إدلبي حجي",
            Number_of_marks: "10",
            date_of_registration: "7/2/2001",
            Number_of_days_of_attendance: "42",
            Attendance_rate: "85%",

      
      
          }, 
            {
              ID: "04",
            Full_Name: "زين مكي",
            Number_of_marks: "10",
            date_of_registration: "7/2/2001",
            Number_of_days_of_attendance: "40",
            Attendance_rate: "70%",
            
      
          },  
           {
            ID: "05",
            Full_Name: "سلام الجنيدي",
            Number_of_marks: "10",
            date_of_registration: "7/2/2001",
            Number_of_days_of_attendance: "42",
            Attendance_rate: "85%",
            
      
          }, 
         
   
          
          
      ];
    const[data,setdata]=useState(Registered_students)
    const { t } = useTranslation("global");
    const[add_Registered_students,setadd_Registered_students]=useState(false)
    const AddRef=useRef(null)
    const[Edit_active,setEdit_active]=useState(false)
    const[edit_content,set_edit_content]=useState({})
    const [results, setResults] = useState([]);
    const [selected_result, setselected_result] = useState("");
    



  
     
  const columns = [
    t("Class_Admin_dash.Registered_students.0") ,
    t("Class_Admin_dash.Registered_students.1") ,
    t("Class_Admin_dash.Registered_students.2") ,
    t("Class_Admin_dash.Registered_students.3") ,
    t("Class_Admin_dash.Registered_students.4") ,
    t("Class_Admin_dash.Registered_students.5") ,







  ];


  const formConfig_Add = {
    info :[
     { title:  t("Class_Admin_dash.Subjects.5")},
    {descrption: t("Class_Admin_dash.Subjects.6")},
    { button_content:t("Class_Admin_dash.Subjects.7") }
    ],
           
    fields: [

      {
        name: "Subject_Name",
        label: t("Class_Admin_dash.Subjects.1"),
        img: "<MdOutlineDriveFileRenameOutline />",
        type: "input",
        inputType: "text",
        component: "input",

      },
      {
        name: "Number_of_classes",
        label: t("Class_Admin_dash.Subjects.2"),
        img: "<PiUser />",
        type: "input",
        inputType: "number",
        component: "input",


      },
  
      {
        name: "Subject_teacher",
        label: t("Class_Admin_dash.Subjects.3"),
        img:"showpass ? <FaRegEye /> : <FaEyeSlash />" ,
        type: "input",
        inputType: "text" ,
        component: "input",


      },
     
      // Add more fields as needed
    ],

        validationSchema: {
          Subject_Name: Yup.string().min(3,t("Class_Admin_dash.Subjects.11") ).max(12,t("Class_Admin_dash.Subjects.12")).required(t("Class_Admin_dash.Subjects.8")),

      Number_of_classes: Yup.number().required(t("Class_Admin_dash.Subjects.10")).min(0, t("Class_Admin_dash.Subjects.13")),
      Subject_teacher: Yup.string().min(3, (t("Class_Admin_dash.Subjects.14"))).required(t("Class_Admin_dash.Subjects.9")),


    }
    
  };
  const formConfig_Edit = {
    info :[
     { title:  t("Class_Admin_dash.Subjects.15")},
    {descrption: t("Class_Admin_dash.Subjects.16")},
    { button_content:t("Class_Admin_dash.Subjects.15") }
    ],
           
    fields: [

      {
        name: "Subject_Name",
        label: t("Class_Admin_dash.Subjects.1"),
        img: "<MdOutlineDriveFileRenameOutline />",
        type: "input",
        inputType: "text",
        component: "input",
        value: edit_content.Name
      },
      {
        name: "Number_of_classes",
        label: t("Class_Admin_dash.Subjects.2"),
        img: "<PiUser />",
        type: "input",
        inputType: "number",
        component: "input",
        value: edit_content.Number_of_classes

      },
  
      {
        name: "Subject_teacher",
        label: t("Class_Admin_dash.Subjects.3"),
        img:"showpass ? <FaRegEye /> : <FaEyeSlash />" ,
        type: "input",
        inputType: "text" ,
        component: "input",
        value:  edit_content.Subject_teacher

      },
     
      // Add more fields as needed
    ],

        validationSchema: {
          Subject_Name: Yup.string().min(3,t("Class_Admin_dash.Subjects.11") ).max(12,t("Class_Admin_dash.Subjects.12")).required(t("Class_Admin_dash.Subjects.8")),

      Number_of_classes: Yup.number().required(t("Class_Admin_dash.Subjects.10")).min(0, t("Class_Admin_dash.Subjects.13")),
      Subject_teacher: Yup.string().min(3, (t("Class_Admin_dash.Subjects.14"))).required(t("Class_Admin_dash.Subjects.9")),


    }
    
  };
 const handleEdit=(ID)=>{

  const Edit_clicKed=data.find((ob,id)=>{
    setEdit_active(!Edit_active);
    return ob.ID === ID
  })
  set_edit_content(Edit_clicKed)


}
  return (
<div className='relative'>
{add_Registered_students ? (
            <Add
            formConfig={formConfig_Add}
              ref={AddRef}  
              add_active={add_Registered_students}
              set_add_active={setadd_Registered_students}
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
              {data.length} {t("home_Admin_dash.record.0")}
            </span>


            <div className="search-bar-container relative ">
        <SearchBar setResults={setResults} selected_result={selected_result} placeholder={ t("Class_Admin_dash.Registered_students.1") } />
        {results && results.length > 0 && <SearchResultsList results={results} setselected_result={setselected_result} />}
      </div>
   
  </div>

     
</div>
       

</TabsFillter>
{data.length >= 1 ? (
    <Table
      columns={columns}
      rows={data}
      handleEdit={handleEdit}
      // handleDelte={handleDelte}
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

export default Registered_students

