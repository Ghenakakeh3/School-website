





import React, { useEffect, useRef, useState } from 'react'
import { useTranslation } from "react-i18next";
import Typography from '../../../utilities/Typography'
import TabsFillter from '../../Dashbord_layout/TabsFillter'

import NoData from '../../Dashbord_layout/NoData/NoData'
import Content from '../../Dashbord_layout/Content/Content';
import Dropdown from '../../../utilities/Dropdown';
import arrowIcon from "../../../../assets/icons/arrowDropdown.svg";
import * as Yup from "yup";
import Edit from '../../Dashbord_layout/Mangment/Edit';
import { ClassQuery } from '../../../../API/Class/ClassQueries';
import { TableCell, TableHeader, TableRow ,Table} from '../../Dashbord_layout/Table';
import Loading from '../../../utilities/Loading/Loading';
import { Link } from 'react-router-dom';
import { ParentsQuery } from '../../../../API/Parents/ParentsQueries';
import Add from '../../Dashbord_layout/Mangment/Add';
import Button from '../../../utilities/Button';
import { IoIosAddCircle } from 'react-icons/io';


const Parents = () => {

  const { t } = useTranslation("global");


  const[add_parents,setadd_parent]=useState(false)
 

  const [Parent_fetched, set_Parent_fetched] = useState([])
  const [ParentsFiltterSelected, setParentFiltterSelected] = useState()

  const { isLoading, data:Parents, isFetched: FetchedParent, isError, error } = ParentsQuery.GetAllparents()
  const { mutate:AddParents } = ParentsQuery.Addparents()



console.log(Parents)



  useEffect(() => {
    if (FetchedParent) {
      set_Parent_fetched(Parents.data)
    }

  }, [FetchedParent])



  const TableHeaderArray = [
    t("parents.0") ,
    t("parents.1") ,
    t("parents.2") ,
    t("parents.3") ,


  
   









  ];



  const formConfig_Add={
    info: [
      { title:"اضاقة أهل" },
      { descrption:"يمكنك اضافة أهل  من هنا " },
      { button_content:"اضافة أهل" }
    ],

    fields: [

      {
        name: "fatherName",
        label: "اسم الأب",
        img: "<MdOutlineDriveFileRenameOutline />",
        type: "input",
        inputType: "text",
        component: "input",

      },
      {
        name: "motherName",
        label: " اسم الأم",
        img: "<MdOutlineDriveFileRenameOutline />",
        type: "input",
        inputType: "text",
        component: "input",

      },

 
      {
        name: "phoneNumber",
        label: "رقم الهاتف",
        img: "showpass ? <FaRegEye /> : <FaEyeSlash />",
        type: "input",
        inputType: "text",
        component: "input",


      },
      {
        name: "email",
        label: "البريد الالكتروني",
        img: "showpass ? <FaRegEye /> : <FaEyeSlash />",
        type: "input",
        inputType: "text",
        component: "input",


      },    {
        name: "password",
        label:"كلمة المرور",
        img: "showpass ? <FaRegEye /> : <FaEyeSlash />",
        type: "input",
        inputType: "text",
        component: "input",


      },

      // Add more fields as needed
    ],
    initialValues: {

        fatherName: "",
        motherName: "",
        phoneNumber: "",
        email: "",
        password : ""




      // Initialize other fields
    },

    validationSchema: {
        fatherName: Yup.string().required("هذا الحقل مطلوب").matches(/^[A-Za-zأ-ي]*$/, 'غير مسموح باستخدام هذا المحرف  في هذا الحقل')
        .max(30,"لا يجب ان يكون الحقل أطول").min(3,"لا يجب أن يكون الحقل  أقصر"),
        motherName: Yup.string().required("هذا الحقل مطلوب").matches(/^[A-Za-zأ-ي ء]*$/, 'غير مسموح باستخدام هذا المحرف  في هذا الحقل')
        .max(30,"لا يجب ان يكون الحقل أطول").min(3,"لا يجب أن يكون الحقل  أقصر"),
        phoneNumber: Yup.string().required("هذا الحقل مطلوب").matches(/^[0-9]*$/, 'غير مسموح باستخدام هذا المحرف  في هذا الحقل').min(10,"لايمكن ان يكون هذا الحقل أقصر").max(10,"لايمكن أن يكون هذا الحقل أطول"),
        
        email: Yup.string().required("هذا الحقل مطلوب").email(),
      
        password : Yup.string().required("هذا الحقل مطلوب")
       




    }

  };




  const handleAddSubmit = (values, { setSubmitting }) => {
 console.log(values)
    const newParent={
        "fatherName": values.fatherName,
        "motherName": values.motherName,        
        "phoneNumber": values.phoneNumber,
        "email":values.email,
        "password": values.password
      }
   
    AddParents(newParent)
  
  
  
  
  
  
  };
 






  return (
    <div className='relative'>
        {add_parents ? (
            <Add
            formConfig={formConfig_Add}
     
              add_active={add_parents}
              set_add_active={setadd_parent}
              handleSubmit={handleAddSubmit}
          


            />
          ) : (
            ""
          )}


    <Content
      path={"الأهل"}
      classNameChildern="bg-white"
    >


      <div className='relative '>

     







        < TabsFillter>

          <div className='flex  gap-10 items-center justify-between  w-full'>
         <div className='flex gap-10'>
         <span className="ps-2 pe-5 py-1 border-[1px] border-solid border-myGray-100  flex items-center  justify-start rounded-lg   text-myGray-500">
              {Parents?.data.length} {t("home_Admin_dash.record.0")}
            </span>
    
    

      

   
  
         </div>
         <div className=''>
     
     <Button  className="flex bg-success items-center gap-2 " onClick={()=>{setadd_parent(true)}}>اضافة أهل <IoIosAddCircle /> </Button>
     </div>



 

          </div>





        </TabsFillter>
        <div className='px-10'>
          <Table className="mt-10 text-center text-xs sm:text-xs md:text-sm rounded-md">
            <TableHeader className="">
              <TableRow className="">
                {TableHeaderArray.map((header, index) => (
                  <TableCell className="py-2" key={index}>{header}</TableCell>
                ))}
              </TableRow>
            </TableHeader>
 

            <tbody>
              {isLoading ? (
                <td colSpan={12}>
                  <Loading size={60} />
                </td>
              ) :

                (Parent_fetched.length === 0 ? (
                  <td colSpan={12}>
                    <NoData />
                  </td>
                ) : (
                  Parent_fetched.map((Parent, index) => (
                    <TableRow
                      key={Parent.id}
                      className={
                        ""
                      }
                      rowIndex={index}
                    >

                      <TableCell>{Parent.fatherName} </TableCell>
                      <TableCell>{Parent.motherName} </TableCell>
                      <TableCell>{Parent.email} </TableCell>
                      <TableCell>{Parent.phoneNumber} </TableCell>
                    


                     


          



                    </TableRow>
                  ))
                )

                )
              }


            </tbody>
          </Table>
        </div>
        
      </div>
    </Content>
    </div>
  )
}

export default Parents

