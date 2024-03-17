import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { useTranslation } from "react-i18next";

import 'swiper/css';
import 'swiper/css/navigation';

import home_img_1 from "./img/carousel-1.jpg"
import home_img_2 from "./img/carousel-2.jpg"



// import required modules
import { Navigation } from 'swiper/modules';
import Button from '../../utilities/Button';
import Typography from '../../utilities/Typography';
import { motion } from "framer-motion"


export default function Home() {
  const { t } = useTranslation("global");
 
  const Typography_animation_title = {
    initial: {y : -500},
    animate: {
      y:0,
      transition: { delay : 1 ,duration : 5 ,type :'spring' ,stiffness: 120 },
    },
  };
  const button_animation_1 = {
    initial: {x: -500},
    animate: {
      x:0,
      transition: { delay : 1 ,duration : 5 ,type :'spring' ,stiffness: 120 },
    },
    
  };
  const button_animation_2 = {
    initial: {x: 1500},
    animate: {
      x:0,
      transition: { delay : 1 ,duration : 6 ,type :'spring' ,stiffness: 40 },
    },
  }
  return (
    <div className='relative '>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
          <div className={`  relative w-full min-h-screen bg-no-repeat bg-center bg-cover before:content-['cvvvvvvvvvv'] before:absolute  before:inset-
           before:bg-black
            before:opacity-30
            before:top-0
            before:right-0
            before:z-[5] before:w-full before:h-full`} style={{ backgroundImage: `url(${home_img_1})` }}>
            <div className='absolute top-1/2 translate-y-[-50%] w-[60%] m-10 flex flex-col p-10 gap-10 text-start'>
              <Typography   Typography_animation={Typography_animation_title} component='h1' className=''>{t("Hero.slide_1.0")}</Typography>
              <Typography component="h4" className="text-white text-[px]">{t("Hero.slide_1.1")} </Typography>
              <div className='flex gap-2'>
                <Button button_animation={button_animation_1} className="w-36 py-3 !rounded-full ltr:me-5 rtl:me-2">{t("Hero.slide_1.2")}</Button>
                <Button button_animation={button_animation_2} className="w-36 py-3 !rounded-full !bg-slate-900">{t("Hero.slide_1.3")}</Button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={`  relative w-full min-h-screen bg-no-repeat bg-center bg-cover before:content-['cvvvvvvvvvv'] before:absolute  before:inset-
           before:bg-black
            before:opacity-30
            before:top-0
            before:right-0
            before:z-[5] before:w-full before:h-full`} style={{ backgroundImage: `url(${home_img_2})` }}>
            <div className='absolute top-1/2 translate-y-[-50%] w-[70%] m-10 flex flex-col p-10 gap-10 text-start'>
              <Typography
              Typography_animation={Typography_animation_title}
                component='h1' className=''>{t("Hero.slide_2.0")}</Typography>
              <Typography component="h4" className="text-white text-[px] w-[80%]">{t("Hero.slide_2.1")} </Typography>
              <div className='flex gap-2 '>
                <Button className="w-36 py-3 !rounded-full ltr:me-5 rtl:me-2 z-20">{t("Hero.slide_2.2")}</Button>
                <Button className="w-36 py-3 !rounded-full !bg-slate-900">{t("Hero.slide_2.3")}</Button>
              </div>
            </div>

          </div>

        </SwiperSlide>

      </Swiper>
    </div>
  )
}
