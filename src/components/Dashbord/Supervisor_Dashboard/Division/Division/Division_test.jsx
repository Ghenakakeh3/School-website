





import React, { useEffect, useRef, useState } from 'react'
import { useTranslation } from "react-i18next";
import TabsFillter from '../../../Dashbord_layout/TabsFillter'
import Table from '../../../Dashbord_layout/TableLayout'
import NoData from '../../../Dashbord_layout/NoData/NoData';
import Radio from '../../../../utilities/Radio';
import Button from '../../../../utilities/Button';
import { IoIosAddCircle } from "react-icons/io";
import Add from '../../../Dashbord_layout/Mangment/Add';
import * as Yup from "yup";
import Edit from '../../../Dashbord_layout/Mangment/Edit';

const Division_test = () => {
    const Division_test = [
        {
          ID: "01",
          Name: "العربية لغتي _ الفصل الأول",
          Timing: "مايو 11, 2024 8:00ص",
          Test_type: "فحص",
    
    
        },
        {
            ID: "02",
            Name:"التربية الفنية",
            Timing: "20 /8 /2020 10:00pm",
          Test_type: "مذاكرة",

      
      
          },
          {
            ID: "03",
            Name:"التزبية الدينية الإسلامية",
            Timing: "20 /8 /2020 10:00pm",
          Test_type: "فحص",

      
      
          },   {
            ID: "04",
            Name:" 20 /8 /2020 10:00pm",
            Timing: "20 /8 /2020 10:00pm",
          Test_type: "فحص",
            
      
          },   {
            ID: "05",
            Name:" الموسيقية",
            Timing: "20 /8 /2020 10:00pm",
          Test_type: "مذاكرة",
            
      
          },   {
            ID: "06",
            Name:"العلوم _الفصل الأول",
            Timing: "20 /8 /2020 10:00pm",
          Test_type: " مذاكرة",
            
      
          },   {
            ID: "07",
            Name:"الدراسات الاجتماعية",
            Timing: "20 /8 /2020 10:00pm",
          Test_type: "مذاكرة ",
                  
      
          },
          {
            ID: "08",
            Name:"اللغة والانكليزية  ",
            Timing: "20 /8 /2020 10:00pm",
          Test_type: "مذاكرة",

      
      
          },
          
   
          
          
      ];
    const[data,setdata]=useState(Division_test)
    const { t } = useTranslation("global");
    const[valueRadio,setValueRadio]=useState(null)
    const[add_Division_test,setadd_Division_test]=useState(false)
    const AddRef=useRef(null)
    const[edit_content,set_edit_content]=useState({})
    const [EditDate, setEditDate] = useState(new Date());
   
    const[Edit_active,setEdit_active]=useState(false)
  


  
     useEffect(()=>{

      setEditDate(edit_content.Timing)
      
     },[Edit_active])
  const columns = [
    t("Division_Supervisor_dash.Division_test.0") ,
    t("Division_Supervisor_dash.Division_test.1") ,
    t("Division_Supervisor_dash.Division_test.2") ,
    t("Division_Supervisor_dash.Division_test.3") ,
    t("Division_Supervisor_dash.Division_test.4") ,






  ];

  const radioItems = [
    { value: t("Division_Supervisor_dash.Division_test_filter.0"), label: t("Division_Supervisor_dash.Division_test_filter.0")},
    { value: t("Division_Supervisor_dash.Division_test_filter.1"), label: t("Division_Supervisor_dash.Division_test_filter.1") },
  ];

  const formConfig_Add = {
    info :[
     { title:  t("Division_Supervisor_dash.Division_test.5")},
    {descrption: t("Division_Supervisor_dash.Division_test.6")},
    { button_content:t("Division_Supervisor_dash.Division_test.5") }
    ],
           
    fields: [

      {
        name: "Subject_Name",
        label: t("Division_Supervisor_dash.Division_test.1"),
        img: "<MdOutlineDriveFileRenameOutline />",
        type: "input",
        inputType: "text",
        component: "input",

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
     
      // Add more fields as needed
    ],
    initialValues : {
      Subject_Name: "",
      Timing: "",
      Test_type: "",
  
  
      // Initialize other fields
    },

        validationSchema: {
      Subject_Name: Yup.string().min(3,t("Division_Supervisor_dash.Division_test.11") ).max(50,t("Division_Supervisor_dash.Division_test.10")).required(t("Division_Supervisor_dash.Division_test.9")),
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
  return (
<div className='relative'>
{add_Division_test ? (
            <Add
            formConfig={formConfig_Add}
              ref={AddRef}  
              add_active={add_Division_test}
              set_add_active={setadd_Division_test}
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
         <div className='flex  items-center gap-5'>
         <Radio     
               value={valueRadio}
          onChange={handleChange_valueRadio} 
          name="" 
          items={radioItems}/>
            </div>
  </div>

            <div className=''>
     
     <Button  className="flex bg-success items-center gap-2 " onClick={()=>{setadd_Division_test(true)}}>{ t("Division_Supervisor_dash.Division_test.5") } <IoIosAddCircle /> </Button>
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

export default Division_test
