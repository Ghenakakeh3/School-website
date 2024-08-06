import React from 'react'
import { Input } from '../../../utilities/Inputs'
import DynamicForm from '../../Dashbord_layout/Mangment/D_inputs'
import { useTranslation } from 'react-i18next';
import * as Yup from "yup";
import { PostsQuery } from '../../../../API/Posts/PostsQuiers';


const New_post = () => {
    const { t } = useTranslation("global");
    var bodyFormData = new FormData();
    const {mutate:addPost} =PostsQuery.AddPost()
    const formConfig = {
        info: [
          { title: "اضافة منشور جديد" },
          { descrption: "يمكنك اضافة منشور جديد من هنا" },
          { button_content: "اضافة المنشور" }
        ],
    
        fields: [
          {
            name: "title",
            label: "العنوان",
            img: "<PiUser />",
            type: "input",
            inputType: "text",
            component: "input",
            className:"w-full "
    
    
          },
      
          {
            name: "Discrption",
            label: "الوصف ",
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
          img:"",
          title:""
      
        },
    
        validationSchema: {
          title:Yup.string().required("العنوان مطلوب"),
          Discrption: Yup.string().required("الشرح مطلوب "),
          // img:
     
    
    
    
        }
    
      };
      const handleSubmit=(values) => {
        console.log(values)
        bodyFormData.append('Title', values.title);
        bodyFormData.append('Description', values.Discrption);
        bodyFormData.append('Image', values.img.path);
        bodyFormData.append('SupervisorId',localStorage.getItem("supervisorId"));


        const newpost={
          // "Title":values.title,
          // "Description":values.Discrption,
          "Image":values.img.path,
          // "SupervisorId":44
        }
        console.log(newpost)
        addPost(bodyFormData)
        
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
