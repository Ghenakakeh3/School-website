




import React, { useEffect, useRef, useState } from 'react'
import { useTranslation } from "react-i18next";
import Typography from '../../../utilities/Typography'
import TabsFillter from '../../Dashbord_layout/TabsFillter'
import { InputSearch } from '../../../utilities/Inputs'
import Button from '../../../utilities/Button'

import NoData from '../../Dashbord_layout/NoData/NoData'
import Content from '../../Dashbord_layout/Content/Content';
import Dropdown from '../../../utilities/Dropdown';
import arrowIcon from "../../../../assets/icons/arrowDropdown.svg";
import * as Yup from "yup";
import Edit from '../../Dashbord_layout/Mangment/Edit';
import { SearchBar } from '../../../utilities/SearchBar/SearchBar';
import { SearchResultsList } from '../../../utilities/SearchBar/SearchResultsList';
import { TableCell, TableHeader, TableRow,Table } from '../../Dashbord_layout/Table';
import Loading from '../../../utilities/Loading/Loading';
import { ClassQuery } from '../../../../API/Class/ClassQueries';
import { TeatcherQuery } from '../../../../API/Teatchers/TeatchersQueries';
import { AiOutlineEdit } from 'react-icons/ai';
import { RiDeleteBin5Line } from 'react-icons/ri';
import { LiaSchoolSolid } from "react-icons/lia";
import { Link } from 'react-router-dom';
import Add from '../../Dashbord_layout/Mangment/Add';
import { SectionQuery } from '../../../../API/Sections/SectionsQueries';
import { IoIosAddCircle } from 'react-icons/io';
import { MarialQuery } from '../../../../API/matrial/MatrialQueris';



