import { Outlet } from "react-router-dom";
import NavBarDashbord from "./NavBar_Dashbord/NavBarDashbord";
import SideBardashbord from "./SideBar_Dashbord/SideBardashbord";

const DashboardLayout = () => {
  return (
    <>
      <div className="  ">

        <NavBarDashbord />

        <div className=" flex     ">
          <div className="xl:w-[3%]  bg-sky-900 shadow-md rounded-e-md">
            <SideBardashbord />
          </div>

          <div className="bg-gray-100   xl:w-[97%] ">
            <Outlet className="" />
          </div>

        </div>

      </div>

      {/* <div className="flex  shadow-lg  ">
      <div className="xl:w-[4%]  bg-slate-600">
<SideBardashbord />
  </div>   
        <div className="xl:w-[96%] sm:w-[100%] w-[80%]      ">
          <NavBarDashbord />
          <div className="bg-gray-100   max-w-full ">
            <Outlet className=" " />
          </div>
        </div>
     
      </div> */}
    </>
  );
};

export default DashboardLayout;
