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


const Edit_acount = React.forwardRef(
  (
    {
      add_active,
      set_add_active,
      rows,
      set_data,


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
         { title: t("home_Admin_dash.Edit_Account.0")},
        {descrption: t("home_Admin_dash.Edit_Account.1")},
        { button_content:t("home_Admin_dash.Edit_Account.5") }
        ],
               
        fields: [
    
          {
            name: "name",
            label: t("home_Admin_dash.Edit_Account.2"),
            img: <MdOutlineDriveFileRenameOutline />,
            type: "input",
            inputType: "text",
            component: "input",
            value : "vvvvvvvvvvv",
          },
          {
            name: "user_name",
            label: t("home_Admin_dash.Edit_Accountt.3"),
            img: <PiUser />,
            type: "input",
            inputType: "text",
            component: "input",
            value : "input",
          },

          {
            name: "password",
            label: t("home_Admin_dash.Edit_Account.4"),
            img:showpass ? <FaRegEye /> : <FaEyeSlash /> ,
            type: "input",
            inputType:showpass ? "text" : "password" ,
            component: "input",
            value : "input",
          },

        ],


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
  };

  const handleSubmit = (values, { setSubmitting }) => {
    const newRow=[...rows, values]
    set_data(newRow)
    setSubmitting(false);
    set_add_active(!add_active)
  };




 
    const toggle_Add = () => {
        set_add_active(!add_active);
    };
    return (
      <div className=" text-start absolute ltr:right-0 rtl:left-0 ">
        <ClickOutside onClick={toggle_Add}>
          {add_active && (
            <div
              ref={ref}
              className="w-[17rem] sm:w-[22rem] md:w-[30rem] rounded px-5 pt-5 pb-16 min-h-screen md:px-8 flex flex-col gap-3   bg-white min-w-[45%]  shadow-md z-50 "
            >
  
              {/* inputs */}

              <DynamicForm 
                   formConfig={formConfig}
                   initialValues={initialValues}
                   onSubmit={handleSubmit}
                //    edit_content={edit_content}
              
              
              />

            
            </div>
          )}

  
        </ClickOutside>
      </div>
    );
  }
);


Edit_acount.propTypes = {
    Add_content: PropTypes.object.isRequired,
  validation_schema: PropTypes.any,
  Edit_user: PropTypes.bool,
  set_Edit_user: PropTypes.fun,
};
export default Edit_acount;
