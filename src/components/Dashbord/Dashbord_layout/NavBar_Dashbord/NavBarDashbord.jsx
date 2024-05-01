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

const NavBarDashbord = () => {
  const { t } = useTranslation("global");
  
  const [active, setactive] = useState(0);


  const links = [
    { name: t("navbar_Admin_dash.links.0"), to: "/Admin_dashboard" ,icon :<IoHome  />},
    { name: t("navbar_Admin_dash.links.1"), to: "/Admin_dashboard/Class",icon :<FaWindowRestore  /> },
    { name: t("navbar_Admin_dash.links.2"), to: "/students" ,icon :<FaUsersLine  /> },
    { name: t("navbar_Admin_dash.links.3"), to: "/Teachers",icon :<LiaChalkboardTeacherSolid  /> },
    { name: t("navbar_Admin_dash.links.4"), to: "/Notes",icon :<GrNotes  /> },

  ];

  // 
  const [profile, setProfile] = useState(false);
  const [viewNot, setViewNot] = useState(false);
  const profileRef = useRef(null);
  const notifiRef = useRef(null);

  const [point, setPoint] = useState(null);
  const navigate = useNavigate();

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

  const points = [
    { name: "Go to Settings", type: "sittings" },
    { name: "Contact us", type: "contact" },
  ];
  const handlepoint_table = (value) => {
    console.log(value);
    {
      value.type === "sittings"
        ? navigate("settings")
        : value.type === "contact"
        ? window.open(
            "https://mail.google.com/mail/u/0/#inbox?compose=new",
            "_blank"
          )
        : "";
    }
  };
  const handlepoint = (selected) => {
    setPoint(selected);
  };
  console.log(active)

  return (
    <div className=" px-10 bg-white  flex  md:justify-between justify-end   w-full  ">
{/*  */}

<div className="flex justify-center gap-10  items-center w-[50%] NavBarDashbord ">
{links.map((link,index) => (
 

  <NavLink  to={link.to} key={link.to}    className={({ isActive }) =>
         isActive ? `${setactive(index)} ${index === active ? "bg-sky-900 text-white" : "" } active  flex items-center gap-2 py-5 px-5 rounded-lg    `  : "hover:text-orange transition text-[18px]  flex items-center gap-2  " 
        } >
        
        <div className={`text-[25px] ${index === active ? "text-white" : "text-orange" }`}>
    {link.icon}

    </div>
    {link.name}
  </NavLink>


))}
</div>
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
