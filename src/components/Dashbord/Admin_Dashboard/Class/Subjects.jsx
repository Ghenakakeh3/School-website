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

const Subjects = () => {
    const Subjects = [
        {
          ID: "01",
          Name: "العربية لغتي _ الفصل الأول",
          Number_of_classes: "6",
          Subject_teacher: "هادي الهادي",
    
    
        },
        {
            ID: "02",
            Name:"التربية الفنية",
            Number_of_classes: "6",
          Subject_teacher: " رامي حسون",

      
      
          },
          {
            ID: "03",
            Name:"التزبية الدينية الإسلامية",
            Number_of_classes: "6",
          Subject_teacher: "لانا العلي ",

      
      
          },   {
            ID: "04",
            Name:"الرياضيات الفصل الأول",
            Number_of_classes: "6",
          Subject_teacher: "فراس الأحمر ",
            
      
          },   {
            ID: "05",
            Name:"التربية الموسيقية",
            Number_of_classes: "6",
          Subject_teacher: " سنا الرومي",
            
      
          },   {
            ID: "06",
            Name:"العلوم _الفصل الأول",
            Number_of_classes: "6",
          Subject_teacher: " ماجدة الورد",
            
      
          },   {
            ID: "07",
            Name:"الدراسات الاجتماعية",
            Number_of_classes: "6",
          Subject_teacher: "سهام ضبيط ",
                  
      
          },
          {
            ID: "08",
            Name:"اللغة والانكليزية  ",
            Number_of_classes: "6",
          Subject_teacher: "لانا العلي  ",

      
      
          },
          
   
          
          
      ];
    const[data,setdata]=useState(Subjects)
    const { t } = useTranslation("global");
    const[valueRadio,setValueRadio]=useState(null)
    const[add_Subjects,setadd_Subjects]=useState(false)
    const AddRef=useRef(null)
    
    const[Edit_active,setEdit_active]=useState(false)
    
    const[edit_content,set_edit_content]=useState({})



  
     
  const columns = [
    t("Class_Admin_dash.Subjects.0") ,
    t("Class_Admin_dash.Subjects.1") ,
    t("Class_Admin_dash.Subjects.2") ,
    t("Class_Admin_dash.Subjects.3") ,
    t("Class_Admin_dash.Subjects.4") ,






  ];
  const radioItems = [
    { value: t("Class_Admin_dash.Subjects_filter.0"), label: t("Class_Admin_dash.Subjects_filter.0")},
    { value: t("Class_Admin_dash.Subjects_filter.1"), label: t("Class_Admin_dash.Subjects_filter.1") },
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
{add_Subjects ? (
            <Add
            formConfig={formConfig_Add}
              ref={AddRef}  
              add_active={add_Subjects}
              set_add_active={setadd_Subjects}
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
              {data.length} record
            </span>
         <div className='flex  items-center gap-5'>
         <Radio     
               value={valueRadio}
          onChange={handleChange_valueRadio} 
          name="" 
          items={radioItems}/>
            </div>
  </div>

            <div className=''>
     
     <Button  className="flex bg-success items-center gap-2 " onClick={()=>{setadd_Subjects(true)}}>{ t("Class_Admin_dash.Subjects.5") } <IoIosAddCircle /> </Button>
     </div>
</div>
       

</TabsFillter>
{data.length >= 1 ? (
    <Table
      columns={columns}
      rows={data}
      handleEdit={handleEdit}
      // handleDelte={handleDelte}
      action={{delete: true,update: true }}
      className={"min-h-screen px-6 pt-2"}
      RowlinK={false}
    />
  ) : (
    <NoData ></NoData>
  )}
</div>
  )
}

export default Subjects
