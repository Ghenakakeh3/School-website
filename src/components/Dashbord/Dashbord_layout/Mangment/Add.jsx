import React, { useState, useCallback } from "react";
import { useTranslation } from "react-i18next";
import DynamicForm from "./D_inputs"
import PropTypes from "prop-types";
import ClickOutside from "../../../utilities/Click_Outsite";
import { MdOutlineDriveFileRenameOutline } from "react-icons/md";
import { FaRegEye } from "react-icons/fa";
import { PiUser } from "react-icons/pi";
import { FaEyeSlash } from "react-icons/fa";



// import { useDropzone } from "react-dropzone";
import * as Yup from "yup";


const Add= React.forwardRef(
  (
    {
     
      add_active,
      set_add_active,
      formConfig,

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
  


      
  const initialValues = {
    name: "",
    user_name: "",
    password: "",


    // Initialize other fields
  };

  const handleSubmit = (values, { setSubmitting }) => {
    console.log("bb")
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
      <div className="relatve text-start shadow-lg z-50 w-[17rem] sm:w-[22rem] md:w-[32rem] absolute ltr:right-0 rtl:left-0 ">
        <ClickOutside onClick={toggle_Add}>
          {add_active && (
            <div
              ref={ref}
              className=" rounded px-5 pt-5 pb-16 min-h-screen md:px-8 flex flex-col gap-3    bg-white   "
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


Add.propTypes = {
    Add_content: PropTypes.object.isRequired,
  validation_schema: PropTypes.any,
  Edit_user: PropTypes.bool,
  set_Edit_user: PropTypes.fun,
};
export default Add;
































