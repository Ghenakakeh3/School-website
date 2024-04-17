import React from 'react'
import { useTranslation } from "react-i18next";

const DashPath = ({path}) => {
  const { t } = useTranslation("global");

  return (
    <div className=' bg-white rounded-md w-[60%] py-1 text-start px-5 '><span className='text-secondary'>{t("DashPath.0")} / </span>{path}</div>

  )
}

export default DashPath
