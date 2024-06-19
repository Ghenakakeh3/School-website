import React from 'react'
import Button from '../../../utilities/Button'
import { FaArrowRight } from "react-icons/fa";
import { Textarea } from '../../../utilities/Inputs';
import { useTranslation } from 'react-i18next';


const Send_Adverts = () => {
    const { t } = useTranslation("global");
  return (
  <form action="" className=' py-1 flex gap-3 items-center px-6 ' >
<div className='w-[90%]'>
<Textarea rows={14} name="" id="" className='h-12 w-full'></Textarea>
</div>
<Button type={"submit"} className='w-[10%] h-12 flex items-center  justify-center gap-1'>{t("Adverts.2")} <FaArrowRight /></Button>

  </form>
  )
}

export default Send_Adverts
