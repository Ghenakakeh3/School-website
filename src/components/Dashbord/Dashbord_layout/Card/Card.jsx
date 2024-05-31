import React from 'react'
import Typography from '../../../utilities/Typography'
import Button from '../../../utilities/Button'
import per from '../../../../assets/per.jpg'
import { useTranslation } from "react-i18next";

 export const Card_student = ({student,edit}) => {
  const { t } = useTranslation("global");
  
  return (
    <div className='bg-white flex flex-col  items-center  min-h-screen w-[22%]  pt-10 shadow-current rounded-md'>

        <img src={per} alt=""  className='rounded-full w-[150px] h-[150px] '/>
        <Typography component="h3"  className='mt-5 mb-2'>{student.student_Name}</Typography>
      <Typography>{student.ID}</Typography>
       {edit && ( <Button  className="w-[50%] mt-5">{t("Students_Admin_dash.Students_Action.0")}</Button>)}
        <div className='flex flex-col mt-6 gap-5' >
          <Typography component={""} className="text-[20px]">{t("Students_Admin_dash.Card_student.0")} : {student.Genders}</Typography>
          <Typography component={""} className="text-[20px]">{t("Students_Admin_dash.Card_student.1")} : {student.father}</Typography>
          <Typography component={""} className="text-[20px]">{t("Students_Admin_dash.Card_student.2")} : {student.mom ? student.mom : "-" }</Typography>
          <Typography component={""} className="text-[20px]">{t("Students_Admin_dash.Card_student.3")} : {student.date_of_birth}</Typography>


    

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
          <Typography component={""} className="text-[20px]">{t("Students_Admin_dash.Card_student.0")} : {Teacher.Genders}</Typography>
          <Typography component={""} className="text-[20px]">{t("Students_Admin_dash.Card_student.1")} : {Teacher.father}</Typography>
          <Typography component={""} className="text-[20px]">{t("Students_Admin_dash.Card_student.2")} : {Teacher.mom ? Teacher.mom : "-" }</Typography>
          <Typography component={""} className="text-[20px]">{t("Students_Admin_dash.Card_student.3")} : {Teacher.date_of_birth}</Typography>


    

        </div>

      
    </div>
  )
}



