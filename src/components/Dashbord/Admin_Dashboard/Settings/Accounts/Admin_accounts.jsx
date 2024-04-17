import React from 'react'
import Button from '../../../../utilities/Button'
import TabsFillter from '../../../Dashbord_layout/TabsFillter'
import Table from "../../../Dashbord_layout/TableLayout"
import  NoData from "../../../Dashbord_layout/NoData/NoData"
import { useTranslation } from "react-i18next";
import { Input, InputSearch } from '../../../../utilities/Inputs'

const Admin_accounts = () => {
  const { t } = useTranslation("global");

    const columns = [
        "ID",
        "Name",
        "User Name",
        "Password",
    
      ];
      const rows = [
        {
            Name: "ghena",
            User_Name: "Arrange the shape of the teeth",
            Password: "Mazah",
      
        },
        {
            Name: "Orthodontist",
            User_Name: "Arrange the shape of the teeth",
            Password: "Mazah",
      
        },
   
        {
            Name: "Orthodontist",
            User_Name: "Arrange the shape of the teeth",
            Password: "Mazah",
      
        },
      ];


  return (
    
<>

< TabsFillter>

          <div className='flex  gap-10 items-center'>
          <span className="ps-2 pe-5 py-1 border-[1px] border-solid border-myGray-100  flex items-center  justify-start rounded-lg   text-myGray-500">
              {rows.length} record
            </span>
            <InputSearch   label="nn"
  name=""
  value=""
  onBlur="bbb"
  // onChange="bb"
  icon="mmm"
  iconOnClick="bb"
  // errorMsg="mm"
  type="mm"  />
            
          </div>
            
         <Button  className="bg-success">{t("home_Admin_dash.Manage_user_accounts.3")}</Button>


   

          </TabsFillter>
          {rows.length >= 1 ? (
            <Table
              columns={columns}
              rows={rows}
            //   points={points}
            //   point={point}
            //   handlepoint={handlepoint_table}
              className={"min-h-screen"}
            />
          ) : (
            <NoData ></NoData>
          )}
        {/* <Button className="!bg-success">bb </Button> */}
        
        </>
    
  )
}

export default Admin_accounts
