{/* data have title src and sub menus */ }
import React, { useEffect, useRef, useState } from 'react'
import { NavLink, useNavigate } from "react-router-dom";
import back_to_school from "./home_img/n.png"
import Typography from '../../../utilities/Typography'
import { useTranslation } from "react-i18next";
import DatePicker from "react-datepicker"
import "./Home.css"
import Table from '../../Dashbord_layout/TableLayout';
import CircleChart from '../../Dashbord_layout/circle chart/CircleChart';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';
import SimpleAreaChart from '../../Dashbord_layout/SimpleAreaChart/SimpleAreaChart';
import Student_avrege from './Student_avrege';
import SimpleBarChart from '../../../utilities/SimpleBarChart/SimpleBarChart';
import Inner_Links from '../../Dashbord_layout/Content/Inner_Links';


const Home_admin = () => {
  const { t } = useTranslation("global");
  const [startDate, setStartDate] = useState(new Date());
  const [class_selected, setclass_selectede] = useState();
  const currentDate = new Date();
  const arabicOptions = { year: 'numeric', month: 'long', day: 'numeric', weekday: 'long' };
  const englishOptions = { year: 'numeric', month: 'long', day: 'numeric', weekday: 'long', locale: 'en-US' };
  const arabicDate = currentDate.toLocaleDateString('ar-SA', arabicOptions);
  const englishDate = currentDate.toLocaleDateString('en-US', englishOptions);

  const splitDay = (dateString) => {
    const [day, date] = dateString.split('،');
    return { day, date };
  };
  const arabicSplit = splitDay(arabicDate);
  const englishSplit = splitDay(englishDate)
  function table(class_selected) {
    switch (class_selected) {
      case t("home_Admin_dash.links.1"):
        return <Table
          columns={columns}
          rows={rows_2}
         

   
          className="">
        </Table>;
      case t("home_Admin_dash.links.2") :
        return <Table
        columns={columns}
        rows={rows_3}
      


        className="">
      </Table>;
      case t("home_Admin_dash.links.3") :
        return <Table
          columns={columns}
          rows={rows_4}
          

   
          className="">
        </Table>;
      case t("home_Admin_dash.links.4"):
        return   <Table
        columns={columns}
        rows={rows_5}
     

   
        className="">
      </Table>;
      case t("home_Admin_dash.links.5") :
        return   <Table
        columns={columns}
        rows={rows_6}
  

   
        className="">
      </Table>;

      // Add cases for other days as needed
      default:
        return   <Table
        columns={columns}
        rows={rows_1}

        className="">
      </Table>;
    }
  }



  const links = [
    { name: t("home_Admin_dash.links.0"), to: "/Admin_dashboard", },
    { name: t("home_Admin_dash.links.1"), to: "/Admin_dashboard/2", },
    { name: t("home_Admin_dash.links.2"), to: "/Admin_dashboard/3", },
    { name: t("home_Admin_dash.links.3"), to: "/Admin_dashboard/4", },
    { name: t("home_Admin_dash.links.4"), to: "/Admin_dashboard/5" },
    { name: t("home_Admin_dash.links.5"), to: "/Admin_dashboard/6" }


  ];
  const columns = [
    "",
    "8:00",
    "8:45",
    "9:30",
    "10:15",
    "11:00",
    "11:45",

  ];
  const rows_1 = [
    {
      title: " الشعبة الأولى",
      Subject_1: "اللغة العربية ",
      Subject_2: "الرياضيات ",
      Subject_3: "اللغة الإنجليزية  ",
      Subject_4: "التربية الدينية ",
      Subject_5: "رياضة ",
      Subject_6: "اللغة الإنجليزية  ",

    },
    {
      title: "الشعبة الثانية ",
      Subject_1: "  العلوم",
      Subject_2: "الرياضيات ",
      Subject_3: "رياضة ",
      Subject_4: "اللغة الإنجليزية  ",
      Subject_5: "التربية الدينية ",
      Subject_6: " اللغة العربية  ",

    },
    {
      title: "الشعبة الثالثة ",

      Subject_1: "اللغة الإنجليزية  ",
      Subject_2: "الرياضيات ",
      Subject_3: "العلوم ",
      Subject_4: "رياضة ",
      Subject_5: "اللغة العربية ",
      Subject_6: " التربية الدينية  ",
    },
    {
      title: "الشعبة الرابعة",

      Subject_1: "رياضة ",
      Subject_2: "الرياضيات ",
      Subject_3: "اللغة العربية ",
      Subject_4: "اللغة الإنجليزية  ",
      Subject_5: "التربية الدينية ",
      Subject_6: "العلوم ",
    },
  ];
  const rows_4 = [
    {
      title: " الشعبة الأولى",
      Subject_1: "  العلوم",
      Subject_2: "الرياضيات ",
      Subject_3: "رياضة ",
      Subject_4: "اللغة الإنجليزية  ",
      Subject_5: "التربية الدينية ",
      Subject_6: " اللغة العربية  ",

    },
    {
      title: "الشعبة الثانية ",
      Subject_1: "اللغة العربية ",
      Subject_2: "الرياضيات ",
      Subject_3: "اللغة الإنجليزية  ",
      Subject_4: "التربية الدينية ",
      Subject_5: "رياضة ",
      Subject_6: "اللغة الإنجليزية  ",
    },
    {
      title: "الشعبة الثالثة ",
      Subject_1: "اللغة العربية ",
      Subject_2: "الرياضيات ",
      Subject_3: "اللغة الإنجليزية  ",
      Subject_4: "التربية الدينية ",
      Subject_5: "رياضة ",
      Subject_6: "اللغة الإنجليزية  ",

 
    },
    {
      title: "الشعبة الرابعة",

      Subject_1: "اللغة الإنجليزية  ",
      Subject_2: "الرياضيات ",
      Subject_3: "العلوم ",
      Subject_4: "رياضة ",
      Subject_5: "اللغة العربية ",
      Subject_6: " التربية الدينية  ",
    },
  ];
  const rows_3 = [
    {
      title: " الشعبة الأولى",
      Subject_1: "اللغة العربية ",
      Subject_2: "الرياضيات ",
      Subject_3: "اللغة الإنجليزية  ",
      Subject_4: "التربية الدينية ",
      Subject_5: "رياضة ",
      Subject_6: "اللغة الإنجليزية  ",

    },
    {
      title: "الشعبة الثانية ",
      Subject_1: "  العلوم",
      Subject_2: "الرياضيات ",
      Subject_3: "رياضة ",
      Subject_4: "اللغة الإنجليزية  ",
      Subject_5: "التربية الدينية ",
      Subject_6: " اللغة العربية  ",

    },
    {
      title: "الشعبة الثالثة ",

      Subject_1: "اللغة الإنجليزية  ",
      Subject_2: "الرياضيات ",
      Subject_3: "العلوم ",
      Subject_4: "رياضة ",
      Subject_5: "اللغة العربية ",
      Subject_6: " التربية الدينية  ",
    },
    {
      title: "الشعبة الرابعة",

      Subject_1: "رياضة ",
      Subject_2: "الرياضيات ",
      Subject_3: "اللغة العربية ",
      Subject_4: "اللغة الإنجليزية  ",
      Subject_5: "التربية الدينية ",
      Subject_6: "العلوم ",
    },
  ];
  const rows_2 = [
    {
      title: " الشعبة الأولى",
      Subject_1: "اللغة العربية ",
      Subject_2: "الرياضيات ",
      Subject_3: "اللغة الإنجليزية  ",
      Subject_4: "التربية الدينية ",
      Subject_5: "رياضة ",
      Subject_6: "اللغة الإنجليزية  ",

    },
    {
      title: "الشعبة الثانية ",
      Subject_1: "  العلوم",
      Subject_2: "الرياضيات ",
      Subject_3: "رياضة ",
      Subject_4: "اللغة الإنجليزية  ",
      Subject_5: "التربية الدينية ",
      Subject_6: " اللغة العربية  ",

    },
    {
      title: "الشعبة الثالثة ",

      Subject_1: "اللغة الإنجليزية  ",
      Subject_2: "الرياضيات ",
      Subject_3: "العلوم ",
      Subject_4: "رياضة ",
      Subject_5: "اللغة العربية ",
      Subject_6: " التربية الدينية  ",
    },
    {
      title: "الشعبة الرابعة",

      Subject_1: "رياضة ",
      Subject_2: "الرياضيات ",
      Subject_3: "اللغة العربية ",
      Subject_4: "اللغة الإنجليزية  ",
      Subject_5: "التربية الدينية ",
      Subject_6: "العلوم ",
    },
  ];
  const rows_5 = [
    {
      title: " الشعبة الأولى",
      Subject_1: "اللغة العربية ",
      Subject_2: "الرياضيات ",
      Subject_3: "اللغة الإنجليزية  ",
      Subject_4: "التربية الدينية ",
      Subject_5: "رياضة ",
      Subject_6: "اللغة الإنجليزية  ",

    },
    {
      title: "الشعبة الثانية ",
      Subject_1: "  العلوم",
      Subject_2: "الرياضيات ",
      Subject_3: "رياضة ",
      Subject_4: "اللغة الإنجليزية  ",
      Subject_5: "التربية الدينية ",
      Subject_6: " اللغة العربية  ",

    },
    {
      title: "الشعبة الثالثة ",

      Subject_1: "اللغة الإنجليزية  ",
      Subject_2: "الرياضيات ",
      Subject_3: "العلوم ",
      Subject_4: "رياضة ",
      Subject_5: "اللغة العربية ",
      Subject_6: " التربية الدينية  ",
    },
    {
      title: "الشعبة الرابعة",

      Subject_1: "رياضة ",
      Subject_2: "الرياضيات ",
      Subject_3: "اللغة العربية ",
      Subject_4: "اللغة الإنجليزية  ",
      Subject_5: "التربية الدينية ",
      Subject_6: "العلوم ",
    },
  ];
  const rows_6 = [
    {
      title: " الشعبة الأولى",
      Subject_1: "اللغة العربية ",
      Subject_2: "الرياضيات ",
      Subject_3: "اللغة الإنجليزية  ",
      Subject_4: "التربية الدينية ",
      Subject_5: "رياضة ",
      Subject_6: "اللغة الإنجليزية  ",

    },
    {
      title: "الشعبة الثانية ",
      Subject_1: "  العلوم",
      Subject_2: "الرياضيات ",
      Subject_3: "رياضة ",
      Subject_4: "اللغة الإنجليزية  ",
      Subject_5: "التربية الدينية ",
      Subject_6: " اللغة العربية  ",

    },
    {
      title: "الشعبة الثالثة ",

      Subject_1: "اللغة الإنجليزية  ",
      Subject_2: "الرياضيات ",
      Subject_3: "العلوم ",
      Subject_4: "رياضة ",
      Subject_5: "اللغة العربية ",
      Subject_6: " التربية الدينية  ",
    },
    {
      title: "الشعبة الرابعة",

      Subject_1: "رياضة ",
      Subject_2: "الرياضيات ",
      Subject_3: "اللغة العربية ",
      Subject_4: "اللغة الإنجليزية  ",
      Subject_5: "التربية الدينية ",
      Subject_6: "العلوم ",
    },
  ];

  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '"></span>';
    },
  };
  const Supervisors_time_record = [
    { name: 'active', value:700 },
    { name: 'non active', value: 300 },
    // { name: 'Group C', value: 300 },
    // { name: 'Group D', value: 200 },
  ];
  const Teachers_time_record = [
    { name: 'active', value:600 },
    { name: 'non active', value: 400 },
    // { name: 'Group C', value: 300 },
    // { name: 'Group D', value: 200 },
  ];
  const Students_time_record = [
    { name: 'active', value:800 },
    { name: 'non active', value: 200 },
    // { name: 'Group C', value: 300 },
    // { name: 'Group D', value: 200 },
  ];
  return (
    <div className=' text-start p-10 '>
      <Typography component="h3" className="">{t("home_Admin_dash.main.0")}{t("home_Admin_dash.main.1")} <span className='text-orange'>{t("home_Admin_dash.school.0")}</span></Typography>
      <div className='flex flex-col gap-10'>
        <div className=' flex gap-5 mt-6 '>
          <div className='bg-white xl:w-[80%] rounded-md px-5 pt- shadow-md'>
            {/* links */}
            <div className='flex gap-6   items-center border-b-2 border-b-myGray-300'>
              <span>
                {arabicSplit.day}
              </span>
            
              {links.map((link, index) => (
                <span className={`${link.name===class_selected ? "text-orange border-t-2 border-orange transition-all " : ""} hover:text-orange transition text-[18px] cursor-pointer  py-3 `} onClick={() => { setclass_selectede(link.name)  }}>
                  {link.name}

                </span>

       


              ))}
            </div>
            {/* t */}
            <div className=''>
              {table(class_selected)}
          
            </div>


          </div>
          <div className='shadow-md '>
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              inline
             
            />
          </div>
        </div>

        <div className='flex  justify-between gap '>
    
          <div className=' bg-white w-[36%] relative shadow-gray-400 shadow-lg rounded-md'>
       
        
          <Swiper style={{ direction: "ltr" }}pagination={pagination} modules={[Pagination]} className="mySwiper"  
>
        <SwiperSlide> 
        <div className='absolute flex flex-col gap-2 rtl:bottom-[18%] ltr:bottom-[7%] ltr:start-5 rtl:end-5 z-50'>
      <Typography component="h4">{t("home_Admin_dash.Time_record.5")} : 100</Typography>
      <Typography component="h4" className="text-success">{t("home_Admin_dash.Time_record.6")} : 70</Typography>
      <Typography component="h4" className="!text-error">{t("home_Admin_dash.Time_record.7")} :  30 </Typography>


      </div>
       <CircleChart title={t("home_Admin_dash.Time_record.0")} data={Supervisors_time_record}/>
       
       
       </SwiperSlide>
        <SwiperSlide>
        <div className='absolute flex flex-col gap-2 rtl:bottom-[18%] ltr:bottom-[7%] ltr:start-5 rtl:end-5 z-50'>
      <Typography component="h4">{t("home_Admin_dash.Time_record.5")} : 100</Typography>
      <Typography component="h4" className="text-success">{t("home_Admin_dash.Time_record.6")} : 70</Typography>
      <Typography component="h4" className="!text-error">{t("home_Admin_dash.Time_record.7")} :  30 </Typography>


      </div>
      <CircleChart title={t("home_Admin_dash.Time_record.1")} data={Teachers_time_record}/>
      </SwiperSlide>
        <SwiperSlide>
        <div className='absolute flex flex-col gap-2 rtl:bottom-[18%] ltr:bottom-[7%] ltr:start-5 rtl:end-5 z-50'>
      <Typography component="h4">{t("home_Admin_dash.Time_record.5")} : 100</Typography>
      <Typography component="h4" className="text-success">{t("home_Admin_dash.Time_record.6")} : 70</Typography>
      <Typography component="h4" className="!text-error">{t("home_Admin_dash.Time_record.7")} :  30 </Typography>


      </div>
      <CircleChart title={t("home_Admin_dash.Time_record.2")} data={Students_time_record}/>
      </SwiperSlide>
   
      </Swiper>
  
   
          
          </div>
          {/* <div className='bg-white w-[26%] rounded-md shadow-md '> */}
          {/* <SimpleBarChart /> */}

{/* <SimpleAreaChart title={t("home_Admin_dash.Student _absence_chart.0")} /> */}
             
             {/* </div> */}
          <div className='bg-white w-[36%] rounded-md  '>
          
     <Student_avrege />
          
          </div>


     


          <div className='relative w-[21%] bg-white rounded-md  shadow-md bg-no-repeat bg-center shadow-gray-400 shadow-lg rounded-md' >
          
     <img  className='h-full'src={back_to_school} alt="" />
     <Typography  component={"h3"} className="absolute top-20 left-4 text-orange font-bold !rtl:font-Aref_Ruqaa !text-[25px] ">{t("home_Admin_dash.back_to_school.0")}</Typography>
         
          </div>
          
        </div>





      </div>
    </div>
  )
}

export default Home_admin
