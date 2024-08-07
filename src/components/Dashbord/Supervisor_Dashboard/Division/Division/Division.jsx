



import React, { useEffect, useRef, useState } from 'react'
import { useTranslation } from "react-i18next";
import Typography from '../../../../utilities/Typography'
import TabsFillter from '../../../Dashbord_layout/TabsFillter'
import Button from '../../../../utilities/Button'
import NoData from '../../../Dashbord_layout/NoData/NoData'
import Content from '../../../Dashbord_layout/Content/Content';
import Dropdown from '../../../../utilities/Dropdown';
import arrowIcon from "../../../../../assets/icons/arrowDropdown.svg";
import { IoIosAddCircle } from 'react-icons/io';
import * as Yup from "yup";
import Add from '../../../Dashbord_layout/Mangment/Add';
import Edit from '../../../Dashbord_layout/Mangment/Edit';
import { TableCell, TableHeader, TableRow ,Table } from '../../../Dashbord_layout/Table';
import Loading from '../../../../utilities/Loading/Loading';
import { SectionQuery } from '../../../../../API/Sections/SectionsQueries';
import { ClassQuery } from '../../../../../API/Class/ClassQueries';
import { Link } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';
import { RiDeleteBin5Line } from 'react-icons/ri';


const Division = () => {

  const { t } = useTranslation("global");
  const AddRef = useRef(null)
  const [add_active, set_add_active] = useState(false);
  const [edit_active, set_edit_active] = useState(false);
  const [Edit_active, set_Edit_active] = useState(false); 
  const [Division_Dropdown , set_Division_Dropdown ] = useState("");
  const[edit_content,set_edit_content]=useState({})
  const [ sectionFetched,set_section_fetched]=useState([])
  const [ClassFiltterSelected, setClassFiltterSelected] = useState()

  
  const { isLoading, data: Sections, isFetched: FetchedSection, isError, error } = SectionQuery.GetAllSectionQuery()
  const { isLoading: isLoadingClass, data: Class, isFetched: isFetchedClass } = ClassQuery.GetAllClassQuery()
console.log(Sections)
  useEffect(() => {
    


    if (FetchedSection) {
      set_section_fetched(Sections.data)
    }
  

  }, [FetchedSection])
    // filtter class
    const handle_change_filtter_class = (value) => {
      setClassFiltterSelected(value)
      // console.log(value)
  
      const Class_filter = Sections?.data.filter((section) => {
  
        return section.class.id === value.id
      })
     
      set_section_fetched(Class_filter)
  
      // if (Class_filter.length === 0) {
      //   set_data(rows)
  
  
      // }
      // else {
      //   set_data(Class_filter)
  
  
      // }
  
  
    };


  const handleDelte = (ID) => {

    const f = data.find((ob, id) => {
      set_edit_active(!edit_active);
      return ob.ID === ID
    })
    const newRow= rows.filter((row)=>{
       return row.ID !=ID
    })
    console.log(newRow)

    set_data(newRow)


  }
  const  handleChange_Division_Dropdown = (value) => {
    set_Division_Dropdown(value.name)
    const Division_filter= rows.filter((row)=>{
       return row.Division_Name===value.name
    })
    
    if(Division_filter.length === 0){
      set_data(rows)
   
     
    }
    else{
      set_data(Division_filter)


    }


  };
  const  handleChange_Division_Add_Dropdown = (value) => {
  
 


  };


  const TableHeaderArray = [
    t("Division_Supervisor_dash.Division_Table.0") ,
    t("Division_Supervisor_dash.Division_Table.1") ,
    t("Division_Supervisor_dash.Division_Table.2") ,
    // t("Division_Supervisor_dash.Division_Table.3") ,






  ];
 
const options_Division =[
  {name:t("Division_Supervisor_dash.Division_filter.0") },
  {name:t("Division_Supervisor_dash.Division_filter.1") },
  {name:t("Division_Supervisor_dash.Division_filter.2") },
  {name:t("Division_Supervisor_dash.Division_filter.3") },
  {name:t("Division_Supervisor_dash.Division_filter.4") },
  {name:t("Division_Supervisor_dash.Division_filter.5") },
  {name:t("Division_Supervisor_dash.Division_filter.6") }


]

const options_Add_Division =[
  {name:t("Division_Supervisor_dash.Division_filter.1") },
  {name:t("Division_Supervisor_dash.Division_filter.2") },
  {name:t("Division_Supervisor_dash.Division_filter.3") },
  {name:t("Division_Supervisor_dash.Division_filter.4") },
  {name:t("Division_Supervisor_dash.Division_filter.5") },
  {name:t("Division_Supervisor_dash.Division_filter.6") }


]
const formConfig_Add = {
  info :[
  { title:  t("Division_Supervisor_dash.Division.2")},
  {descrption:  t("Division_Supervisor_dash.Division.6")},
  { button_content: t("Division_Supervisor_dash.Division.2")}
  ],
         
  fields: [

    {
      name: "Division",
      label: t("Division_Supervisor_dash.Division.3"),
      img: arrowIcon,
      type: "Dropdown",
      inputType: "text",
      component: "Dropdown",
      options: options_Add_Division,
      onChange :handleChange_Division_Add_Dropdown

    },
    {
      name: "Division",
      label: t("Division_Supervisor_dash.Division.4"),
      img: "<PiUser />",
      type: "input",
      inputType: "text",
      component: "input",


    },
    {
      name: "Number_of_students",
      label: t("Division_Supervisor_dash.Division.5"),
      img: "<PiUser />",
      type: "input",
      inputType: "number",
      component: "input",


    },

  ],
  initialValues : {
    Division: "",
    Division: "",
    Number_of_students: 20,
  },

      validationSchema: {
        // Division: Yup.string().required(t("Division_Supervisor_dash.Division.6")),
        Division: Yup.string().required(t("Division_Supervisor_dash.Division.8")),
        Number_of_students: Yup.number()
    


  }
  
};
const formConfig_Edit = {
  info :[
   { title:  t("Division_Supervisor_dash.Division.9"),},
  {descrption: t("Division_Supervisor_dash.Division.10"),},
  { button_content:t("Division_Supervisor_dash.Division.9"), }
  ],
         
  fields: [

    {
      name: "Division",
      label: t("Division_Supervisor_dash.Division.3"),
      img: arrowIcon,
      type: "Dropdown",
      inputType: "text",
      component: "Dropdown",
      options: options_Add_Division,
      onChange :handleChange_Division_Add_Dropdown

    },
    {
      name: "Division",
      label: t("Division_Supervisor_dash.Division.4"),
      img: "<PiUser />",
      type: "input",
      inputType: "text",
      component: "input",


    },
    {
      name: "Number_of_students",
      label: t("Division_Supervisor_dash.Division.5"),
      img: "<PiUser />",
      type: "input",
      inputType: "number",
      component: "input",


    },
   
  ],
  initialValues : {
    Division: edit_content.Division_Name,
    Division: edit_content.Division_name,
    Number_of_students:edit_content.Number_of_students,



  },

      validationSchema: {
     Subject_Name: Yup.string().min(3,t("Division_Supervisor_dash.Exams.11") ).max(12,t("Division_Supervisor_dash.Exams.12")).required(t("Division_Supervisor_dash.Exams.9")),
    Timing: Yup.date().required(t("Division_Supervisor_dash.Exams.13")),
    Test_type: Yup.string().min(3, (t("Division_Supervisor_dash.Exams.14"))).required(t("Division_Supervisor_dash.Exams.9")),


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
      path={t("Division_Supervisor_dash.Division.0")}
      classNameChildern="bg-white"
      hasExport={true}
      hasRefrech={true}
    >


      <div className='relative '>
  
    







        < TabsFillter>

          <div  className='flex  gap-10 items-center justify-between  w-full'>
         <div className='flex gap-10'>
         <span className="ps-2 pe-5 py-1 border-[1px] border-solid border-myGray-100  flex items-center  justify-start rounded-lg   text-myGray-500">
              {sectionFetched.length} {t("home_Admin_dash.record.0")}
            </span>
            <Dropdown
            isFetched={isFetchedClass}
        // value,
        label={t("الصف")}
        options={Class?.data}
        onChange={handle_change_filtter_class}
        icon={arrowIcon}
        showSlected={true}
        ulClassname={"w-full "}
        classNameIcon=""
        className="sm:w-[12rem] w-[7rem] ease-in-out  border-b-[1px]   border-b-myGray-100 active:border-b-primary focus-within:border-b-primary duration-150"
      />
  
        
         </div>




 

          </div>





        </TabsFillter>
        {/* {data.length >= 1 ? (
          <Table
            columns={columns}
            rows={data}
            handleEdit={handleEdit}
            handleDelte={handleDelte}
            action={{delete: false,update: false }}
            className={"min-h-screen px-6 pt-2"}
            RowlinK={true}
            RowlinK_TO="/School-website/Supervisor_dashboard/Division"
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
        

            <tbody>
              {isLoading ? (
                <td colSpan={12}>
                  <Loading size={60} />
                </td>
              ) :

                (sectionFetched.length === 0 ? (
                  <td colSpan={12}>
                    <NoData />
                  </td>
                ) : (
                  sectionFetched.map((section, index) => (
                    <TableRow
                      key={section.id}
                      className={
                        ""
                      }
                      rowIndex={index}
                    >
                      <TableCell><Link to={`/School-website/Supervisor_dashboard/Division/${section.id}`}> {index +1}</Link></TableCell>

                      <TableCell><Link to={`/School-website/Supervisor_dashboard/Division/${section.id}`}> {section.class.name}</Link></TableCell>
                      <TableCell><Link to={`/School-website/Supervisor_dashboard/Division/${section.id}`}>{section.name}</Link></TableCell>
                      {/* <TableCell><Link to={`/School-website/Supervisor_dashboard/Division/${section.id}`}>{section.size}</Link></TableCell> */}
                    



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

export default Division

