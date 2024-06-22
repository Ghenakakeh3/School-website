import React from 'react'
import { Input } from '../../../utilities/Inputs'
import DynamicForm from '../../Dashbord_layout/Mangment/D_inputs'
import { useTranslation } from 'react-i18next';
import * as Yup from "yup";


const New_post = () => {
    const { t } = useTranslation("global");
    const formConfig = {
        info: [
          { title: t("Class_Admin_dash.Class.2") },
          { descrption: t("Class_Admin_dash.Class.6") },
          { button_content: t("Class_Admin_dash.Class.2") }
        ],
    
        fields: [
    
      
          {
            name: "Discrption",
            label: t("Class_Admin_dash.Class.4"),
            img: "<PiUser />",
            type: "input",
            inputType: "text",
            component: "input",
            className:"w-full "
    
    
          },
          {
            name: "img",
            label: t("Class_Admin_dash.Class.5"),
            img: "<PiUser />",
            type: "file",
            inputType: "number",
            component: "input",
    
    
          },
    

    
        ],
        initialValues: {
          Discrption: "",
          img:""
      
        },
    
        validationSchema: {

          Discrption: Yup.string().required(t("Class_Admin_dash.Class.8")),
          // img:
     
    
    
    
        }
    
      };
      const handleSubmit=() => {
        
      }
      
  return (
    <div className='fixed inset-10  w-[35%] rounded-lg shadow-2xl mx-auto z-50 pt-6  px-10 bg-white opacity-1 '>


      <DynamicForm
       formConfig={formConfig}
       initialValues={formConfig.initialValues}
       onSubmit={handleSubmit}
      />
    </div>
  )
}

export default New_post
