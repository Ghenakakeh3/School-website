// DynamicForm.js
import React, { useCallback, useState } from "react";
import { Formik, Form, Field, ErrorMessage, useField } from "formik";
import * as Yup from "yup";
import Button from "../../../utilities/Button";
import Typography from "../../../utilities/Typography";
import DatePicker_input from "../../../utilities/DatePicker";
import Dropdown from "../../../utilities/Dropdown";
import { useDropzone } from "react-dropzone";
import Select from 'react-select'

const DynamicForm = ({ formConfig, initialValues, onSubmit }) => {


    // const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

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
    
    const DropzoneField = ({ field, form }) => {
        const onDrop = useCallback((acceptedFiles) => {
            form.setFieldValue(field.name, acceptedFiles[0]);
        }, [form, field.name]);

        const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

        return (
            <div {...getRootProps()} className="border-dashed border-2 border-gray-300 p-4 text-center cursor-pointer">
                <input {...getInputProps()} />
                {isDragActive ? (
                    <p>Drop the files here...</p>
                ) : (
                    <p>Drag 'n' drop some files here, or click to select files</p>
                )}
                {form.values[field.name] && (
                    <div>
                        <p>Selected file: {form.values[field.name].name}</p>
                    </div>
                )}
            </div>
        );
    }
 const DropDowanFiled=({
    field, // { name, value, onChange, onBlur }
    form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
    ...props



})=>
    
    {
        const [isOpen, setIsOpen] = useState(false);
        const [selectedItem, setSelectedItem] = useState(edit_option? edit_option : options[0].name);
        const dropdownRef = useRef(null);
      
        const handleSelect = (selected) => {
          onChange(selected);
          setSelectedItem(selected.name);
          setIsOpen(false);
        };
        const handleOutsideClick = (e) => {
          if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
            setIsOpen(false);
          }
        };
        useEffect(() => {
          document.addEventListener("mousedown", handleOutsideClick);
          return () => {
            document.removeEventListener("mousedown", handleOutsideClick);
          };
        }, []);
    return(
        <div
        className={` ${
          className ? className : "text-myGray-500"
        } relative  flex flex-col z-10 `}
        ref={dropdownRef}
        name={name}
      >
        <button
          onClick={() => {
        
            setIsOpen(!isOpen);
      
  
  
  
  
          }}
          type="button"
          name={name}
          className="  flex  items-center p-2   justify-between  tracking-wide border-0 border-b-myGray-100 active:border-b-primary duration-150 ease-in-out"
        >
          {showSlected ? selectedItem : ""}
  
          <img
            className={` ${classNameIcon ? classNameIcon : ""} `}
            src={icon}
            alt=""
          />  
          <div className="absolute top-[-15px]">
  {label}
  
  
          </div>
        </button>
        {isOpen && (
          <ul
            className={`${
              ulClassname ? ulClassname : ""
            } absolute shadow-md top-[100%]  z-50  mt-[4px] `}
          >
        
            {options.map((option, index) => (
              <li
                className={`block cursor-pointer w-full whitespace-nowrap bg-myGray-200 px-4 py-2 text-sm font-normal hover:bg-myGray-100 active:bg-myGray-100 hover:text-secondary active:text-secondary ${
                  option.type == "delete" ? " text-error hover:text-error " : ""
                }  `}
                key={index}
                onClick={() => {
                  handleSelect(option);
                }}
              >
                {option.name}
              </li>
            ))}
          </ul>
        )}
      </div>
    )
}
    
    


    return (
      <div className="">
            {formConfig.info[0]?.title !== "" && <Typography component={"h3"}>
            {formConfig.info[0]?.title}
            </Typography>}
            {formConfig.info[0]?.descrption !== "" &&  <Typography component={"h5"} className="mb-5">
                {formConfig.info[1]?.descrption}
            </Typography>}
         <div className="">
         <Formik
                initialValues={initialValues}
                validationSchema={Yup.object().shape(formConfig.validationSchema)}
                onSubmit={onSubmit}
                className="bg-black"
                
            >
                {({ isSubmitting }) => (
                    <Form className="  " >
                        {formConfig.fields.map((field,i) => (  
                           <div key={field.name} className="flex flex-col  ">
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
                                ) 
                                :field.type === "date" ? (
                                <DatePicker_input
                                name={field.name}
                                label={field.label}
                                initialValues={initialValues}
                                // rest={}
                                
                                
                                />
                                    
                                )
                                : field.type === "file" ? (
                                    <Field name={field.name} component={DropzoneField} />
                                )
                      
                                :field.type === "Dropdown" ? (
                                //    <Field name={field.name} component={ <Dropdown
                                //     // value,
                            
                                //   name={field.name}
                                //    edit_option={initialValues[field.name]}
                                //     options={field.options}
                                //     onChange={field.onChange}
                                //     icon={field.img}
                                //     showSlected={true}
                                //     ulClassname={"w-full "}
                                //     classNameIcon=""
                                //     className={`sm:w-[28rem] w-[16rem]  ease-in-out  border-b-[1px]   border-b-myGray-100 active:border-b-primary focus-within:border-b-primary duration-150 `}
                                //   />}/>

                                <Dropdown
                                    // value,
                                    isFetched={field.isFetched}
                                  name={field.name}
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
                                

                                
                                    :field.type === "selecte" ? (
                                          
                            <Select
                            value={field.selected_option}
                            options={field.Options} 
                            onChange={field.onChange}
                            isMulti
                            />
                                    )
                                    :
                                    (
                                    
                                    <Field
                                        name={field.name}
                                        type={field.inputType}
                                        // value={field.value}
                                        className={field.className  ? field.className :""}
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
         </div>
        </div>
    );
};
export default DynamicForm