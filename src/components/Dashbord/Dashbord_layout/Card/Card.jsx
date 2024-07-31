import React from 'react'
import Typography from '../../../utilities/Typography'
import Button from '../../../utilities/Button'
import per from '../../../../assets/per.jpg'
import { useTranslation } from "react-i18next";

 export const Card_student = ({ student,edit}) => {
  const { t } = useTranslation("global");
  
  return (
    <div className='bg-white flex flex-col  items-center  min-h-screen w-[22%] px-5 pt-10 shadow-current rounded-md'>

        <img src={per} alt=""  className='rounded-full w-[150px] h-[150px] '/>
        <Typography>{student.id}</Typography>
        <Typography component="h3"  className='mt-5 mb-2'>{student?.firstName} {student?.lastName}</Typography>
      
       {edit && ( <Button  className="w-[50%] mt-5">{t("Students_Admin_dash.Students_Action.0")}</Button>)}
        <div className='flex flex-col mt-6 gap-5' >

          <Typography component={""} className="text-[20px]"> اسم الأب : {student?.parent?.fatherName}</Typography>
          <Typography component={""} className="text-[20px]">اسم الأم : {student?.parent?.motherName }</Typography>
          <Typography component={""} className="text-[20px]">رقم هاتف الوالدين : {student?.parent?.phoneNumber }</Typography>

          
          <Typography component={""} className="text-[20px]">{t("Students_Admin_dash.Card_student.3")} : {student.creationDate}</Typography>
          <Typography component={""} className="text-[20px]">تاريخ االميلاد : {student.birtDate}</Typography>
          <Typography component={""} className="text-[20px]">البريد الالكتروني : {student.email}</Typography>
          <Typography component={""} className="text-[20px]">رقم هاتف الطالب : {student.phoneNumber}</Typography>

          


    

        </div>

      
    </div>
  )
}

export const Card_Teacher = ({Teacher,edit}) => {
  const { t } = useTranslation("global");
  
  return (
    <div className='bg-white flex flex-col  items-center  min-h-screen w-[22%]  pt-10 shadow-current rounded-md'>

        <img src={per} alt=""  className='rounded-full w-[150px] h-[150px] '/>
        <Typography component="h3"  className='mt-5 mb-2'>{Teacher.student_Name}</Typography>
      <Typography>{Teacher.ID}</Typography>
       {edit && ( <Button  className="w-[50%] mt-5">{t("Students_Admin_dash.Students_Action.0")}</Button>)}
        <div className='flex flex-col mt-6 gap-5' >
        <Typography component={""} className="text-[20px]">الاسم : {Teacher.firstName} {Teacher.lastName}</Typography>
        <Typography component={""} className="text-[20px]">المادة : {Teacher.material?.name }</Typography>
        <Typography component={""} className="text-[20px]">رقم الهاتف : {Teacher.phoneNumber} </Typography>
        <Typography component={""} className="text-[20px]">الاسم : {Teacher.firstName} </Typography>


          {/* <Typography component={""} className="text-[20px]">{t("Students_Admin_dash.Card_student.0")} : {Teacher.Genders}</Typography>
          <Typography component={""} className="text-[20px]">{t("Students_Admin_dash.Card_student.1")} : {Teacher.father}</Typography>
          <Typography component={""} className="text-[20px]">{t("Students_Admin_dash.Card_student.2")} : {Teacher.mom ? Teacher.mom : "-" }</Typography>
          <Typography component={""} className="text-[20px]">{t("Students_Admin_dash.Card_student.3")} : {Teacher.date_of_birth}</Typography> */}


    

        </div>

      
    </div>
  )
}



