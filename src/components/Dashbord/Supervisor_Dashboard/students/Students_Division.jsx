





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
import { StudentQuery } from '../../../../API/Students/StudentsQueries';
import { ClassQuery } from '../../../../API/Class/ClassQueries';
import { TableCell, TableHeader, TableRow ,Table} from '../../Dashbord_layout/Table';
import Loading from '../../../utilities/Loading/Loading';
import { Link } from 'react-router-dom';
import { IoIosAddCircle } from 'react-icons/io';
import Add from '../../Dashbord_layout/Mangment/Add';
import { ParentsQuery } from '../../../../API/Parents/ParentsQueries';
import { SectionQuery } from '../../../../API/Sections/SectionsQueries';


const Students_Division = () => {

  const { t } = useTranslation("global");
  const [add_student, setaadd_student] = useState(false);
  const [Edit_active, set_Edit_active] = useState(false); 
  const [Students_Dropdown , set_Students_Dropdown] = useState("");
  const[edit_content,set_edit_content]=useState({})
  const [Search, setSearch] = useState("");
  const [addStudent,setadd_student]=useState(false)
  const [selectedSection,setSectionSelected]=useState()
  const [parentSelected,setParentSelected]=useState()
  const[selectedGender,setGenderSelected]=useState()

  const [Student_fetched, set_student_fetched] = useState([])
  const [StudentsFiltterSelected, setStudentFiltterSelected] = useState()
  const [parentOption,setparentOption]=useState([])

  const { isLoading, data:Students, isFetched: FetchedStudent, isError, error } = StudentQuery.GetAllStudentQuery(Search)
  const{mutate:AddStudent}=StudentQuery.AddStudent()
  const { isLoading: isLoadingClass, data: Class, isFetched: isFetchedClass } = ClassQuery.GetAllClassQuery()
  const {data:sections,isSuccess,isLoading:loadingSections,isFetched:isFetchedSection}=SectionQuery.GetAllSectionQuery()
  const {data:parents, isFetched:isFetchedParent}=ParentsQuery.GetAllparents()

console.log(selectedSection)
console.log(parentSelected)
console.log(selectedGender)
useEffect(() => {
  const ParentsOptions=parents?.data.map((parent) => ({
    id:parent.id,
    name:`الأب: ${parent.fatherName}    الأم  :${parent.motherName}`
  }
)
  )
  setparentOption(ParentsOptions)
 
}
,[isFetchedParent])

const Gender=[
  {id:1,name:"ذكر"},
  {id:2,name:"أنثى"}

]

  useEffect(() => {
    if (FetchedStudent) {
      set_student_fetched(Students.data)
    }

  }, [FetchedStudent,Search])


  const handle_change_filtter_class = (value) => {
    setStudentFiltterSelected(value)
    // console.log(value)

    const Class_filter = Students?.data.filter((student) => {

      return student.class.id === value.id
    })

    set_student_fetched(Class_filter)

    // if (Class_filter.length === 0) {
    //   set_data(rows)


    // }
    // else {
    //   set_data(Class_filter)


    // }


  };

  const TableHeaderArray = [

    t("Students_Admin_dash.Students_Table.1") ,
    t("Students_Admin_dash.Students_Table.2") ,
    t("Students_Admin_dash.Students_Table.3") ,
    t("Students_Admin_dash.Students_Table.4") ,
    // t("Students_Admin_dash.Students_Table.5") ,
    t("Students_Admin_dash.Students_Table.6") ,
    t("Students_Admin_dash.Students_Table.7") ,
    t("Students_Admin_dash.Students_Table.8") ,
    t("Students_Admin_dash.Students_Table.9") ,
   









  ];
 





const handleChange_Search=(value)=>{
  console.log(value)
  setSearch(value)
}




  
  
  const  handleChange_Students_Dropdown = (value) => {
    set_Students_Dropdown(value.name)
    const Students_filter= rows.filter((row)=>{
       return row. Class===value.name
    })
    if(Students_filter.length ===0){
      set_data(rows)
   
     
    }
    else{
      set_data(Students_filter)


    }


  };
  const  handleChange_Students_edit_Dropdown = (value) => {
  
 
set_Edit_active(!Edit_active)

  };



;
 




const formConfig_Add={
  info: [
    { title:"اضاقة طالب" },
    { descrption:"يمكنك اضافة طالب  من هنا " },
    { button_content:"اضافة طالب" }
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
      name: "sections",
      label:" الشعبة",
      img: "showpass ? <FaRegEye /> : <FaEyeSlash />",
      type: "Dropdown",
      inputType: "text",
      component: "Dropdown",
      options: sections?.data,
      onChange: (value)=>{setSectionSelected(value)},
      isFetched: isFetchedSection


    },
    {
      name: "parent",
      label:" الأهل",
      img: "showpass ? <FaRegEye /> : <FaEyeSlash />",
      type: "Dropdown",
      inputType: "text",
      component: "Dropdown",
      options: parentOption,
      onChange: (value)=>{setParentSelected(value)},
      isFetched: isFetchedParent


    },
    {
      name: "ismale",
      label:" الجنس",
      img: "showpass ? <FaRegEye /> : <FaEyeSlash />",
      type: "Dropdown",
      inputType: "text",
      component: "Dropdown",
      options: Gender,
      onChange: (value)=>{setGenderSelected(value)},
    


    },
   
   

    // Add more fields as needed
  ],
  initialValues: {

      firstname: "",
      lastname: "",
      phoneNumber: "",
      email: "",
      password : "",

      sectionsIds:"",
      ismale:""




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
  console.log(values)
  const newStudent={
    "firstName": values.firstname    ,
    "lastName": values.lastname,
    // "birtDate": "2024-08-05T22:08:20.817Z",
    "phoneNumber": values.phoneNumber,
    "email": values.email,
    "password": values.password,
    "sectionId": selectedSection.id,
    "parentId": parentSelected.id,
    "isMale": selectedGender.id===1 ? true :false
  }
console.log(newStudent)
AddStudent(newStudent)

}
    


  return (
    <Content
      path={t("Students_Admin_dash.Students.0")}
      classNameChildern="bg-white"
    >


      <div className='relative '>

      {add_student? (
            <Add
            formConfig={formConfig_Add}
     
              add_active={add_student}
              set_add_active={setaadd_student}
              handleSubmit={handleAddSubmit}
          


            />
          ) : (
            ""
          )}







        < TabsFillter>

          <div className='flex  gap-10 items-center justify-between  w-full'>
         <div className='flex gap-10'>
         <span className="ps-2 pe-5 py-1 border-[1px] border-solid border-myGray-100  flex items-center  justify-start rounded-lg   text-myGray-500">
              {Students?.data.length} {t("home_Admin_dash.record.0")}
            </span>
            <Dropdown
            isFetched={isFetchedClass}
        // value,
        label={t("Class_Admin_dash.Class.0")}
        options={Class?.data}
        onChange={handle_change_filtter_class}
        icon={arrowIcon}
        showSlected={true}
        ulClassname={"w-full "}
        classNameIcon=""
        className="sm:w-[12rem] w-[7rem] ease-in-out  border-b-[1px]   border-b-myGray-100 active:border-b-primary focus-within:border-b-primary duration-150"
      />

      

<InputSearch
        name="Search"
        // value={selected_result != "" ?  selected_result : input  }
        value={ Search }

        
        onChange={handleChange_Search}
        errorMsg=""
        type="text"
        handleOnclick=""
        placeholder={t("Students_Admin_dash.Students_Table.1")}
      
      
       />


   
   
  
         </div>
         <div className=''>

<Button className="flex bg-success items-center gap-2 " onClick={() => { setaadd_student(true) }}>اضافة طالب <IoIosAddCircle /> </Button>
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

                (Student_fetched.length === 0 ? (
                  <td colSpan={12}>
                    <NoData />
                  </td>
                ) : (
                  Student_fetched.map((student, index) => (
                    <TableRow
                      key={student.id}
                      className={
                        ""
                      }
                      rowIndex={index}
                    >

                      <TableCell><Link to={`/School-website/Supervisor_dashboard/students/${student.id}`}> {student.firstName} {student.lastName}</Link></TableCell>
                      <TableCell><Link to={`/School-website/Supervisor_dashboard/students/${student.id}`}> {student.class.name}</Link></TableCell>
                      <TableCell><Link to={`/School-website/Supervisor_dashboard/students/${student.id}`}> {student.section.name}</Link></TableCell>
                      <TableCell><Link to={`/School-website/Supervisor_dashboard/students/${student.id}`}> {student.phoneNumber}</Link></TableCell>
                      {/* <TableCell><Link to={`/School-website/Admin_dashboard/students/${student.id}`}> {student.birtDate}</Link></TableCell> */}
                      <TableCell><Link to={`/School-website/Supervisor_dashboard/students/${student.id}`}> {student.email}</Link></TableCell>
                      <TableCell><Link to={`/School-website/Supervisor_dashboard/students/${student.id}`}> {student.parent.fatherName}</Link></TableCell>
                      <TableCell><Link to={`/School-website/Supervisor_dashboard/students/${student.id}`}> {student.parent.motherName}</Link></TableCell>
                      <TableCell><Link to={`/School-website/Supervisor_dashboard/students/${student.id}`}> {student.parent.phoneNumber}</Link></TableCell>


          



                      {/* <TableCell className="flex gap-4 text-xl justify-center mt-2">
                        <div className="cursor-pointer text-[18px] hover:text-success " onClick={() => { handleEdit_Clicked(section.id) }}>
                          <AiOutlineEdit />

                        </div>
                        <div className="cursor-pointer text-[18px] hover:text-error " onClick={() => { }}>
                          <RiDeleteBin5Line />
                        </div>

                      </TableCell> */}
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

export default Students_Division

