// AttendanceForm.js
import React, { useState } from 'react';
import Dropdown from '../../../../../utilities/Dropdown';
import { useTranslation } from "react-i18next";
import { Arrow_dropdown } from '../../../../../utilities/Icons';
import { InputDate } from '../../../../../utilities/Inputs';
import Button from '../../../../../utilities/Button';
import { IoIosAddCircle } from 'react-icons/io';
import {  json, useParams } from 'react-router-dom';
import { StudentQuery } from '../../../../../../API/Students/StudentsQueries';
import DynamicForm from '../../../../Dashbord_layout/Mangment/D_inputs';
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage} from 'formik';
import { Time_recordQuery } from '../../../../../../API/Time_record/Time_recordQuery ';

const AttendanceForm = ({ onAttendance,SectionId }) => {
  const { t } = useTranslation("global");
  const[isSubmitting,set_Submitting]=useState(false)
  const [student_selected,set_student_selected]=useState()
  const [state_selected,set_state_selected]=useState()

  console.log(state_selected)
  const today = new Date()
  const [date, setDate] = useState(JSON.stringify(today));
  // const [status, setStatus] = useState(t("Division_Supervisor_dash.Daily_inspection.5"));
  const { isLoading, data: Students, isFetched: FetchedStudents, isError, error } = StudentQuery.GetStudentBySectionnQuery(SectionId)
  const {data:time_recorde , mutate:add_dawam_student} =Time_recordQuery.Add_time_recorde_student()


  
  const state=[
    {id:1,name:t("Division_Supervisor_dash.Daily_inspection.5")},
    {id:2,name:t("Division_Supervisor_dash.Daily_inspection.6")}
  
  ]

  const handleSubmit = (values) => {
    console.log(values)
const dawamStudents={
  "studentId":student_selected.id,
  "isPresnt": state_selected.id===1? true:false,
  "note": values.Resone
}
console.log(dawamStudents)
add_dawam_student(dawamStudents)
    // const section = { name: values.Division, size: values.Number_of_students, classId: ClassSelected.id, supervisorId: modraterSelected.id }


    // Add_Section(section)

    // onAttendance(selectedStudent, date, status);




  };
 
const handleChange_student_option =(value) => {

set_student_selected(value)
 
  
}
const handleChange_state_option=(value) => {

  set_state_selected(value)

}
const handleDateChange=(value) => {

  
   const DateTostring= JSON.stringify(value) 
 
  setDate(DateTostring)
  
}
const formConfig_Add = {
  info: [
    { title:"" },
    { descrption: "" },
    { button_content:"اضافة تفقد" }
  ],

  fields: [
    {
      name: "studentName",
      label: "الطلاب",

      type: "Dropdown",
      inputType: "text",
      component: "Dropdown",
      options: Students,
      onChange: handleChange_student_option

    },




    {
      name: "Resone",
      label:"السبب",
      type: "date",
      inputType: "text",
      component: "input",


    },

    {
      name: "state",
      label:"الحالة",
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
    // studentName: Yup.string().required("اسم الطالب مطلوب اختياره"),
    // state: Yup.string().required("حالة الطالب مطلوب اختياراها"),
 



  }

};
const CustomInputComponent = ({
  field, // { name, value, onChange, onBlur }
  form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
  ...props



}) => {
 
  return (

<>
<div className={`relative md:block w-[16rem] mt-3 flex items-center  `}>
<input
id={field.name}
type={""}
name={""}
{...field} {...props}
className={` py-[6px]  px-[16px] w-full border-[1px] rounded-md  ${touched[field.name] && errors[field.name] ? "border-error"  :"border-myGray-400"} focus-within:border-primary   transition-all duration-100 ease-in-out     outline-0 placeholder:focus:opacity-0`}
/>
</div>

   
      </>


  );
}



  return (
    <div className='' >
    

<Formik
                initialValues={formConfig_Add.initialValues}
                validationSchema={Yup.object().shape(formConfig_Add.validationSchema)}
             onSubmit={handleSubmit}
             
        
                
            >
                {({ isSubmitting }) => (
                    <Form className="  " >
                      
                     <div className='flex  items-center gap-10  justify-between '>
                           <div key={formConfig_Add.fields[0].name} className="flex flex-col  ">
                                <label className="block my-2">{formConfig_Add.fields[0].label}</label>
                              
                       
                                <Dropdown
                                    
                                    isFetched={formConfig_Add.fields[0].isFetched}
                                  name={formConfig_Add.fields[0].name}
                                  //  edit_option={initialValues[fields[0].name]}
                                    options={formConfig_Add.fields[0].options}
                                    onChange={formConfig_Add.fields[0].onChange}
                                    icon={formConfig_Add.fields[0].img}
                                    showSlected={true}
                                    ulClassname={"w-full "}
                                    classNameIcon=""
                                    className={`sm:w-[20rem] w-[10rem]  ease-in-out  border-b-[1px]   border-b-myGray-100 active:border-b-primary focus-within:border-b-primary duration-150 `}
                                  />
                                    {student_selected === undefined && isSubmitting ? <p className='text-error'> هذا الحقل مطلوب</p> :"" }
                                        
                                    
                                

                              



                              
                                <ErrorMessage name={formConfig_Add.fields[0].name} component="p" className="text-error text-sm mt-2 font-normal" />
                            </div>


                            <div key={formConfig_Add.fields[2].name} className="flex flex-col  ">
                                <label className="block my-2">{formConfig_Add.fields[2].label}</label>
                              
                       
                                <Dropdown
                                    // value,
                                    isFetched={formConfig_Add.fields[2].isFetched}
                                  name={formConfig_Add.fields[2].name}
                                  //  edit_option={initialValues[fields[0].name]}
                                    options={formConfig_Add.fields[2].options}
                                    onChange={formConfig_Add.fields[2].onChange}
                                    icon={formConfig_Add.fields[2].img}
                                    showSlected={true}
                                    ulClassname={"w-full "}
                                    classNameIcon=""
                                    className={`sm:w-[20rem] w-[16rem]  ease-in-out  border-b-[1px]   border-b-myGray-100 active:border-b-primary focus-within:border-b-primary duration-150 `}
                                  />
                                  {state_selected === undefined && isSubmitting ? <p className='text-error'> هذا الحقل مطلوب</p> :"" }
                                        
                                    
                                

                             




                              
                                <ErrorMessage name={formConfig_Add.fields[2].name} component="p" className="text-error text-sm mt-2 font-normal" />
                            </div>
                          
                            <div key={formConfig_Add.fields[1].name} className="flex flex-col  ">
                                <label className="block my-2">{formConfig_Add.fields[1].label}</label>
                              
                       
                        
                                    
                                

                                
                            
                                    
                                    <Field
                                        name={formConfig_Add.fields[1].name}
                                        type={formConfig_Add.fields[1].inputType}
                                        // value={field.value}
                                        className={formConfig_Add.fields[1].className  ? formConfig_Add.fields[1].className :""}
                                        component={CustomInputComponent}
                                    /> 





                              
                                <ErrorMessage name={formConfig_Add.fields[1].name} component="p" className="text-error text-sm mt-2 font-normal" />
                            </div>

                        <Button disabled={isSubmitting} type="submit" className='mt-10 bg-success '  >
                            {formConfig_Add.info[2].button_content}

                        </Button>

                        </div>
                


                    </Form>
                )} 
            </Formik>

    
     

      
    </div>
  );
};

export default AttendanceForm;








