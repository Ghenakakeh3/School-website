
import { useTranslation } from "react-i18next";
import { IoSettingsOutline } from "react-icons/io5";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { LuUser2 } from "react-icons/lu";
import { TbLock } from "react-icons/tb";
import { CiLogout } from "react-icons/ci";
import { BsGraphUp } from "react-icons/bs";
import { SlCalender } from "react-icons/sl";
import { NavLink } from "react-router-dom";
import { AiOutlineNotification } from "react-icons/ai";
import { MdPostAdd } from "react-icons/md";

const SideBardashbord = () => {
  const { t } = useTranslation("global");
  const path=location.pathname.split("/")[2]

  const Admin_Links=[
    {icon: <AiOutlineNotification />, to:"/School-website/Admin_Adverts"},
    // {icon:  <SlCalender />, to:""},
    // {icon:<BsGraphUp />  ,to:""},
    // {icon: <TbLock /> ,to:""},
    // {icon: <CiLogout /> ,to:""},
    // {icon: <LuUser2 /> ,to:""},
    // {icon: <IoSettingsOutline />  ,to:"/Admin_Settings"},
    {icon: <IoIosHelpCircleOutline />  ,to:""},
  



  ]
  const Supervisor_links=[
    {icon: <AiOutlineNotification />, to:"/Supervisor_Adverts"},
    {icon:<MdPostAdd /> ,to:"/Posts"},  
    // {icon:<BsGraphUp />  ,to:""},
    // {icon: <TbLock /> ,to:""},
    // {icon: <CiLogout /> ,to:""},
    // {icon: <LuUser2 /> ,to:""},
    // {icon: <IoSettingsOutline />  ,to:"/Admin_Settings"},
    // {icon: <IoIosHelpCircleOutline />  ,to:""},
  



  ]



  

  return (
   <div className=" flex justify-center  py-20">


<div className={`text-[26px] text-white py-16 flex flex-col justify-center items-center gap-7 cursor-pointer`}>
  {path==='Admin_dashboard' && Admin_Links.map((link,index)=>{
    return(
      <NavLink key={index} to={link.to}>
        {link.icon}

      </NavLink>
    )
  })}

{path==='Supervisor_dashboard' && Supervisor_links.map((link,index)=>{
    return(
      <NavLink key={index} to={link.to}>
        {link.icon}

      </NavLink>
    )
  })}

{/* <NavLink to="/Admin_Adverts">
<AiOutlineNotification />
</NavLink>
  <NavLink>
  <SlCalender />

  </NavLink> */}

  {/* <NavLink to="/Admin_dashboard/charts"><BsGraphUp />  </NavLink> */}
  
{/* <span className="w-6 h-2 border-b-2 border-b-myGray-400"></span> */}

{/* <NavLink><TbLock />  </NavLink>

<NavLink><CiLogout />  </NavLink>


  <NavLink><LuUser2 />  </NavLink>
  <NavLink to='/Admin_Settings'><IoSettingsOutline />  </NavLink>
  <NavLink><IoIosHelpCircleOutline />  </NavLink> */}



</div>
   
   </div>
  );
};

export default SideBardashbord;
