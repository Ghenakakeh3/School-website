



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
import { Link } from 'react-router-dom';
import { StudentQuery } from '../../../../API/Students/StudentsQueries';
import { ClassQuery } from '../../../../API/Class/ClassQueries';


const Students = () => {

  const { t } = useTranslation("global");
  const [edit_active, set_edit_active] = useState(false);
  const [Edit_active, set_Edit_active] = useState(false); 
  const [Students_Dropdown , set_Students_Dropdown] = useState("");
  const[edit_content,set_edit_content]=useState({})
  const [Search, setSearch] = useState("");

  const [Student_fetched, set_student_fetched] = useState([])
  const [StudentsFiltterSelected, setStudentFiltterSelected] = useState()

  const { isLoading, data:Students, isFetched: FetchedStudent, isError, error } = StudentQuery.GetAllStudentQuery(Search)
  const { isLoading: isLoadingClass, data: Class, isFetched: isFetchedClass } = ClassQuery.GetAllClassQuery()
console.log(Students)



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




  

  const  handleChange_Students_edit_Dropdown = (value) => {
  
 


  };



  const TableHeaderArray = [

    t("Students_Admin_dash.Students_Table.1") ,
    t("Students_Admin_dash.Students_Table.2") ,
    t("Students_Admin_dash.Students_Table.3") ,
    t("Students_Admin_dash.Students_Table.4") ,
    t("Students_Admin_dash.Students_Table.5") ,
    t("Students_Admin_dash.Students_Table.6") ,
    t("Students_Admin_dash.Students_Table.7") ,
    t("Students_Admin_dash.Students_Table.8") ,
    t("Students_Admin_dash.Students_Table.9") ,
   









  ];
 



const formConfig_Edit = {
  info :[
   { title:  t("Students_Admin_dash.Students.1"),},
  {descrption: t("Students_Admin_dash.Students.2"),},
  { button_content:t("Students_Admin_dash.Students.1"), }
  ],
         
  fields: [

    

    {
      name: "student_Name",
      label: t("Students_Admin_dash.Students_Table.1"),
      img: arrowIcon,
      type: "input",
      inputType: "text",
      component: "input",


    },
    {
      name: "Class",
      label: t("Students_Admin_dash.Students_Table.2"),
      img: arrowIcon,
      type: "Dropdown",
      inputType: "text",
      component: "Dropdown",
      options: Class?.data,
      onChange :handleChange_Students_edit_Dropdown

    },
    {
      name: "Division_name",
      label: t("Students_Admin_dash.Students_Table.3"),
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
const handleChange_Search=(value)=>{
  console.log(value)
  setSearch(value)
}
  return (
    <Content
      path={t("Students_Admin_dash.Students.0")}
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







        < TabsFillter>

          <div className='flex  gap-10 items-center justify-between  w-full'>
         <div className='flex gap-10'>
         <span className="ps-2 pe-5 py-1 border-[1px] border-solid border-myGray-100  flex items-center  justify-start rounded-lg   text-myGray-500">
              {Student_fetched?.length} {t("home_Admin_dash.record.0")}
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
            {/* {(per?.includes("ViewUser") ||
            per?.includes("UpdateUser") ||
            per?.includes("DeleteUser") ||
            per?.includes("ChangeUserStatus")) && ( */}

            {/* )} */}

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

                      <TableCell><Link to={`/School-website/Admin_dashboard/students/${student.id}`}> {student.firstName} {student.lastName}</Link></TableCell>
                      <TableCell><Link to={`/School-website/Admin_dashboard/students/${student.id}`}> {student.class.name}</Link></TableCell>
                      <TableCell><Link to={`/School-website/Admin_dashboard/students/${student.id}`}> {student.section.name}</Link></TableCell>
                      <TableCell><Link to={`/School-website/Admin_dashboard/students/${student.id}`}> {student.phoneNumber}</Link></TableCell>
                      <TableCell><Link to={`/School-website/Admin_dashboard/students/${student.id}`}> {student.birtDate}</Link></TableCell>
                      <TableCell><Link to={`/School-website/Admin_dashboard/students/${student.id}`}> {student.email}</Link></TableCell>
                      <TableCell><Link to={`/School-website/Admin_dashboard/students/${student.id}`}> {student.parent.fatherName}</Link></TableCell>
                      <TableCell><Link to={`/School-website/Admin_dashboard/students/${student.id}`}> {student.parent.motherName}</Link></TableCell>
                      <TableCell><Link to={`/School-website/Admin_dashboard/students/${student.id}`}> {student.parent.phoneNumber}</Link></TableCell>


          



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

export default Students
