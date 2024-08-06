
import React, { useRef, useState } from 'react'
import { useTranslation } from "react-i18next";
import TabsFillter from '../../../Dashbord_layout/TabsFillter'
import NoData from '../../../Dashbord_layout/NoData/NoData';
import Radio from '../../../../utilities/Radio';
import Button from '../../../../utilities/Button';
import { IoIosAddCircle } from "react-icons/io";
import arrowIcon from "../../../../../assets/icons/arrowDropdown.svg";
import Add from '../../../Dashbord_layout/Mangment/Add';
import * as Yup from "yup";
import Edit from '../../../Dashbord_layout/Mangment/Edit';
import { MarksQuery } from '../../../../../API/Marks/MarksQuery';
import { useParams } from 'react-router-dom';
import { TableCell, TableHeader, TableRow ,Table} from '../../../Dashbord_layout/Table';
import Loading from '../../../../utilities/Loading/Loading';
import { ExamQuery } from '../../../../../API/Exam/ExamQuery ';
import { StudentQuery } from '../../../../../API/Students/StudentsQueries';

const Division_Subject_marks = () => {
 
 
  const { t } = useTranslation("global");
  const [valueRadio, setValueRadio] = useState(null)
  const EditRef = useRef(null)
  const [Edit_active, setEdit_active] = useState(false)
  const [add_active, set_add_active] = useState(false)
  const [exam_selected,setEaxam_selected]=useState({})
  const[student_selected,setStudent_selected]=useState({})
  
  const { id } = useParams();

  const { isLoading, data: Marks, isFetched: FetchedMarks, isError, error } = MarksQuery.GetAllMarksBySection(id)
  const {  mutate:Add_mark } = MarksQuery.AddMark()
  const {  data: Exam, isFetched: FetchedExam, } = ExamQuery.GetExamsBySection(id)
  const { data: Students, isFetched: FetchedStudents} = StudentQuery.GetStudentBySectionnQuery(id)



  console.log(Marks)


  const TableHeaderArray = [
    t("Class_Admin_dash.Subject_marks.0"),
    t("Class_Admin_dash.Subject_marks.1"),
    "اسم الاختبار",
    "نوع الاختبار",
    "اسم الأستاذ",
    t("Class_Admin_dash.Subject_marks.2"),
    t("Class_Admin_dash.Subject_marks.3"),







  ];





const handleChange_Exam_Add=(value) => {
  setEaxam_selected(value)
}

const handleChange_student_Add=(value) => {
  setStudent_selected(value)
}

const handleAddSubmit = (values, { setSubmitting }) => {
 
  const newMark={
    "mark":values.mark,
    "examId": exam_selected.id,
    "studentId": student_selected.id
  }
  console.log(newMark)
Add_mark(newMark)






};



    const formConfig_Add={
      info: [
        { title: t("Division_Supervisor_dash.Division_add_Subject_marks.4") },
        { descrption: t("Division_Supervisor_dash.Division_add_Subject_marks.5") },
        { button_content: t("Division_Supervisor_dash.Division_add_Subject_marks.4") }
      ],
  
      fields: [
  
        {
          name: "Exam_Name",
          label: "اسم الاختبار",
          img: "<MdOutlineDriveFileRenameOutline />",
          type: "Dropdown",
          inputType: "text",
          component: "Dropdown",
          options: Exam?.data ,
          onChange: handleChange_Exam_Add,
          isFetched: FetchedExam
  
        },
        {
          name: "student_name",
          label: "اسم الطالب",
          img: "<MdOutlineDriveFileRenameOutline />",
          type: "Dropdown",
          inputType: "text",
          component: "Dropdown",
          options: Students,
          onChange: handleChange_student_Add,
          isFetched: FetchedStudents
  
        },
  
   
        {
          name: "mark",
          label: t("Division_Supervisor_dash.Division_edit_Subject_marks.3"),
          img: "showpass ? <FaRegEye /> : <FaEyeSlash />",
          type: "input",
          inputType: "number",
          component: "input",
  
  
        },
  
        // Add more fields as needed
      ],
      initialValues: {
        Exam_Name: "",
        student_name: "",
        mark:"",
  
  
  
  
        // Initialize other fields
      },
  
      validationSchema: {

        mark: Yup.number().required(t("Division_Supervisor_dash.Division_edit_Subject_marks.11")).min(0,t("Division_Supervisor_dash.Division_edit_Subject_marks.12")).max(100,t("Division_Supervisor_dash.Division_edit_Subject_marks.12")),
  
  
      }
  
    };


  // const formConfig_Edit = {
  //   info: [
  //     { title: t("Division_Supervisor_dash.Division_edit_Subject_marks.5") },
  //     { descrption: t("Division_Supervisor_dash.Division_edit_Subject_marks.6") },
  //     { button_content: t("Division_Supervisor_dash.Division_edit_Subject_marks.5") }
  //   ],

  //   fields: [

  //     {
  //       name: "Student_Name",
  //       label: t("Division_Supervisor_dash.Division_edit_Subject_marks.0"),
  //       img: "<MdOutlineDriveFileRenameOutline />",
  //       type: "",
  //       inputType: "text",
  //       component: "input",
  //     },
  //     {
  //       name: "Subject_Name",
  //       label: t("Division_Supervisor_dash.Division_edit_Subject_marks.1"),
  //       img: arrowIcon,
  //       type: "Dropdown",
  //       inputType: "text",
  //       component: "Dropdown",
  //       options: options_Add_Class,
  //       onChange :handleChange_Class_Add_Dropdown,




  //     },

  //     {
  //       name: "Timing",
  //       label: t("Division_Supervisor_dash.Division_edit_Subject_marks.2"),
  //       img: "showpass ? <FaRegEye /> : <FaEyeSlash />",
  //       type: "date",
  //       inputType: "text",
  //       component: "input",
  

  //     },
  //     {
  //       name: "mark",
  //       label: t("Division_Supervisor_dash.Division_edit_Subject_marks.3"),
  //       img: "showpass ? <FaRegEye /> : <FaEyeSlash />",
  //       type: "input",
  //       inputType: "number",
  //       component: "input",


  //     },

  //     // Add more fields as needed
  //   ],
  //   initialValues: {
  //     Student_Name: edit_content.Student_Name,
  //     Subject_Name: edit_content.Subject_Name,
  //     Timing: edit_content.Timing,
  //     mark: edit_content.mark,




  //     // Initialize other fields
  //   },

  //   validationSchema: {
  //     Student_Name: Yup.string().min(3, t("Division_Supervisor_dash.Division_edit_Subject_marks.8")).max(30, t("Division_Supervisor_dash.Division_edit_Subject_marks.7")).required(t("Division_Supervisor_dash.Division_edit_Subject_marks.9")),
  //     Timing: Yup.string().required(t("Division_Supervisor_dash.Division_edit_Subject_marks.10")),
  //     mark: Yup.number().required(t("Division_Supervisor_dash.Division_edit_Subject_marks.11")).min(0,t("Division_Supervisor_dash.Division_edit_Subject_marks.12")).max(100,t("Division_Supervisor_dash.Division_edit_Subject_marks.12")),


  //   }

  // };

 

  return (
    <div className='relative'>

{add_active ? (
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
          set_Edit_active={setEdit_active}
          formConfig={formConfig_Edit}
          rows={data}
          set_data={setData}
          ref={EditRef}


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
        

          </div>

          <div className=''>
     
     <Button  className="flex bg-success items-center gap-2 " onClick={()=>{set_add_active(true)}}>{t("Division_Supervisor_dash.Division_add_Subject_marks.4")} <IoIosAddCircle /> </Button>
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
                      <TableCell>{mark.name}</TableCell>
                      <TableCell>{mark.type === 0 ?"فحص":"مذاكرة"}</TableCell>
                      <TableCell>{mark.teatcher.firstName} {mark.teatcher.lastName}</TableCell>


                      <TableCell>{date.getDate()}-{date.getMonth() +1 }-{date.getUTCFullYear()} : {date.getHours()} :{date.getMinutes()}</TableCell>

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

export default Division_Subject_marks

