import React, { useEffect, useState } from 'react'
import Button from '../../../utilities/Button'
import { FaArrowRight } from "react-icons/fa";
import { Textarea } from '../../../utilities/Inputs';
import { useTranslation } from 'react-i18next';
import { Formik, Form, Field, ErrorMessage} from 'formik';
import * as Yup from "yup";
import Select from 'react-select'
import { SectionQuery } from '../../../../API/Sections/SectionsQueries';
import { AdvertQuery } from '../../../../API/Advert/AdvertQyries';
import { AddAdvert } from '../../../../API/Advert/AdvertApi';


const Send_Adverts = () => {
    const { t } = useTranslation("global");
    const[sectionOptions,setSectionsOptions]=useState([])
    const [selected_section,set_selected_section]=useState([])
    const {data:sections,isLoading,isSuccess}=SectionQuery.GetAllSectionQuery()
    const{mutate:addAdvert}= AdvertQuery.AddAdvert()
 
    useEffect(() => {
      if(isSuccess){
        const sectionOptions=sections?.data.map(section =>(
          {
            // ...section,
            value:section.id,
           label:section.name
          }
        ))
        setSectionsOptions(sectionOptions)
        
      }
    }
    ,[isLoading])
    const formConfig_Add = {
      info: [
        { title:"" },
        { descrption: "" },
        { button_content:" اضافة اعلان" }
      ],
    
      fields: [
      
    
        {
          name: "advert",
          label: "الاعلان",
          type: "input",
          inputType: "text",
          component: "input",
    
    
        },
        {
          name: "sections",
          label: "الشعب المراد ارسال الاعلان لها",
          type: "input",
          inputType: "text",
          component: "input",
    
    
        },
    

    
        // Add more fields as needed
      ],
      initialValues: {
        advert:""
    
    
    
    
    
        // Initialize other fields
      },
    
      validationSchema: {
        advert:Yup.string().required("نص الاعلان مطلوب"),
        

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
    const handleSubmit = (values) => {
  
      const sectionIds=selected_section.map(sectionOption=>(
       sectionOption.value
      ))
      console.log(sectionIds)
      const newAdvert={
        "description": values.advert,
        "supervisorId": localStorage.getItem("supervisorId"),
     
        "sectionIds": sectionIds
      }
      AddAdvert(newAdvert)
 
  
  
  
  
    };
   
  return (
    <div>
         <div className='p-10' >
    

    <Formik
                    initialValues={formConfig_Add.initialValues}
                    validationSchema={Yup.object().shape(formConfig_Add.validationSchema)}
                 onSubmit={handleSubmit}
                 
            
                    
                >
                    {({ isSubmitting }) => (
                        <Form className="  " >
                          
                         <div className='flex  items-center gap-16 justify-center  '>
                        
    
                            
                              
                                <div key={formConfig_Add.fields[0].name} className="flex flex-col  ">
                                    <label className="block my-2">{formConfig_Add.fields[0].label}</label>
                                  
                             
                                        <Field
                                            name={formConfig_Add.fields[0].name}
                                            type={formConfig_Add.fields[0].inputType}
                                            // value={field.value}
                                            className={formConfig_Add.fields[0].className  ? formConfig_Add.fields[0].className :""}
                                            component={CustomInputComponent}
                                        /> 
    
    
    
    
    
                                  
                                    <ErrorMessage name={formConfig_Add.fields[0].name} component="p" className="text-error text-sm mt-2 font-normal" />
                                </div>

                                <div key={formConfig_Add.fields[1].name} className="flex flex-col  ">
                                    <label className="block my-2">{formConfig_Add.fields[1].label}</label>
                                  
                             
                            <Select
                            value={selected_section}
                            options={sectionOptions} 
                            onChange={(selecteedOption)=>{set_selected_section(selecteedOption)}}
                            isMulti
                            />

                           
    
    
    
    
                                  {selected_section.length===0 && isSubmitting && <p className='text-error'>يجب اختيار الشعب المراد ارسال الاعلان لها</p>}
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
    </div>
//   <form action="" className=' py-1 flex gap-3 items-center px-6 ' >
// <div className=''>
// <Textarea rows={14} name="" id="" className='h-12 w-full'></Textarea>
// </div>
// <Button type={"submit"} className='w-[10%] h-12 flex items-center  justify-center gap-1'>{t("Adverts.2")} <FaArrowRight /></Button>

//   </form>
  )
}

export default Send_Adverts
