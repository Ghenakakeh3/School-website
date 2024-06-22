import React from 'react'
import Modrators_image from '../../../../assets/modrator_image.png'
import Typography from '../../../utilities/Typography'
import { useTranslation } from 'react-i18next';

const Supervisor_Home = () => {
    const { t } = useTranslation("global");
  return (
    <div className='mx-auto min-h-screen w-2/3  flex flex-col justify-center items-center'>
      <img src={Modrators_image} alt="" className='' />
      <Typography component='h3'>{t("Supervisor_Home.0")}</Typography>
    </div>
  )
}

export default Supervisor_Home
