// DynamicForm.js
import React from "react";
import { Formik, Form, Field, ErrorMessage, useField } from "formik";
import * as Yup from "yup";
import { DashInput } from "../../../utilities/Inputs";
import Button from "../../../utilities/Button";
import Typography from "../../../utilities/Typography";

const DynamicForm = ({ formConfig, initialValues, onSubmit }) => {
    const CustomInputComponent = ({
        field, // { name, value, onChange, onBlur }
        form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
        ...props



    }) => {
       
        return (


            <div className="relatie ">
                <div
                    className={`flex  flex-row py-2 px-3 border-[1px] items-center justify-between focus-within:border-primary  mb-6
                    ${touched[field.name] &&
                        errors[field.name] ? "border-error"  :"border-myGray-400"}

        
       bg-white rounded-lg transition-all duration-100 ease-in-out`}
                >
                    <input
                        className={`text-sm text-myGray-500 outline-0 focus:outline-none bg-white `}


                        type="text"
                        {...field} {...props}

                    />


                    <div
                        className={`w-4 h-w-4 `}>
                        {/* {icon} */}


                    </div>
                </div>

                {touched[field.name] &&
                    errors[field.name] && (
                        <p className="ps-1 pt-2 text-error font-normal text-xs">{errors[field.name]}</p>
                    )}
            </div>



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
                                <label>{field.label}</label>
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
                                    <div>
                                        {field.options.map((option) => (
                                            <div key={option.value}>
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
                                ) : (
                                    // Render other input types (e.g., text, number, email)
                                    // <DashInput 
                                    //   name={field.name}
                                    //   type={field.inputType}
                                    // component={field.component}
                                    // icon={field.img}


                                    // isDisabled={isSubmitting}

                                    // />
                                    <Field
                                        name={field.name}
                                        type={field.inputType}
                                        value={field.value}
                                        //   component={field.component}
                                        className=""
                                        component={CustomInputComponent}
                                    />





                                )}
                                {/* <ErrorMessage name={field.name} component="div" /> */}
                            </div>
                          
                        ))}

                        <Button disabled={isSubmitting} type="submit" className='mt-10' fullWidth onClick={() => {

                        }}>
                            {formConfig.info[2].button_content}

                        </Button>


                    </Form>
                )}
            </Formik>
        </>
    );
};
export default DynamicForm