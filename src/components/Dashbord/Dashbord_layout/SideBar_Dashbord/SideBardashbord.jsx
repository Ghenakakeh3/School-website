
import { useTranslation } from "react-i18next";
import { IoSettingsOutline } from "react-icons/io5";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { LuUser2 } from "react-icons/lu";
import { TbLock } from "react-icons/tb";
import { CiLogout } from "react-icons/ci";
import { BsGraphUp } from "react-icons/bs";
import { SlCalender } from "react-icons/sl";
import { NavLink } from "react-router-dom";

const SideBardashbord = () => {
  const { t } = useTranslation("global");




  

  return (
   <div className=" flex justify-center  py-20">


<div className={`text-[26px] text-white py-16 flex flex-col justify-center items-center gap-7 cursor-pointer`}>
  <NavLink>
  <SlCalender />

  </NavLink>

  <NavLink to="/Admin_dashboard/charts"><BsGraphUp />  </NavLink>
  
<span className="w-6 h-2 border-b-2 border-b-myGray-400"></span>

<NavLink><TbLock />  </NavLink>

<NavLink><CiLogout />  </NavLink>


  <NavLink><LuUser2 />  </NavLink>
  <NavLink to='/Admin_Settings'><IoSettingsOutline />  </NavLink>
  <NavLink><IoIosHelpCircleOutline />  </NavLink>



</div>
   
   </div>
  );
};

export default SideBardashbord;
