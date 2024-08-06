
import React, { useRef, useState } from 'react'
import { useTranslation } from "react-i18next";
import TabsFillter from '../../Dashbord_layout/TabsFillter'
import NoData from '../../Dashbord_layout/NoData/NoData';
import arrowIcon from "../../../../assets/icons/arrowDropdown.svg";
import Add from '../../Dashbord_layout/Mangment/Add';
import * as Yup from "yup";
import Edit from '../../Dashbord_layout/Mangment/Edit';
import Button from '../../../utilities/Button';
import { IoIosAddCircle } from 'react-icons/io';
import { BehaviersQuery } from '../../../../API/Behavier/BehavierQueries';
import { TableCell, TableHeader, TableRow,Table } from '../../Dashbord_layout/Table';
import Loading from '../../../utilities/Loading/Loading';
import {useParams  } from "react-router-dom";



const Behvier_notification = ({actions,role}) => {
    

    const { t } = useTranslation("global");
    const[add_active,set_add_active]=useState()
    const [Edit_active, set_Edit_active] = useState(false); 
    const[edit_content,set_edit_content]=useState({})
    const {id}=useParams()
 
    const { isLoading, data:Behaviers, isFetched: FetchedStudent, isError, error } = BehaviersQuery.GetAllBehaviersByStudent(id)
    const {mutate:addnote}=BehaviersQuery.AddBehavier()

 
     
  const TableHeaderArray = [
  
    t("Students_Admin_dash.Behvier_notification.1") ,
    t("Students_Admin_dash.Behvier_notification.2") ,
    "اسم المشرف المسؤول",
  actions.delete || actions.update  ?  t("Students_Admin_dash.Behvier_notification.3") :""
   










  ];
  const formConfig_Add={
    info: [
      { title: t("Division_Supervisor_dash.Behvier_notification.0") },
      { descrption: t("Division_Supervisor_dash.Behvier_notification.1") },
      { button_content: t("Division_Supervisor_dash.Behvier_notification.0") }
    ],

    fields: [

   
   

     
      {
        name: "notification",
        label: t("Division_Supervisor_dash.Behvier_notification.3"),
        img: "<MdOutlineDriveFileRenameOutline />",
        type: "",
        inputType: "text",
        component: "input",
      },

      // Add more fields as needed
    ],
    initialValues: {
   
      notification: "",
    




      // Initialize other fields
    },

    validationSchema: {
      notification: Yup.string().required( t("Division_Supervisor_dash.Behvier_notification.4")),
     
     


    }

  };
  const formConfig_Edit = {
    info :[
     { title:  t("Class_Admin_dash.Class.9"),},
    {descrption: t("Class_Admin_dash.Class.10"),},
    { button_content:t("Class_Admin_dash.Class.9"), }
    ],
    fields: [

   
   

      {
        name: "Timing",
        label: t("Division_Supervisor_dash.Behvier_notification.2"),
        img: "showpass ? <FaRegEye /> : <FaEyeSlash />",
        type: "date",
        inputType: "text",
        component: "input",
  

      },
      {
        name: "notification",
        label: t("Division_Supervisor_dash.Behvier_notification.3"),
        img: "<MdOutlineDriveFileRenameOutline />",
        type: "",
        inputType: "text",
        component: "input",
      },

      // Add more fields as needed
    ],
    initialValues: {
      Timing: edit_content.Timing,
      notification: edit_content.notification,
    




      // Initialize other fields
    },

    validationSchema: {
      notification: Yup.string().required( t("Division_Supervisor_dash.Behvier_notification.4")),
      Timing: Yup.string().required(t("Division_Supervisor_dash.Division_edit_Subject_marks.10")),
     


    }
    
  };
  const handleEdit=(ID)=>{
  
    const Edit_clicKed=data.find((ob,id)=>{
      set_Edit_active(!Edit_active);
      return ob.ID === ID
    })
    set_edit_content(Edit_clicKed)
  
  
  }
  
  const handleDelte = (ID) => {

    const f = data.find((ob, id) => {
      set_Edit_active(!Edit_active);
      return ob.ID === ID
    })
    const newRow= rows.filter((row)=>{
       return row.ID !=ID
    })
  

    setdata(newRow)


  }
  const handleAddSubmit=(values) => {
    console.log(values)
    const NewNotification={
      "description": values.notification,
      "supervisorId":localStorage.getItem("supervisorId"),
      "studentIds": [
        id
      ]
    }
    addnote(NewNotification)
    console.log(NewNotification)
  }
  
  return (
<div className='relative bg-white  mt-3 shadow-slate-300 shadow-verfictionShadow rounded-md'>

{add_active && actions.add ? (
            <Add
            formConfig={formConfig_Add} 
              add_active={add_active}
              set_add_active={set_add_active}
              handleSubmit={handleAddSubmit}
              
         


            />
           
          ) : (
            ""
          )}
    {Edit_active ? (
            <Edit
               
              Edit_active={Edit_active}
              set_Edit_active={set_Edit_active}
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
              {Behaviers?.data.length} {t("home_Admin_dash.record.0")}
            </span>


     
  </div>

{role ==='Supervioser' && (
    <div className=''>
     
    <Button  className="flex bg-success items-center gap-2 " onClick={()=>{set_add_active(true)}}>{t("Division_Supervisor_dash.Behvier_notification.0")} <IoIosAddCircle /> </Button>
    </div>
)}


       
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

                (Behaviers?.data.length === 0 ? (
                  <td colSpan={12}>
                    <NoData />
                  </td>
                ) : (
                  Behaviers?.data.map((behavier, index) => {
                    const date=new Date(behavier.createDate)
                    return(
                    <TableRow
                      key={behavier.id}
                      className={
                        ""
                      }
                      rowIndex={index}
                    >

<TableCell className=" ">{date.getDate()}-{date.getUTCMonth() + 1}-{date.getUTCFullYear()}  : {date.getHours()} :{date.getMinutes()}</TableCell>

                      <TableCell>{behavier.description} </TableCell>
                      <TableCell>{behavier.supervisor.firstName} {behavier.supervisor.lastName}</TableCell>

                      

                     
          


          



                    
                    </TableRow>
                  )})
                )

                )
              }


            </tbody>
          </Table>
        </div>
</div>
  )
}

export default Behvier_notification

