//image
import { Outlet } from "react-router-dom";
import Content from  "../../Dashbord_layout/Content/Content"
import Inner_Links from "../../Dashbord_layout/Content/Inner_Links";
import NavSetting from "./setting_layout/NavSetting";
import Side_Setting from "./setting_layout/Side_Setting";



const Admin_Settings = () => {
 

  
  return (
    <div className=" min-h-screen flex justify-between ">
      <Side_Setting />
<div className=" w-[82%]">
  <NavSetting />
  
<div className="rounded-md shadow-md min-h-screen">
  <Outlet/>

</div>
</div>
    </div>

  );
};

export default Admin_Settings;
