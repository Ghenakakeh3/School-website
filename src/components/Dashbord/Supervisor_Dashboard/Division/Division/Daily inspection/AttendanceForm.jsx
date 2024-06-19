// AttendanceForm.js
import React, { useState } from 'react';
import Dropdown from '../../../../../utilities/Dropdown';
import { useTranslation } from "react-i18next";
import { Arrow_dropdown } from '../../../../../utilities/Icons';
import { InputDate } from '../../../../../utilities/Inputs';
import Button from '../../../../../utilities/Button';
import { IoIosAddCircle } from 'react-icons/io';
import { json } from 'react-router-dom';

const AttendanceForm = ({ students, onAttendance }) => {
  const { t } = useTranslation("global");

  const [selectedStudent, setSelectedStudent] = useState(students[0]?.name || '');
  const today = new Date()
  const [date, setDate] = useState(JSON.stringify(today));
  const [status, setStatus] = useState(t("Division_Supervisor_dash.Daily_inspection.5"));
  
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



  return (
    <div >
    
      <form onSubmit={handleSubmit} className=' flex justify-between items-center '>
       
         
               <Dropdown
        // value,
        label={t("Division_Supervisor_dash.Daily_inspection.1")}
        options={students}
        onChange={handleChange_student_option}
        icon={Arrow_dropdown}
        showSlected={true}
        ulClassname={"w-full "}
        classNameIcon=""
        className="sm:w-[12rem] w-[7rem] ease-in-out  border-b-[1px]   border-b-myGray-100 active:border-b-primary focus-within:border-b-primary duration-150"
      />

       
<div>
    <InputDate
    handleDateChange={handleDateChange}
    />
    </div>
        <Dropdown
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
         
      </form>
    </div>
  );
};

export default AttendanceForm;