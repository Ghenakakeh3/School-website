import React, { useState, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { useFormik } from "formik";
import Typography from "../../../../utilities/Typography";
import Button from "../../../../utilities/Button";
import { DashInput, InputFile } from "../../../../utilities/Inputs";
import DynamicForm from "../D_inputs"
import PropTypes from "prop-types";
import ClickOutside from "../../../../utilities/Click_Outsite";
import { MdOutlineDriveFileRenameOutline } from "react-icons/md";
import { FaRegEye } from "react-icons/fa";
import { PiUser } from "react-icons/pi";
import { FaEyeSlash } from "react-icons/fa";



// import { useDropzone } from "react-dropzone";
import * as Yup from "yup";


const Add_acount = React.forwardRef(
  (
    {
      Add_content,
      add_active,
      set_add_active,

      rows,
      set_data

    },
    ref
  ) => {
    const { t } = useTranslation("global");
    const [showpass, setshowpass] = useState(false);
    //show password
    function ShowPassword() {
        setshowpass(!showpass);
      }
      const formConfig = {
        info :[
         { title: t("home_Admin_dash.Add_Account.0")},
        {descrption: t("home_Admin_dash.Add_Account.1")},
        { button_content:t("home_Admin_dash.Add_Account.5") }
        ],
               
        fields: [
    
          {
            name: "name",
            label: t("home_Admin_dash.Add_Account.2"),
            img: <MdOutlineDriveFileRenameOutline />,
            type: "input",
            inputType: "text",
            component: "input"
          },
          {
            name: "user_name",
            label: t("home_Admin_dash.Add_Account.3"),
            img: <PiUser />,
            type: "input",
            inputType: "text",
            component: "input"
          },
          // {
          //   name: "role",
          //   label: "Role",
          //   type: "select",
          //   options: [
          //     { label: "Admin", value: "admin" },
          //     { label: "User", value: "user" }
          //   ],
          //   component: "select"
          // },
          {
            name: "password",
            label: t("home_Admin_dash.Add_Account.4"),
            img:showpass ? <FaRegEye /> : <FaEyeSlash /> ,
            type: "input",
            inputType:showpass ? "text" : "password" ,
            component: "input"
          },
          // {
          //   name: "gender",
          //   label: "Gender",
          //   type: "radio",
          //   options: [
          //     { label: "Male", value: "male" },
          //     { label: "Female", value: "female" },
          //     { label: "Other", value: "other" }
          //   ],
          //   component: "radio"
          // },
          // {
          //   name: "qualification",
          //   label: "Qualification",
          //   type: "select",
          //   options: [
          //     { label: "UG", value: "UG" },
          //     { label: "PG", value: "PG" },
          //     { label: "SCHOOL", value: "SCHOOL" }
          //   ],
          //   component: "select"
          // }
      
          // Add more fields as needed
        ],
        // validationSchema: {
        //   name: Yup.string().required("Name is required"),
        //   gender: Yup.string().required("Gender is required"),
        //   age: Yup.number()
        //     .required("Age is required")
        //     .min(0, "Age must be a positive number"),
      
        //   email: Yup.string().email("Invalid email").required("Email is required"),
        //   role: Yup.string().required("Role is required"),
        //   qualification: Yup.string().test(
        //     "conditional-validation",
        //     "Qualification is required when age is above 18",
        //     function (value) {
        //       const age = this.resolve(Yup.ref("age"));
        //       if (age > 18) {
        //         return !!value;
        //       }
        //       return true; // No validation when age is 18 or below.
        //     }
        //   )
        // }

            validationSchema: {
          name: Yup.string().min(3, "name shoud be longest").max(12,"name shoud be shortest").required("Name is required"),
    
          user_name: Yup.string().min(3,"user name shoud be longest").max(12,"user name shoud be shortest").required("User name is required").min(3, "Age must be a positive number"),
            password: Yup.string().min(8, " Password shoud be longest").required("Password is required"),

   
        }
        
      };


      
  const initialValues = {
    name: "",
    user_name: "",
    password: "",


    // Initialize other fields
  };

  const handleSubmit = (values, { setSubmitting }) => {
    const newRow=[...rows, values]
    set_data(newRow)
    // set_data(rows)

    setSubmitting(false);
    set_add_active(!add_active)
  };




 
    const toggle_Add = () => {
        set_add_active(!add_active);
    };
    return (
      <div className="relative text-start ">
        <ClickOutside onClick={toggle_Add}>
          {add_active && (
            <div
              ref={ref}
              className="w-[17rem] sm:w-[22rem] md:w-[30rem] rounded px-5 pt-5 pb-16 min-h-screen md:px-8 flex flex-col gap-3 absolute ltr:start-0 rtl:left-0  bg-white min-w-[45%]  shadow-md z-50 "
            >
  
              {/* inputs */}

              <DynamicForm 
                   formConfig={formConfig}
                   initialValues={initialValues}
                   onSubmit={handleSubmit}
              
              
              />

            
            </div>
          )}

          {/* If you click here inside this Nothing happens. */}
        </ClickOutside>
      </div>
    );
  }
);


Add_acount.propTypes = {
    Add_content: PropTypes.object.isRequired,
  validation_schema: PropTypes.any,
  Edit_user: PropTypes.bool,
  set_Edit_user: PropTypes.fun,
};
export default Add_acount;
















