import React, { useEffect, useState } from 'react'
import Typography from '../../../utilities/Typography'
import { useTranslation } from "react-i18next";
import Dropdown from '../../../utilities/Dropdown';
import mini_menu from "../../../../assets/icons/arrowDropdown.svg";
import student_1 from "./home_img/n.png"



const Student_avrege = () => {
  const { t } = useTranslation("global");
  const sorts = [    
    { name: t("home_Admin_dash.stuents_by_average_mark.2"),  type: "view" },
    { name:  t("home_Admin_dash.stuents_by_average_mark.1"), type:"view" },
    ];
    const Class = [    
      { name: t("home_Admin_dash.links.0"),  type: "view" },
      { name:  t("home_Admin_dash.links.1"), type:"view" },
      { name:  t("home_Admin_dash.links.2"), type:"view" },
      { name:  t("home_Admin_dash.links.3"), type:"view" },
      { name:  t("home_Admin_dash.links.4"), type:"view" },
      { name:  t("home_Admin_dash.links.5"), type:"view" },
     


      ];
  
    const [SortDropdown, setSortDtopdown] = useState(null);
    const [ClassDropdown, setClassDtopdown] = useState(null);
    const [student_filter, setstudent_filter] = useState([]);



    const handleChangeDropdown_sort = (selcted) => {
      setSortDtopdown(selcted);
      if(selcted.name === t("home_Admin_dash.stuents_by_average_mark.2") ){

        
      
    }
    };
    const handleChangeDropdown_Class= (selcted) => {
      setClassDtopdown(selcted);
      console.log(selcted)
    };
    const avrege_1= [
      {name : "sana aous", img:'nn',avrege:99},
      {name : "mohammad ahmad", img:'nn',avrege:98},
      {name : "dana mousa", img:'nn',avrege:90},
      {name : "eman sreo", img:'nn',avrege:80},
      {name : "sabah assi", img:'nn',avrege:75},
      {name : "raghad nasser", img:'nn',avrege:60},
      {name : "raghad nasser", img:'nn',avrege:49},
      {name : "raghad nasser", img:'nn',avrege:33},

      

    ]
    const avrege_2= [
      {name : "sana aous", img:'nn',avrege:99},
      {name : "mohammad ahmad", img:'nn',avrege:98},
      {name : "dana mousa", img:'nn',avrege:90},
      {name : "eman sreo", img:'nn',avrege:80},
      {name : "sabah assi", img:'nn',avrege:75},
      {name : "raghad nasser", img:'nn',avrege:60},
      {name : "raghad nasser", img:'nn',avrege:60},
      {name : "raghad nasser", img:'nn',avrege:60},

      

    ]
    const avrege_3= [
      {name : "sana aous", img:'nn',avrege:99},
      {name : "mohammad ahmad", img:'nn',avrege:98},
      {name : "dana mousa", img:'nn',avrege:90},
      {name : "eman sreo", img:'nn',avrege:80},
      {name : "sabah assi", img:'nn',avrege:75},
      {name : "raghad nasser", img:'nn',avrege:60},
      {name : "raghad nasser", img:'nn',avrege:60},
      {name : "raghad nasser", img:'nn',avrege:60},

      

    ]


    const avrege_4= [
      {name : "sana aous", img:'nn',avrege:99},
      {name : "mohammad ahmad", img:'nn',avrege:98},
      {name : "dana mousa", img:'nn',avrege:90},
      {name : "eman sreo", img:'nn',avrege:80},
      {name : "sabah assi", img:'nn',avrege:75},
      {name : "raghad nasser", img:'nn',avrege:60},
      {name : "raghad nasser", img:'nn',avrege:60},
      {name : "raghad nasser", img:'nn',avrege:60},

      

    ]

    const avrege_5= [
      {name : "sana aous", img:'nn',avrege:99},
      {name : "mohammad ahmad", img:'nn',avrege:98},
      {name : "dana mousa", img:'nn',avrege:90},
      {name : "eman sreo", img:'nn',avrege:80},
      {name : "sabah assi", img:'nn',avrege:75},
      {name : "raghad nasser", img:'nn',avrege:60},
      {name : "raghad nasser", img:'nn',avrege:60},
      {name : "raghad nasser", img:'nn',avrege:60},

      

    ]
    const avrege_6= [
      {name : "sana aous", img:'nn',avrege:99},
      {name : "mohammad ahmad", img:'nn',avrege:98},
      {name : "dana mousa", img:'nn',avrege:90},
      {name : "eman sreo", img:'nn',avrege:80},
      {name : "sabah assi", img:'nn',avrege:75},
      {name : "raghad nasser", img:'nn',avrege:60},
      {name : "raghad nasser", img:'nn',avrege:60},
      {name : "raghad nasser", img:'nn',avrege:60},

      

    ]

  return (
    <div className='overflow-y-scrol shadow-gray-400 shadow-lg rounded-md'>
    <Typography component="h3" className='text-center mt-3 '> {t("home_Admin_dash.stuents_by_average_mark.0")}</Typography>
    <div className='flex items-center justify-around  mt-4 mb-2'>
    
<Dropdown 
        options={ sorts}
        value={SortDropdown}
        onChange={handleChangeDropdown_sort}
        className={""}
        icon={mini_menu}
        showSlected={true}
        ulClassname={" ltr:right-0 rtl:start-[0rem]"}

/>

<Dropdown 
        options={ Class}
        value={SortDropdown}
        onChange={handleChangeDropdown_Class}
        className={""}
        icon={mini_menu}
        showSlected={true}
        ulClassname={" ltr:right-0 rtl:start-[0rem]"}

/>


    </div>
    <div className='flex  flex-col gap-5 h-[20rem] justify-center px-5 overflow-y-scroll scroll-smooth scroll-px-0 !scroll-'>
    {avrege_1.map((stuent, index) => (
              <div className='flex justify-between py-3 border-b-2 border-b-myGray-200' key={index}>
                 <div className='flex gap-3 items-center'>
              <img src={student_1} alt="" className='rounded-full w-10 h-10' />

                <Typography component="h4">{stuent.name}</Typography>

              </div>
                <Typography className={`${stuent.avrege < 60 ? "text-red-600" :  "text-success"}`}>{stuent.avrege}</Typography>
          
              </div>

            


              ))}
      {/* ((link, index) => ( */}
    </div>
    </div>
  )
}

export default Student_avrege