const Teachers = () => {
 
  const { t } = useTranslation("global");
  const [edit_active, set_edit_active] = useState(false);
  const [Edit_active, set_Edit_active] = useState(false); 
  const [Teachers_Dropdown , set_Teachers_Dropdown] = useState("");
  const[edit_content,set_edit_content]=useState({})
  const [results, setResults] = useState([]);
  const [selected_result, setselected_result] = useState("");

  const [Techer_fetched, set_Techer_fetched] = useState([])
  const [add_student,setadd_student]=useState(false)
 const [selected_sections,setSelectedSections]=useState([])
 const [sectionsOptions,setSectionsOptions]=useState([])
 const [matrialSelected,setMatrialSelected]=useState({})

  const { isLoading, data:Techers, isFetched: FetchedTechers, isError, error } = TeatcherQuery.GetAllTeatcherQuery()
  const {mutate:AddTecher} =TeatcherQuery.AddTeatcher()
  const { isLoading: isLoadingClass, data: Class, isFetched: isFetchedClass } = ClassQuery.GetAllClassQuery()
  const {data:sections,isSuccess,isLoading:loadingSections}=SectionQuery.GetAllSectionQuery()
  const {data:matrials ,isFetched:isFetchedMatrial}=MarialQuery.GetAllMarialQuery()

console.log(selected_sections)
console.log(matrialSelected)

  useEffect(() => {
    if (FetchedTechers) {
      set_Techer_fetched(Techers.data)
    }
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

  }, [FetchedTechers,loadingSections])



  const TableHeaderArray = [

   
    t("Teachers_Admin_dash.Teachers_Table.1") ,
    t("Teachers_Admin_dash.Teachers_Table.2") ,
    t("Teachers_Admin_dash.Teachers_Table.3") ,
    t("Teachers_Admin_dash.Teachers_Table.4") ,
    t("Teachers_Admin_dash.Teachers_Table.5") ,
 
   









  ];



  
  
  const  handleChange_Teachers_edit_Dropdown = (value) => {
  
 


  };




 
const options_Class =[
  {name:t("Class_Admin_dash.Class_filter.0") },
  {name:t("Class_Admin_dash.Class_filter.1") },
  {name:t("Class_Admin_dash.Class_filter.2") },
  {name:t("Class_Admin_dash.Class_filter.3") },
  {name:t("Class_Admin_dash.Class_filter.4") },
  {name:t("Class_Admin_dash.Class_filter.5") },
  {name:t("Class_Admin_dash.Class_filter.6") }


]


const formConfig_Edit = {
  info :[
   { title:  t("Teachers_Admin_dash.Teachers.1"),},
  {descrption: t("Teachers_Admin_dash.Teachers.2"),},
  { button_content:t("Teachers_Admin_dash.Teachers.1"), }
  ],
         
  fields: [

    

    {
      name: "student_Name",
      label: t("Teachers_Admin_dash.Teachers_Table.1"),
      img: arrowIcon,
      type: "input",
      inputType: "text",
      component: "input",


    },
    {
      name: "Class",
      label: t("Teachers_Admin_dash.Teachers_Table.2"),
      img: arrowIcon,
      type: "Dropdown",
      inputType: "text",
      component: "Dropdown",
      options: options_Class,
      onChange :handleChange_Teachers_edit_Dropdown

    },
    {
      name: "Division_name",
      label: t("Teachers_Admin_dash.Teachers_Table.3"),
      img: "<PiUser />",
      type: "input",
      inputType: "text",
      component: "input",


    },
   
  ],
  initialValues : {
    student_Name:edit_content.student_Name,
    Class: edit_content.Class,
    Division_name:edit_content.Division_name,
 



  },

      validationSchema: {
        student_Name: Yup.string(),
        Division_name: Yup.string(),
        


  }
  
};
const handleEdit=(ID)=>{

  const Edit_clicKed=data.find((ob,id)=>{
    set_Edit_active(!Edit_active);
    return ob.ID === ID
  })
  set_edit_content(Edit_clicKed)


}

const formConfig_Add={
  info: [
    { title:"اضاقة أستاذ" },
    { descrption:"يمكنك اضافة أستاذ  من هنا " },
    { button_content:"اضافة أستاذ" }
  ],

  fields: [

    {
      name: "firstname",
      label: "اسم الأول",
      img: "<MdOutlineDriveFileRenameOutline />",
      type: "input",
      inputType: "text",
      component: "input",

    },
    {
      name: "lastname",
      label: " الكنية ",
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
    {
      name: "matrial",
      label:" المادة",
      img: "showpass ? <FaRegEye /> : <FaEyeSlash />",
      type: "Dropdown",
      inputType: "text",
      component: "Dropdown",
      options: matrials?.data,
      onChange: (value)=>{setMatrialSelected(value)},
      isFetched: isFetchedMatrial


    },
    {
      name: "sectionsIds",
      label:" الشعب",
      img: "showpass ? <FaRegEye /> : <FaEyeSlash />",
      type: "selecte",
      inputType: "text",
      component: "selecte",
      selected_option:selected_sections,
      Options:sectionsOptions,
      onChange:(selecteedOption)=>{setSelectedSections(selecteedOption)}


    },

    // Add more fields as needed
  ],
  initialValues: {

      firstname: "",
      lastname: "",
      phoneNumber: "",
      email: "",
      password : "",
      matrial:"",
      sectionsIds:""




    // Initialize other fields
  },

  validationSchema: {
    firstname: Yup.string().required("هذا الحقل مطلوب").matches(/^[A-Za-zأ-ي]*$/, 'غير مسموح باستخدام هذا المحرف  في هذا الحقل')
      .max(30,"لا يجب ان يكون الحقل أطول").min(3,"لا يجب أن يكون الحقل  أقصر"),
      lastname: Yup.string().required("هذا الحقل مطلوب").matches(/^[A-Za-zأ-ي ء]*$/, 'غير مسموح باستخدام هذا المحرف  في هذا الحقل')
      .max(30,"لا يجب ان يكون الحقل أطول").min(3,"لا يجب أن يكون الحقل  أقصر"),
      phoneNumber: Yup.string().required("هذا الحقل مطلوب").matches(/^[0-9]*$/, 'غير مسموح باستخدام هذا المحرف  في هذا الحقل').min(10,"لايمكن ان يكون هذا الحقل أقصر").max(10,"لايمكن أن يكون هذا الحقل أطول"),
      
      email: Yup.string().required("هذا الحقل مطلوب").email(),
    
      password : Yup.string().required("هذا الحقل مطلوب"),
  

     




  }

};

const handleAddSubmit=(values) => {

const sectionIds=selected_sections.map(sectionOption=>(
  sectionOption.value
 ))
const newTecher={
  "firstName": values.firstname,
  "lastName": values.lastname,
  "phoneNumber": values.phoneNumber,
  "email": values.email,
  "password": values.password,
  "materialId": matrialSelected.id,
  "sectionsId": sectionIds
}
AddTecher(newTecher)

}


  return (
    <Content
      path={t("Teachers_Admin_dash.Teachers.0")}
      classNameChildern="bg-white"
    >


      <div className='relative '>

          {Edit_active ? (
            <Edit
               
              Edit_active={Edit_active}
              set_Edit_active={set_Edit_active}
              formConfig={formConfig_Edit}
              rows={data}
              set_data={set_data}


            />
          ) : (
            ""
          )}

{add_student? (
            <Add
            formConfig={formConfig_Add}
              add_active={add_student}
              set_add_active={setadd_student}
              handleSubmit={handleAddSubmit}

          


            />
          ) : (
            ""
          )}







        < TabsFillter>

          <div className='flex  gap-10 items-center justify-between  w-full'>
         <div className='flex gap-10'>
         <span className="ps-2 pe-5 py-1 border-[1px] border-solid border-myGray-100  flex items-center  justify-start rounded-lg   text-myGray-500">
         {Techers?.data.length} {t("home_Admin_dash.record.0")}
            </span>

   
   

  
         </div>
         <div className=''>

<Button className="flex bg-success items-center gap-2 " onClick={() => { setadd_student(true) }}>اضافة أستاذ <IoIosAddCircle /> </Button>
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

                (Techer_fetched.length === 0 ? (
                  <td colSpan={12}>
                    <NoData />
                  </td>
                ) : (
                  Techer_fetched.map((techer, index) => (
                    <TableRow
                      key={techer.id}
                      className={
                        ""
                      }
                      rowIndex={index}
                    >

                       <TableCell> {techer.firstName} {techer.lastName}</TableCell>
                       <TableCell> {techer.material.name} </TableCell>
                       <TableCell> {techer.email} </TableCell>
                       <TableCell> {techer.phoneNumber} </TableCell>
                       <TableCell ><Link to={`/School-website/Admin_dashboard/Teachers/${techer.id}/Divsions`}className='justify-center text-center flex text-lg'>  <LiaSchoolSolid /></Link> </TableCell>

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
  )
}

export default Teachers