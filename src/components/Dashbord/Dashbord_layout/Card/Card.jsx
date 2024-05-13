import React from 'react'
import Typography from '../../../utilities/Typography'
import Button from '../../../utilities/Button'
import per from '../../../../assets/per.jpg'
import { useTranslation } from "react-i18next";

const Card = ({person}) => {
  const { t } = useTranslation("global");
  console.log(person)
  return (
    <div className='bg-white flex flex-col  items-center  min-h-screen w-[25%]  pt-10 shadow-current rounded-md'>

        <img src={per} alt=""  className='rounded-full w-[150px] h-[150px] '/>
        <Typography component="h3"  className='my-5'>{person.student_Name}</Typography>
        <Button  className="w-[50%]">{t("Students_Admin_dash.Students_Action.0")}</Button>
        <div className='flex flex-col mt-6' >



        </div>

      
    </div>
  )
}

export default Card
