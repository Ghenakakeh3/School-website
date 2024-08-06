





import React, { useRef, useState } from 'react'
import { useTranslation } from "react-i18next";
import TabsFillter from '../../../Dashbord_layout/TabsFillter'
import NoData from '../../../Dashbord_layout/NoData/NoData';

import Add from '../../../Dashbord_layout/Mangment/Add';
import * as Yup from "yup";
import Edit from '../../../Dashbord_layout/Mangment/Edit';
import { SearchBar } from '../../../../utilities/SearchBar/SearchBar';
import { SearchResultsList } from '../../../../utilities/SearchBar/SearchResultsList';
import { useParams } from 'react-router-dom';
import { StudentQuery } from '../../../../../API/Students/StudentsQueries';
import { TableCell, TableHeader, TableRow,Table } from '../../../Dashbord_layout/Table';
import Loading from '../../../../utilities/Loading/Loading';

const Division_students = () => {
  
 
    const { t } = useTranslation("global");
    const[add_Division_students,setadd_Division_students]=useState(false)
    const AddRef=useRef(null)
    const[Edit_active,setEdit_active]=useState(false)
    const[edit_content,set_edit_content]=useState({})
    const [results, setResults] = useState([]);
    const [selected_result, setselected_result] = useState("");
    const { id } = useParams();


    const { isLoading, data: Students, isFetched: FetchedStudents, isError, error } = StudentQuery.GetStudentBySectionnQuery(id)

    console.log(Students)
  
    


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


  const formConfig_Add = {
    info :[
     { title:  t("Class_Admin_dash.Subjects.5")},
    {descrption: t("Class_Admin_dash.Subjects.6")},
    { button_content:t("Class_Admin_dash.Subjects.7") }
    ],
           
    fields: [

      {
        name: "Subject_Name",
        label: t("Class_Admin_dash.Subjects.1"),
        img: "<MdOutlineDriveFileRenameOutline />",
        type: "input",
        inputType: "text",
        component: "input",

      },
      {
        name: "Number_of_classes",
        label: t("Class_Admin_dash.Subjects.2"),
        img: "<PiUser />",
        type: "input",
        inputType: "number",
        component: "input",


      },
  
      {
        name: "Subject_teacher",
        label: t("Class_Admin_dash.Subjects.3"),
        img:"showpass ? <FaRegEye /> : <FaEyeSlash />" ,
        type: "input",
        inputType: "text" ,
        component: "input",


      },
     
      // Add more fields as needed
    ],

        validationSchema: {
          Subject_Name: Yup.string().min(3,t("Class_Admin_dash.Subjects.11") ).max(12,t("Class_Admin_dash.Subjects.12")).required(t("Class_Admin_dash.Subjects.8")),

      Number_of_classes: Yup.number().required(t("Class_Admin_dash.Subjects.10")).min(0, t("Class_Admin_dash.Subjects.13")),
      Subject_teacher: Yup.string().min(3, (t("Class_Admin_dash.Subjects.14"))).required(t("Class_Admin_dash.Subjects.9")),


    }
    
  };
  const formConfig_Edit = {
    info :[
     { title:  t("Class_Admin_dash.Subjects.15")},
    {descrption: t("Class_Admin_dash.Subjects.16")},
    { button_content:t("Class_Admin_dash.Subjects.15") }
    ],
           
    fields: [

      {
        name: "Subject_Name",
        label: t("Class_Admin_dash.Subjects.1"),
        img: "<MdOutlineDriveFileRenameOutline />",
        type: "input",
        inputType: "text",
        component: "input",
        value: edit_content.Name
      },
      {
        name: "Number_of_classes",
        label: t("Class_Admin_dash.Subjects.2"),
        img: "<PiUser />",
        type: "input",
        inputType: "number",
        component: "input",
        value: edit_content.Number_of_classes

      },
  
      {
        name: "Subject_teacher",
        label: t("Class_Admin_dash.Subjects.3"),
        img:"showpass ? <FaRegEye /> : <FaEyeSlash />" ,
        type: "input",
        inputType: "text" ,
        component: "input",
        value:  edit_content.Subject_teacher

      },
     
      // Add more fields as needed
    ],

        validationSchema: {
          Subject_Name: Yup.string().min(3,t("Class_Admin_dash.Subjects.11") ).max(12,t("Class_Admin_dash.Subjects.12")).required(t("Class_Admin_dash.Subjects.8")),

      Number_of_classes: Yup.number().required(t("Class_Admin_dash.Subjects.10")).min(0, t("Class_Admin_dash.Subjects.13")),
      Subject_teacher: Yup.string().min(3, (t("Class_Admin_dash.Subjects.14"))).required(t("Class_Admin_dash.Subjects.9")),


    }
    
  };
 const handleEdit=(ID)=>{

  const Edit_clicKed=data.find((ob,id)=>{
    setEdit_active(!Edit_active);
    return ob.ID === ID
  })
  set_edit_content(Edit_clicKed)


}
  return (
<div className='relative'>
{add_Division_students ? (
            <Add
            formConfig={formConfig_Add}
              ref={AddRef}  
              add_active={add_Division_students}
              set_add_active={setadd_Division_students}
              rows={data}
              set_data={setdata}


            />
          ) : (
            ""
          )}

          
{Edit_active ? (
            <Edit
               
              Edit_active={Edit_active}
              set_Edit_active={setEdit_active}
              formConfig={formConfig_Edit}
              rows={data}
              set_data={setdata}


            />
          ) : (
            ""
          )}
<TabsFillter>
<div className='flex   items-center w-full justify-between'>
  <div className='flex gap-10'>
  <span className="ps-2 pe-5 py-1 border-[1px] border-solid border-myGray-100  flex items-center  justify-start rounded-lg   text-myGray-500">
              {Students?.length} {t("home_Admin_dash.record.0")}
            </span>


        
   
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

                (Students?.length === 0 ? (
                  <td colSpan={12}>
                    <NoData />
                  </td>
                ) : (
                 
                  Students?.map((student,index)=>(
                    <TableRow
                    key={index}
                    className={
                      ""
                    }
                    rowIndex={index}
                  >
                       
                       <TableCell>{student.firstName} {student.lastName}</TableCell>
                      <TableCell> {student.class.name}</TableCell>
                      <TableCell> {student.section.name}</TableCell>
                      <TableCell> {student.phoneNumber}</TableCell>
                      {/* <TableCell> {student.birtDate}</TableCell> */}
                      <TableCell> {student.email}</TableCell>
                      <TableCell> {student.parent.fatherName}</TableCell>
                      <TableCell> {student.parent.motherName}</TableCell>
                      <TableCell> {student.parent.phoneNumber}</TableCell>


 
                 



                      

                      </TableRow>

                  ))
                  
                  
                 
                
                 


                   
                
                )

                )
              }


            </tbody>
          </Table>
        </div>
</div>
  )
}

export default Division_students