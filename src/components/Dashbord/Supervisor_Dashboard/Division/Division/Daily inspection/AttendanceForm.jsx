// AttendanceForm.js
import React, { useState } from 'react';
import Dropdown from '../../../../../utilities/Dropdown';
import { useTranslation } from "react-i18next";
import { Arrow_dropdown } from '../../../../../utilities/Icons';
import { InputDate } from '../../../../../utilities/Inputs';
import Button from '../../../../../utilities/Button';
import { IoIosAddCircle } from 'react-icons/io';
import { json, useParams } from 'react-router-dom';
import { StudentQuery } from '../../../../../../API/Students/StudentsQueries';
import DynamicForm from '../../../../Dashbord_layout/Mangment/D_inputs';
import * as Yup from "yup";

const AttendanceForm = ({ students, onAttendance,SectionId }) => {
  const { t } = useTranslation("global");

  const [selectedStudent, setSelectedStudent] = useState(students[0]?.name || '');
  const today = new Date()
  const [date, setDate] = useState(JSON.stringify(today));
  const [status, setStatus] = useState(t("Division_Supervisor_dash.Daily_inspection.5"));
  const { isLoading, data: Students, isFetched: FetchedStudents, isError, error } = StudentQuery.GetStudentBySectionnQuery(SectionId)

  console.log(Students  )
  
  const state=[
    {id:1,name:t("Division_Supervisor_dash.Daily_inspection.5")},
    {id:2,name:t("Division_Supervisor_dash.Daily_inspection.6")}
  
  ]

  const handleSubmit = (e) => {
    e.preventDefault();
    onAttendance(selectedStudent, date, status);
 

   
  };
const handleChange_student_option =(value) => {

  setSelectedStudent(value.name)
  
}
const handleChange_state_option=(value) => {


  setStatus(value.name)
}
const handleDateChange=(value) => {

  
   const DateTostring= JSON.stringify(value) 
 
  setDate(DateTostring)
  
}
const formConfig_Add = {
  info: [
    { title:"" },
    { descrption: "" },
    { button_content: t("Division_Supervisor_dash.Behvier_notification.0") }
  ],

  fields: [
    {
      name: "studentsName",
      label: t("Class_Admin_dash.Class.3"),

      type: "Dropdown",
      inputType: "text",
      component: "Dropdown",
      options: Students,
      onChange: handleChange_student_option

    },




    {
      name: "Resone",
      label: t("Division_Supervisor_dash.Behvier_notification.2"),
      type: "date",
      inputType: "text",
      component: "input",


    },

    {
      name: "state",
      label: t("Class_Admin_dash.Class.3"),
      type: "Dropdown",
      inputType: "text",
      component: "Dropdown",
      options: state,
      onChange: handleChange_state_option

    },

    // Add more fields as needed
  ],
  initialValues: {
    studentName: "",
    Resone:"",
    state: "",





    // Initialize other fields
  },

  validationSchema: {
    studentName: Yup.string().required(),
    state: Yup.string().required(t("")),
    Resone: Yup.string().required(t("")),



  }

};



  return (
    <div >
         <DynamicForm
                formConfig={formConfig_Add}
                initialValues={formConfig_Add.initialValues}
                onSubmit={handleSubmit}
              />

    
     

      
    </div>
  );
};

export default AttendanceForm;







{/* <form onSubmit={handleSubmit} className=' flex justify-between items-center '>
       
         
<Dropdown
// value,
label={t("Division_Supervisor_dash.Daily_inspection.1")}
options={Students}
onChange={handleChange_student_option}
icon={Arrow_dropdown}
showSlected={true}
ulClassname={"w-full "}
classNameIcon=""
className="sm:w-[12rem] w-[7rem] ease-in-out  border-b-[1px]   border-b-myGray-100 active:border-b-primary focus-within:border-b-primary duration-150"
/>


{/* <div>
<InputDate
handleDateChange={handleDateChange}
/>
</div> */}
{/* <Dropdown
// value,
label={t("Division_Supervisor_dash.Daily_inspection.3")}
options={state}
onChange={handleChange_state_option}
icon={Arrow_dropdown}
showSlected={true}
ulClassname={"w-full "}
classNameIcon=""
className="sm:w-[12rem] w-[7rem] ease-in-out  border-b-[1px]   border-b-myGray-100 active:border-b-primary focus-within:border-b-primary duration-150"
/>



<Button type="submit" className="flex bg-success items-center gap-2 " >{t("Division_Supervisor_dash.Daily_inspection.7")} <IoIosAddCircle /> </Button>

</form> */} 