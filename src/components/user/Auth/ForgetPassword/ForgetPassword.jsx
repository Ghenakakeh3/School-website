import { useTranslation } from "react-i18next";
import { useState } from 'react'

import { Input } from '../../../utilities/Inputs'
import Typography from '../../../utilities/Typography'
import Button from '../../../utilities/Button'
import AuthDesign from '../AuthDesign/AuthDesign'
import img_1 from "./imgs/schoolbusiness.jpg"
import img_2 from "../Login/logain-image/img_2.jpg"

import vector from './imgs/Vector (3).svg'


export default function ForgetPassword() {
    // translation ..
    const { t } = useTranslation("global");

    // state variants ..
    const [email, setEmail] = useState('')
    const [err, seterr] = useState('')

    // regex for email validation ..
    const regx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
    const handleSubmit = (e) => {
        e.preventDefault()
        if (!email.match(regx)) {
            seterr(t("forget.erremail"))
        } else {
            seterr('')
            window.location.href = '/verification-code';

        }
        console.log(email)
    }

    return (
        <div className='max-w-[1750px] mx-auto my-0 h-screen max-[1100px]:overflow-y-auto max-[1750px]:overflow-hidden'>
            <div className='relative  ltr:left-0  rtl:right-0 z-[-1] '>
                <div className="absolute rotate-45 w-96 h-96 top-10 sm:top-24 bg-sky-50  -start-14 rounded-full"></div>
                <div className="absolute rotate-45 w-96 h-96 top-96 sm:top-[32rem] bg-sky-50  start-28 rounded-full"></div>
                <div></div>
            </div>
            <div className='max-w-[1750px] mx-auto my-0 flex justify-between flex-wrap'>
                <div className='relative flex flex-1 flex-col gap-8 py-[12%] p-[5%] text-start'>
                    <Typography component={'h2'} className={""}>{t("forget.title")}</Typography>
                    <Typography component={'h4'}>{t("forget.p")}</Typography>
                    <form onSubmit={handleSubmit} className='relative space-y-5'>
                        <div className='relative'>
                            <Input onChange={(e) => setEmail(e.target.value)}
                                type='email'
                                errorMsg={err}
                                icon={vector}
                                iconOnClick
                                label={t("forget.placeholder")} />
                        </div>
                        <Button fullWidth>{t("forget.button")}</Button>
                    </form>
                </div>
                <AuthDesign img_1={img_1} img_2={img_2} title={t("forget.resetTitle")} paragraph={t("ImageContainer.aboutUs")} />
            </div>
        </div>
    )
}