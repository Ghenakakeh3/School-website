



import React, { useRef, useState } from 'react'
import { useTranslation } from "react-i18next";
import TabsFillter from '../../Dashbord_layout/TabsFillter'
import NoData from '../../Dashbord_layout/NoData/NoData';
import Radio from '../../../utilities/Radio';
import Button from '../../../utilities/Button';
import Add_acount from '../../Dashbord_layout/Mangment/Acount_mangment/Add_acount';
import Add from '../../Dashbord_layout/Mangment/Add';
import * as Yup from "yup";
import Edit from '../../Dashbord_layout/Mangment/Edit';
import { MarksQuery } from '../../../../API/Marks/MarksQuery';
import { TableCell, TableHeader, TableRow, Table } from '../../Dashbord_layout/Table';
import Loading from '../../../utilities/Loading/Loading';
import { useParams } from 'react-router-dom';

const Subject_marks = () => {


  const { t } = useTranslation("global");
  const [Edit_active, setEdit_active] = useState(false)
  const [edit_content, set_edit_content] = useState({})
  const { id } = useParams();

  const { isLoading, data: Marks, isFetched: FetchedMarks, isError, error } = MarksQuery.GetAllMarksBySection(id)

  console.log(Marks)


  const TableHeaderArray = [
    t("Class_Admin_dash.Subject_marks.0"),
    t("Class_Admin_dash.Subject_marks.1"),
    t("Class_Admin_dash.Subject_marks.2"),
    t("Class_Admin_dash.Subject_marks.3"),







  ];



  const formConfig_Edit = {
    info: [
      { title: t("Class_Admin_dash.Subject_marks.15") },
      { descrption: t("Class_Admin_dash.Subject_marks.16") },
      { button_content: t("Class_Admin_dash.Subject_marks.15") }
    ],

    fields: [

      {
        name: "Subject_Name",
        label: t("Class_Admin_dash.Subject_marks.1"),
        img: "<MdOutlineDriveFileRenameOutline />",
        type: "input",
        inputType: "text",
        component: "input",
        value: edit_content.Name
      },
      {
        name: "Number_of_classes",
        label: t("Class_Admin_dash.Subject_marks.2"),
        img: "<PiUser />",
        type: "input",
        inputType: "number",
        component: "input",
        value: edit_content.Number_of_classes

      },

      {
        name: "Subject_teacher",
        label: t("Class_Admin_dash.Subject_marks.3"),
        img: "showpass ? <FaRegEye /> : <FaEyeSlash />",
        type: "input",
        inputType: "text",
        component: "input",
        value: edit_content.Subject_teacher

      },

      // Add more fields as needed
    ],

    validationSchema: {
      Subject_Name: Yup.string().min(3, t("Class_Admin_dash.Subject_marks.11")).max(12, t("Class_Admin_dash.Subject_marks.12")).required(t("Class_Admin_dash.Subject_marks.8")),

      Number_of_classes: Yup.number().required(t("Class_Admin_dash.Subject_marks.10")).min(0, t("Class_Admin_dash.Subject_marks.13")),
      Subject_teacher: Yup.string().min(3, (t("Class_Admin_dash.Subject_marks.14"))).required(t("Class_Admin_dash.Subject_marks.9")),


    }

  };

  const handleChange_valueRadio = (value) => {
    setValueRadio(value)
  }
  const handleEdit = (ID) => {

    const Edit_clicKed = data.find((ob, id) => {
      setEdit_active(!Edit_active);
      return ob.ID === ID
    })
    set_edit_content(Edit_clicKed)


  }
  return (
    <div className='relative'>



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
              {Marks?.data.length} {t("home_Admin_dash.record.0")}
            </span>
            {/* <div className='flex  items-center gap-5'>
         <Radio     
               value={valueRadio}
          onChange={handleChange_valueRadio} 
          name="" 
          items={radioItems}/>
            </div> */}
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

              (Marks?.data.length === 0 ? (
                <td colSpan={12}>
                  <NoData />
                </td>
              ) : (

                Marks?.data.map((mark, index) => {
                  const date = new Date(mark.date)
                  return (
                    <TableRow
                      key={index}
                      className={
                        ""
                      }
                      rowIndex={index}
                    >

                      <TableCell>{mark.student.firstName} {mark.student.lastName}</TableCell>
                      <TableCell>{mark.material.name}</TableCell>
                      <TableCell>{date.getDate()}-{date.getUTCMonth() + 1}-{date.getUTCFullYear()} : {date.getHours()} :{date.getMinutes()}</TableCell>

                      <TableCell>{mark.mark} </TableCell>














                    </TableRow>

                  )
                })









              )

              )
            }


          </tbody>
        </Table>
      </div>
    </div>
  )
}

export default Subject_marks

