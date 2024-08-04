import React, { useState } from 'react'

import {Field,ErrorMessage, useField} from 'formik'
import DatePicker, { registerLocale } from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css";
import ar from "date-fns/locale/es"; // The locale you want: vi, en, cn, in,..etc .


registerLocale("ar", ar);




const DatePicker_input = ({name,label,initialValues}) => {
  const [selectedValue,setSelectedValue]=useState()
    const [startDate, setStartDate] = useState(new Date());
    const [field, meta, helpers] = useField(name);
    const { value } = meta;
    const { setValue } = helpers;
    const [endDate, setEndDate] = useState(null);
    // console.log(value)
    // console.log(typeof value)

  const onChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };
    
  let handleColor = (time) => {
    
    return time.getHours() > 8 && time.getHours() < 2  ? "text-error" :  "text-success" ;
  };
  const weekend = (date) => new Date() < date;

  

  const CustomDatePicker = ({
    field, // { name, value, onChange, onBlur }
    form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
    ...props



}) => {
   
    return (
<div className={`relative md:block w-[rem] mt-3 flex items-center  }`}>
<DatePicker
        {...field}
       {...props}
        selected={ selectedValue }
        onChange={(date) => { setSelectedValue(date)   ; console.log(date.setHours(date.getHours()+3)); console.log(date.toISOString()); const IsoDate= date.toISOString() ;setValue(IsoDate)}}
        className={` py-[6px]  px-[16px] w-[28rem] border-[1px] rounded-md  ${touched[field.name] && errors[field.name] ? "border-error" :"border-myGray-400"} focus-within:border-primary   transition-all duration-100 ease-in-out  outline-0 placeholder:focus:opacity-0 `}
        minDate={new Date()}
        // maxDate={addMonths(new Date(5), 5)}
        startDate={startDate}
        endDate={endDate}
        showDisabledMonthNavigation
        timeClassName={handleColor}
        showTimeSelect
        dateFormat={`yyyy-MM-dd'T'HH:mm:ss.SSS'Z'`}
        locale= "ar"
        time_24hr= {true} 
        minTime={new Date(0, 0, 0, 8, 0)}
        maxTime=  {new Date(0, 0, 0, 14, 0)}
        filterDate={weekend}
        defaultValue ={true}
        
       

      />

    </div>

       



    );
}
  return (
    <div>
       
        <Field name={name} component={CustomDatePicker}/>
        {/* <ErrorMessage name={name} component='p' className='text-error mt-2 text-sm font-normal' /> */}

      
    </div>
  )
}

export default DatePicker_input
