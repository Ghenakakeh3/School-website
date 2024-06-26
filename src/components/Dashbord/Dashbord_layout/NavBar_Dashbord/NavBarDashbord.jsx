import React, { useEffect, useRef, useState } from "react";
import searchIcon from "./NavBar_Dashbord_images/Search.svg";
import Avtar from "./NavBar_Dashbord_images/Avtar.png";
import Notification from "./NavBar_Dashbord_images/Notification.svg";
import Setting from "./NavBar_Dashbord_images/Setting.svg";
import MultiLangDropdown from "../../../utilities/MultiLangDropdown";
import Profile from "../Profile/Profile";
import userImage from "../Profile/PeofileImages/Avtar.svg";
import Notifications from "../Notifications/Notifications";
import { useTranslation } from "react-i18next";
import Dropdown from "../../../utilities/Dropdown";
import { NavLink, useNavigate } from "react-router-dom";
import Click_Outsite from "../../../utilities/Click_Outsite";
import { IoHome } from "react-icons/io5";
import { FaWindowRestore } from "react-icons/fa";
import { FaUsersLine } from "react-icons/fa6";
import { LiaChalkboardTeacherSolid } from "react-icons/lia";
import { GrNotes } from "react-icons/gr";
import "./NavBarDashbord.css"
import { BsPersonWorkspace } from "react-icons/bs";
import { AiOutlineNotification } from "react-icons/ai";





const NavBarDashbord = () => {
  const { t } = useTranslation("global");
  
  const [active, setactive] = useState(0);
  const Admin_links = [
    { name: t("navbar_Admin_dash.links.0"), to: "/School-website/Admin_dashboard" ,icon :<IoHome  />},
    { name: t("navbar_Admin_dash.links.1"), to: "/School-website/Admin_dashboard/Class",icon :<FaWindowRestore  /> },
    { name: t("navbar_Admin_dash.links.2"), to: "/School-website/Admin_dashboard/students" ,icon :<FaUsersLine  /> },
    { name: t("navbar_Admin_dash.links.3"), to: "/School-website/Admin_dashboard/Teachers",icon :<LiaChalkboardTeacherSolid  /> },
    { name: t("navbar_Admin_dash.links.4"), to: "/School-website/Admin_dashboard/Moderators",icon :<BsPersonWorkspace /> },
    { name: t("navbar_Admin_dash.links.5"), to: "/School-website/Notes",icon :<GrNotes  /> },


  ];

 
  const Supervisor_links = [
    { name: t("navbar_Supervisor_dash.links.0"), to: "/School-website/Supervisor_dashboard" ,icon :<IoHome  />},
    { name: t("navbar_Supervisor_dash.links.1"), to: "/School-website/Supervisor_dashboard/Division",icon :<FaWindowRestore  /> },
    { name: t("navbar_Supervisor_dash.links.2"), to: "/School-website/Supervisor_dashboard/students" ,icon :<FaUsersLine  /> },
    { name: t("navbar_Supervisor_dash.links.3"), to: "/School-website/Supervisor_dashboard/Teachers",icon :<LiaChalkboardTeacherSolid  /> },
    { name: t("navbar_Supervisor_dash.links.4"), to: "/School-website/Notes",icon :<GrNotes  /> },

  ];
  const path=location.pathname.split("/")[2]




  const  link_layout=(links)=>{
    return(
<div className={` ${  path === "Admin_dashboard" ? "mx-24":""} flex justify-center gap-10  items-center w-[50%] NavBarDashbord ltr:mx-10 `}>
{links.map((link,index) => (
 

  <NavLink  to={link.to} key={link.to}    className={({ isActive }) =>
         isActive ? `${setactive(index)} ${index === active ? "bg-sky-900 text-white " : "" } active  flex items-center gap-2 py-5 px-5 rounded-lg   transition-all `  : "hover:text-orange  text-[18px] transition-all  flex items-center gap-2  " 
  
        } >
        
        <div className={`text-[25px] ${index === active ? "text-white" : "text-orange" }`}>
    {link.icon}

    </div>
    {link.name}
  </NavLink>


))}
</div>
    )
  }



  // 
  const [profile, setProfile] = useState(false);
  const [viewNot, setViewNot] = useState(false);
  const profileRef = useRef(null);
  const notifiRef = useRef(null);

  const adminInfo = [
    {
      image: userImage,
      email: "rawanahd23@gmail.com",
      role: "admin user",
      reole: "admin user",
    },
  ];
  const handleProfile = () => {
    setProfile(!profile);
  };

  const toggleViewNot = () => {
    setViewNot(!viewNot);
  };






  return (
    <div className={`  px-10  bg-white  flex  md:justify-between  w-full  sticky top-0 right-0 left-0 z-50  `}>

{link_layout( path === "Admin_dashboard" ? Admin_links :  Supervisor_links)}

      {/* icon +profile photo  */}

      <div className="flex justify-between items-center gap-4 ">
  

        <MultiLangDropdown />

        <div>
          <img
            className="cursor-pointer"
            onClick={handleProfile}
            src={Avtar}
            alt=""
          />
          {profile ? (
            <Profile
              ref={profileRef}
              handleProfile={handleProfile}
              email={adminInfo[0].email}
              image={adminInfo[0].image}
              role={adminInfo[0].role}
            />
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBarDashbord;
