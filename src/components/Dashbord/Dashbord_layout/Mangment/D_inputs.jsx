// DynamicForm.js
import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage, useField } from "formik";
import * as Yup from "yup";
import { DashInput } from "../../../utilities/Inputs";
import Button from "../../../utilities/Button";
import Typography from "../../../utilities/Typography";
import DatePicker from "../../../utilities/DatePicker";
import DatePicker_input from "../../../utilities/DatePicker";
import Dropdown from "../../../utilities/Dropdown";

const DynamicForm = ({ formConfig, initialValues, onSubmit }) => {
    const[isSubmitting,set_Submitting]=useState(false)
    const CustomInputComponent = ({
        field, // { name, value, onChange, onBlur }
        form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
        ...props



    }) => {
       
        return (

<>
<div className={`relative md:block w-[28rem] mt-3 flex items-center  `}>
    <input
      id={field.name}
      type={""}
      name={""}
      {...field} {...props}
      className={` py-[6px]  px-[16px] w-full border-[1px] rounded-md  ${touched[field.name] && errors[field.name] ? "border-error"  :"border-myGray-400"} focus-within:border-primary   transition-all duration-100 ease-in-out     outline-0 placeholder:focus:opacity-0`}
    />
    </div>

            {/* // <div className="relatie bg-red-300"> */}
                {/* <div
                    className={` border-[1px]  focus-within:border-primary  mb-6 bg-black
                    ${touched[field.name] &&
                        errors[field.name] ? "border-error"  :"border-myGray-400"}

        
       bg-white rounded-lg transition-all duration-100 ease-in-out`}
                >
                    <input
                        className={`border-[1px] py-2 px-5  border-myGray-400 block bg-white rounded-lg transition-all duration-100 ease-in-out  text-sm text-myGray-500 outline-0 focus:outline-none in focus-within:border-primary  `}


                        type="text"
                        {...field} {...props}

                    />


                </div> */}

                {/* {touched[field.name] &&
                    errors[field.name] && (
                        <p className="ps-1 pt-2 text-error font-normal text-sm">{errors[field.name]}</p>
                    )} */}
             {/* </div> */}
            </>


        );
    }
    


    return (
        <>

            <Typography component={"h3"}>
                {formConfig.info[0].title}
            </Typography>
            <Typography component={"h5"} className="mb-5">
                {formConfig.info[1].descrption}
            </Typography>
            <Formik
                initialValues={initialValues}
                validationSchema={Yup.object().shape(formConfig.validationSchema)}
                onSubmit={onSubmit}
            >
                {({ isSubmitting }) => (
                    <Form >
                        {formConfig.fields.map((field,i) => (
                          
                           <div key={field.name}>
                                <label className="block my-2">{field.label}</label>
                                {/* Render different input types based on field.type */}
                                {field.type === "select" ? (
                                    // Render select dropdown
                                    <Field as="select" name={field.name} className="my-select">
                                        <option value="">Select {field.label}</option>
                                        {field.options.map((option) => (
                                            <option key={option.value} value={option.value}>
                                                {option.label}
                                            </option>
                                        ))}
                                    </Field>
                                ) : field.type === "radio" ? (
                                    // Render radio buttons
                                    <div className="">
                                    <div className="flex gap-5 mt-2 ">
                                        {field.options.map((option) => (
                                            <div key={option.value} className="flex gap-2 items-center">
                                                <Field
                                                    type="radio"
                                                    id={option.value}
                                                    name={field.name}
                                                    value={option.value}
                                                />
                                                <label htmlFor={option.value}>{option.label}</label>
                                            </div>
                                        ))}

                                        
                                    </div>
                                

                                 
                                    </div>
                                ) :field.type === "date" ? (
                                <DatePicker_input
                                name={field.name}
                                label={field.label}
                                initialValues={initialValues}
                                // rest={}
                                
                                
                                />
                                    
                                )
                                :field.type === "Dropdown" ? (
                                    <Dropdown
        // value,

   
       edit_option={initialValues[field.name]}
        options={field.options}
        onChange={field.onChange}
        icon={field.img}
        showSlected={true}
        ulClassname={"w-full "}
        classNameIcon=""
        className={`sm:w-[28rem] w-[16rem]  ease-in-out  border-b-[1px]   border-b-myGray-100 active:border-b-primary focus-within:border-b-primary duration-150 `}
      />
                                        
                                    )
                                

                                
                                :(
                                    
                                    <Field
                                        name={field.name}
                                        type={field.inputType}
                                        // value={field.value}
                                        className=""
                                        component={CustomInputComponent}
                                    />





                                )}
                                <ErrorMessage name={field.name} component="p" className="text-error text-sm mt-2 font-normal" />
                            </div>
                          
                        ))}

                        <Button disabled={isSubmitting} type="submit" className='mt-10' fullWidth >
                            {formConfig.info[2].button_content}

                        </Button>
                    


                    </Form>
                )}
            </Formik>
        </>
    );
};
export default DynamicForm