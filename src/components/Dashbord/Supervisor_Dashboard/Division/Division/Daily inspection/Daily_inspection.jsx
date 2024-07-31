
import AttendanceForm from './AttendanceForm'
import React, { useRef, useState } from 'react'
import { useTranslation } from "react-i18next";
import TabsFillter from '../../../../Dashbord_layout/TabsFillter'
import Table from '../../../../Dashbord_layout/TableLayout'
import NoData from '../../../../Dashbord_layout/NoData/NoData';
import arrowIcon from "../../../../../../assets/icons/arrowDropdown.svg";
import Add from '../../../../Dashbord_layout/Mangment/Add';
import * as Yup from "yup";
import Edit from '../../../../Dashbord_layout/Mangment/Edit';
import { useParams } from 'react-router-dom';


const 
Daily_inspection = () => {
  const {id} =useParams ()
  

  const [data, setdata] = useState([])
  const { t } = useTranslation("global");
  const [add_active, set_add_active] = useState()
  const [Edit_active, set_Edit_active] = useState(false);
  const [edit_content, set_edit_content] = useState({})
  const [students, setStudents] = useState([
    { id: 1, name: 'علي محمد حسن' },
    { id: 2, name: 'سارة سامي العلي' },
    { id: 3, name: 'عمر حسن حساني' },
  ]);
  const state=[
    {id:1,name:t("Division_Supervisor_dash.Daily_inspection.5")},
    {id:2,name:t("Division_Supervisor_dash.Daily_inspection.6")}
  
  ]
  console.log(edit_content)

  const handleChange_options_Student_name = (value) => {




  };

  const handleChange_option_state = (value) => {

  }

  const columns = [

    t("Division_Supervisor_dash.Daily_inspection.1"),
    t("Division_Supervisor_dash.Daily_inspection.2"),
    t("Division_Supervisor_dash.Daily_inspection.3"),
    t("Division_Supervisor_dash.Daily_inspection.4"),












  ];
  const options_Student_name = [
    { name: t("Class_Admin_dash.Class_filter.1") },
    { name: t("Class_Admin_dash.Class_filter.2") },
    { name: t("Class_Admin_dash.Class_filter.3") },
    { name: t("Class_Admin_dash.Class_filter.4") },
    { name: t("Class_Admin_dash.Class_filter.5") },
    { name: t("Class_Admin_dash.Class_filter.6") }


  ]
  const options_state = [
    { name: "true" },
    { name: "false" }

  ]
  const formConfig_Add = {
    info: [
      { title: t("Division_Supervisor_dash.Behvier_notification.0") },
      { descrption: t("Division_Supervisor_dash.Behvier_notification.1") },
      { button_content: t("Division_Supervisor_dash.Behvier_notification.0") }
    ],

    fields: [
      {
        name: "studentName",
        label: t("Class_Admin_dash.Class.3"),
        img: arrowIcon,
        type: "Dropdown",
        inputType: "text",
        component: "Dropdown",
        options: options_Student_name,
        onChange: handleChange_options_Student_name

      },




      {
        name: "Timing",
        label: t("Division_Supervisor_dash.Behvier_notification.2"),
        img: "showpass ? <FaRegEye /> : <FaEyeSlash />",
        type: "date",
        inputType: "text",
        component: "input",


      },

      {
        name: "state",
        label: t("Class_Admin_dash.Class.3"),
        img: arrowIcon,
        type: "Dropdown",
        inputType: "text",
        component: "Dropdown",
        options: options_state,
        onChange: handleChange_option_state

      },

      // Add more fields as needed
    ],
    initialValues: {
      studentName: "",
      Timing: "",
      state: "",





      // Initialize other fields
    },

    validationSchema: {
      studentName: Yup.string().required(),
      state: Yup.string().required(t("")),
      Timing: Yup.string().required(t("")),



    }

  };
  const formConfig_Edit = {
    info: [
      { title: t("Division_Supervisor_dash.Daily_inspection.8"), },
      { descrption: t("Division_Supervisor_dash.Daily_inspection.9"), },
      { button_content: t("Division_Supervisor_dash.Daily_inspection.8"), }
    ],
    fields: [
      {
        name: "studentName",
        label: t("Class_Admin_dash.Class.3"),
        img: arrowIcon,
        type: "Dropdown",
        inputType: "text",
        component: "Dropdown",
        options: students,
        onChange: handleChange_options_Student_name

      },




      {
        name: "Timing",
        label: t("Division_Supervisor_dash.Behvier_notification.2"),
        img: "showpass ? <FaRegEye /> : <FaEyeSlash />",
        type: "date",
        inputType: "text",
        component: "input",


      },

      {
        name: "state",
        label: t("Class_Admin_dash.Class.3"),
        img: arrowIcon,
        type: "Dropdown",
        inputType: "text",
        component: "Dropdown",
        options: state,
        onChange: handleChange_option_state

      },

      // Add more fields as needed
    ],
    initialValues: {
      studentName: edit_content.studentId,
      Timing:edit_content.date,
      state: edit_content.status,





      // Initialize other fields
    },

    validationSchema: {
      studentName: Yup.string().required(),
      state: Yup.string().required(t("")),
      Timing: Yup.string().required(t("")),



    }

  };
  const handleEdit = (ID) => {

    const Edit_clicKed = data.find((ob, id) => {
      set_Edit_active(!Edit_active);
      return ob.ID === ID
    })
    set_edit_content(Edit_clicKed)


  }

  const handleDelte = (ID) => {

    const f = data.find((ob, id) => {
      set_Edit_active(!Edit_active);
      return ob.ID === ID
    })
    const newRow = rows.filter((row) => {
      return row.ID != ID
    })


    setdata(newRow)


  }
  const handleSubmit = () => {
    console.log("this is submit")
  }
  // **************





  const handleAttendance = (studentId, date, status) => {
    setdata([...data, { studentId, date, status }])


  };

  return (


    <div className='relative bg-white  mt-3 shadow-slate-300 shadow-verfictionShadow rounded-md'>

      {add_active ? (
        <Add
          formConfig={formConfig_Add}
          add_active={add_active}
          set_add_active={set_add_active}
          handleSubmit={handleSubmit}



        />

      ) : (
        ""
      )}
      {Edit_active ? (
        <Edit

          Edit_active={Edit_active}
          set_Edit_active={set_Edit_active}
          formConfig={formConfig_Edit}
          rows={data}
          set_data={setdata}


        />
      ) : (
        ""
      )}



      <TabsFillter>
        {/* <div className='flex  gap-16 items-center w-full '> */}
          {/* <div className='flex gap-10'>
            <span className="ps-2 pe-5 py-1 border-[1px] border-solid border-myGray-100  flex items-center  justify-start rounded-lg   text-myGray-500">
              {data.length} {t("home_Admin_dash.record.0")}
            </span>





          </div> */}
          <div className='w-full'>
            <AttendanceForm students={students} onAttendance={handleAttendance} SectionId={id }/>
          </div>
  


        {/* </div> */}


      </TabsFillter>

      {data.length >= 1 ? (
        <Table
          columns={columns}
          rows={data}
          handleEdit={handleEdit}
          handleDelte={handleDelte}
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

export default Daily_inspection
