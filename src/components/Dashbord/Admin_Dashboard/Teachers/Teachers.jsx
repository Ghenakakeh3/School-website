




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



const Teachers = () => {
 
  const { t } = useTranslation("global");
  const [edit_active, set_edit_active] = useState(false);
  const [Edit_active, set_Edit_active] = useState(false); 
  const [Teachers_Dropdown , set_Teachers_Dropdown] = useState("");
  const[edit_content,set_edit_content]=useState({})
  const [results, setResults] = useState([]);
  const [selected_result, setselected_result] = useState("");

  const [Techer_fetched, set_Techer_fetched] = useState([])
 

  const { isLoading, data:Techers, isFetched: FetchedTechers, isError, error } = TeatcherQuery.GetAllTeatcherQuery()
  const { isLoading: isLoadingClass, data: Class, isFetched: isFetchedClass } = ClassQuery.GetAllClassQuery()

console.log(Techers)
  useEffect(() => {
    if (FetchedTechers) {
      set_Techer_fetched(Techers.data)
    }

  }, [FetchedTechers])



  const TableHeaderArray = [

   
    t("Teachers_Admin_dash.Teachers_Table.1") ,
    t("Teachers_Admin_dash.Teachers_Table.2") ,
    t("Teachers_Admin_dash.Teachers_Table.3") ,
    t("Teachers_Admin_dash.Teachers_Table.4") ,
    t("Teachers_Admin_dash.Teachers_Table.5") ,
    t("Teachers_Admin_dash.Teachers_Table.6") ,

   









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







        < TabsFillter>

          <div className='flex  gap-10 items-center justify-between  w-full'>
         <div className='flex gap-10'>
         <span className="ps-2 pe-5 py-1 border-[1px] border-solid border-myGray-100  flex items-center  justify-start rounded-lg   text-myGray-500">
         {Techers?.data.length} {t("home_Admin_dash.record.0")}
            </span>
            {/* <Dropdown
        // value,
        isFetched={isFetchedClass}
        label={t("Class_Admin_dash.Class.0")}
        options={Class?.data}
        onChange={handle_change_filtter_class}
        icon={arrowIcon}
        showSlected={true}
        ulClassname={"w-full "}
        classNameIcon=""
        className="sm:w-[12rem] w-[7rem] ease-in-out  border-b-[1px]   border-b-myGray-100 active:border-b-primary focus-within:border-b-primary duration-150"
      /> */}

<div className="search-bar-container relative ">
        <SearchBar setResults={setResults} selected_result={selected_result} placeholder={ t("Teachers_Admin_dash.Teachers_Table.1") } />
        {results && results.length > 0 && <SearchResultsList results={results} setselected_result={setselected_result} />}
      </div>
   
   
  
         </div>




 

          </div>





        </TabsFillter>
        {/* {data.length >= 1 ? (
          <Table
            columns={columns}
            rows={data}
            handleEdit={handleEdit}
            handleDelte={handleDelte}
            action={{delete: true,update: true }}
            className={"min-h-screen px-6 pt-2"}
            RowlinK={true}
            RowlinK_TO="/Admin_dashboard/Teachers"
           
          />
        ) : (
          <NoData ></NoData>
        )} */}






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

                      <TableCell className="flex gap-4 text-xl justify-center mt-2 ">
                        <div className="cursor-pointer text-[18px] hover:text-success " onClick={() => { handleEdit_Clicked(section.id) }}>
                          <AiOutlineEdit />

                        </div>
                        <div className="cursor-pointer text-[18px] hover:text-error " onClick={() => { }}>
                          <RiDeleteBin5Line />
                        </div>

                      </TableCell>
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