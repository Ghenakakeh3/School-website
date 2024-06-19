
import React, { useRef, useState } from 'react'
import { useTranslation } from "react-i18next";
import TabsFillter from '../../../Dashbord_layout/TabsFillter'
import Table from '../../../Dashbord_layout/TableLayout'
import NoData from '../../../Dashbord_layout/NoData/NoData';
import Radio from '../../../../utilities/Radio';
import Button from '../../../../utilities/Button';
import { IoIosAddCircle } from "react-icons/io";
import arrowIcon from "../../../../../assets/icons/arrowDropdown.svg";
import Add from '../../../Dashbord_layout/Mangment/Add';
import * as Yup from "yup";
import Edit from '../../../Dashbord_layout/Mangment/Edit';

const Division_Subject_marks = () => {
  const Division_Subject_marks = [
    {
      ID: "01",
      Student_Name: "العربية لغتي _ الفصل الأول",
      Subject_Name: "6",
      Timing: "2023-12-01",
      mark: 66,


    },
    {
      ID: "02",
      Student_Name: "العربية لغتي _ الفصل الأول",
      Subject_Name: "6",
      Timing: "2023-12-01",
      mark: 66,


    }, {
      ID: "03",
      Student_Name: "العربية لغتي _ الفصل الأول",
      Subject_Name: "6",
      Timing: "2023-12-01",
      mark: 66,


    }, {
      ID: "04",
      Student_Name: "العربية لغتي _ الفصل الأول",
      Subject_Name: "6",
      Timing: "2023-12-01",
      mark: "هادي الهادي",


    }, {
      ID: "05",
      Student_Name: "العربية لغتي _ الفصل الأول",
      Subject_Name: "6",
      Timing:"2023-12-01",
      mark: "هادي الهادي",


    }, 





  ];
 
  const { t } = useTranslation("global");
  const [valueRadio, setValueRadio] = useState(null)
  const EditRef = useRef(null)
  const [Edit_active, setEdit_active] = useState(false)
  const [add_active, set_add_active] = useState(false)
  
  const [startDate, setStartDate] = useState(new Date());

  const [edit_content, set_edit_content] = useState({})
  // Convert Timing to Date objects
const convertTimingToDate = (data) => {
  return data.map(item => ({
    ...item,
    Timing: new Date(item.Timing)
  }));
};
const [data, setData] = useState(convertTimingToDate(Division_Subject_marks));
  const options_Add_Class = [
    { name: t("Class_Admin_dash.Class_filter.1") },
    { name: t("Class_Admin_dash.Class_filter.2") },
    { name: t("Class_Admin_dash.Class_filter.3") },
    { name: t("Class_Admin_dash.Class_filter.4") },
    { name: t("Class_Admin_dash.Class_filter.5") },
    { name: t("Class_Admin_dash.Class_filter.6") }



  ]
  const handleChange_Class_Add_Dropdown = (value) => {




  };






  const columns = [
    t("Division_Supervisor_dash.Division_Subject_marks.0"),
    t("Division_Supervisor_dash.Division_Subject_marks.1"),
    t("Division_Supervisor_dash.Division_Subject_marks.2"),
    t("Division_Supervisor_dash.Division_Subject_marks.3"),
    t("Division_Supervisor_dash.Division_Subject_marks.4"),
    t("Division_Supervisor_dash.Division_Subject_marks.5"),







  ];
  const radioItems = [
    { value: t("Division_Supervisor_dash.Division_Subject_marks_filter.0"), label: t("Division_Supervisor_dash.Division_Subject_marks_filter.0") },
    { value: t("Division_Supervisor_dash.Division_Subject_marks_filter.1"), label: t("Division_Supervisor_dash.Division_Subject_marks_filter.1") },
  ];
    const formConfig_Add={
      info: [
        { title: t("Division_Supervisor_dash.Division_add_Subject_marks.4") },
        { descrption: t("Division_Supervisor_dash.Division_add_Subject_marks.5") },
        { button_content: t("Division_Supervisor_dash.Division_add_Subject_marks.4") }
      ],
  
      fields: [
  
        {
          name: "Student_Name",
          label: t("Division_Supervisor_dash.Division_edit_Subject_marks.0"),
          img: "<MdOutlineDriveFileRenameOutline />",
          type: "",
          inputType: "text",
          component: "input",
        },
        {
          name: "Subject_Name",
          label: t("Division_Supervisor_dash.Division_edit_Subject_marks.1"),
          img: arrowIcon,
          type: "Dropdown",
          inputType: "text",
          component: "Dropdown",
          options: options_Add_Class,
          onChange :handleChange_Class_Add_Dropdown,
  
  
  
  
        },
  
        {
          name: "Timing",
          label: t("Division_Supervisor_dash.Division_edit_Subject_marks.2"),
          img: "showpass ? <FaRegEye /> : <FaEyeSlash />",
          type: "date",
          inputType: "text",
          component: "input",
    
  
        },
        {
          name: "mark",
          label: t("Division_Supervisor_dash.Division_edit_Subject_marks.3"),
          img: "showpass ? <FaRegEye /> : <FaEyeSlash />",
          type: "input",
          inputType: "number",
          component: "input",
  
  
        },
  
        // Add more fields as needed
      ],
      initialValues: {
        Student_Name: edit_content.Student_Name,
        Subject_Name: edit_content.Subject_Name,
        Timing: edit_content.Timing,
        mark: edit_content.mark,
  
  
  
  
        // Initialize other fields
      },
  
      validationSchema: {
        Student_Name: Yup.string().min(3, t("Division_Supervisor_dash.Division_edit_Subject_marks.8")).max(30, t("Division_Supervisor_dash.Division_edit_Subject_marks.7")).required(t("Division_Supervisor_dash.Division_edit_Subject_marks.9")),
        Timing: Yup.string().required(t("Division_Supervisor_dash.Division_edit_Subject_marks.10")),
        mark: Yup.number().required(t("Division_Supervisor_dash.Division_edit_Subject_marks.11")).min(0,t("Division_Supervisor_dash.Division_edit_Subject_marks.12")).max(100,t("Division_Supervisor_dash.Division_edit_Subject_marks.12")),
  
  
      }
  
    };


  const formConfig_Edit = {
    info: [
      { title: t("Division_Supervisor_dash.Division_edit_Subject_marks.5") },
      { descrption: t("Division_Supervisor_dash.Division_edit_Subject_marks.6") },
      { button_content: t("Division_Supervisor_dash.Division_edit_Subject_marks.5") }
    ],

    fields: [

      {
        name: "Student_Name",
        label: t("Division_Supervisor_dash.Division_edit_Subject_marks.0"),
        img: "<MdOutlineDriveFileRenameOutline />",
        type: "",
        inputType: "text",
        component: "input",
      },
      {
        name: "Subject_Name",
        label: t("Division_Supervisor_dash.Division_edit_Subject_marks.1"),
        img: arrowIcon,
        type: "Dropdown",
        inputType: "text",
        component: "Dropdown",
        options: options_Add_Class,
        onChange :handleChange_Class_Add_Dropdown,




      },

      {
        name: "Timing",
        label: t("Division_Supervisor_dash.Division_edit_Subject_marks.2"),
        img: "showpass ? <FaRegEye /> : <FaEyeSlash />",
        type: "date",
        inputType: "text",
        component: "input",
  

      },
      {
        name: "mark",
        label: t("Division_Supervisor_dash.Division_edit_Subject_marks.3"),
        img: "showpass ? <FaRegEye /> : <FaEyeSlash />",
        type: "input",
        inputType: "number",
        component: "input",


      },

      // Add more fields as needed
    ],
    initialValues: {
      Student_Name: edit_content.Student_Name,
      Subject_Name: edit_content.Subject_Name,
      Timing: edit_content.Timing,
      mark: edit_content.mark,




      // Initialize other fields
    },

    validationSchema: {
      Student_Name: Yup.string().min(3, t("Division_Supervisor_dash.Division_edit_Subject_marks.8")).max(30, t("Division_Supervisor_dash.Division_edit_Subject_marks.7")).required(t("Division_Supervisor_dash.Division_edit_Subject_marks.9")),
      Timing: Yup.string().required(t("Division_Supervisor_dash.Division_edit_Subject_marks.10")),
      mark: Yup.number().required(t("Division_Supervisor_dash.Division_edit_Subject_marks.11")).min(0,t("Division_Supervisor_dash.Division_edit_Subject_marks.12")).max(100,t("Division_Supervisor_dash.Division_edit_Subject_marks.12")),


    }

  };

  const handleChange_valueRadio = (value) => {
    setValueRadio(value)
  }
  const handleEdit = (ID) => {
    const Edit_clicKed = data.find((ob) => ob.ID === ID)
    if (Edit_clicKed) {
      set_edit_content(Edit_clicKed)
      setEdit_active(true)
    }

    // const Edit_clicKed = data.find((ob, id) => {
    //   setEdit_active(!Edit_active);
    //   return ob.ID === ID
    // })
    // set_edit_content(Edit_clicKed)


  }
  return (
    <div className='relative'>

{add_active ? (
            <Add
            formConfig={formConfig_Add} 
              add_active={add_active}
              set_add_active={set_add_active}
         


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
          set_data={setData}
          ref={EditRef}


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
                items={radioItems} />
            </div>

          </div>

          <div className=''>
     
     <Button  className="flex bg-success items-center gap-2 " onClick={()=>{set_add_active(true)}}>{t("Division_Supervisor_dash.Division_add_Subject_marks.4")} <IoIosAddCircle /> </Button>
     </div>


        </div>


      </TabsFillter>
      {data.length >= 1 ? (
        <Table
          columns={columns}
          rows={Division_Subject_marks}
          handleEdit={handleEdit}
          // handleDelte={handleDelte}
          action={{ delete: true, update: true }}
          className={"min-h-screen px-6 pt-2"}
          RowlinK={false}
        />
      ) : (
        <NoData ></NoData>
      )}
    </div>
  )
}

export default Division_Subject_marks

