import React, { useEffect, useRef, useState } from 'react'
import Button from '../../../../utilities/Button'
import TabsFillter from '../../../Dashbord_layout/TabsFillter'
import Table from "../../../Dashbord_layout/TableLayout"
import  NoData from "../../../Dashbord_layout/NoData/NoData"
import { useTranslation } from "react-i18next";
import { Input, InputSearch } from '../../../../utilities/Inputs'
import { IoPersonAdd } from "react-icons/io5";
import Add_acount from '../../../Dashbord_layout/Mangment/Acount_mangment/Add_acount'
import Edit_acount from '../../../Dashbord_layout/Mangment/Acount_mangment/Edit_acount'
import { MdOutlineDriveFileRenameOutline } from "react-icons/md";
import { PiUser } from "react-icons/pi";




const Admin_accounts = () => {
  const rows = [
    {
      ID: "01",
        Name: "ghena",
        user_name: "Arrange the shape of the teeth",
        password: "Mazah",
       
        
    

  
    },
    {
      ID: "02",

        Name: "Orthodontist",
        User_Name: "Arrange the shape of the teeth",
        Password: "Mazah",
      

  
    },

    {
      ID: "03",
        Name: "Orthodontist",
        User_Name: "Arrange the shape of the teeth",
        Password: "Mazah",
        
  
    },
  ];
  const { t } = useTranslation("global");
  const AddRef= useRef(null)
  const [add_active, set_add_active] = useState(false);
  const [edit_active, set_edit_active] = useState(false);
  const [edit_content, set_edit_content] = useState({});



  const [data, set_data] = useState(rows);

console.log(edit_content)
  // const [showpass, setshowpass] = useState(false);

const handleEdit=(ID)=>{

  const f=data.find((ob,id)=>{
    set_edit_active(!edit_active);
    return ob.ID === ID
  })
  set_edit_content(f)

}

    const columns = [
        "ID",
        "Name",
        "User Name",
        "Password",
        "action"
    
      ];
     
      // useEffect(()=>{
      //   set_data(rows)
      // })

      const Add_content = {
        title: t("home_Admin_dash.Add_Account.0"),
        descrption: t("home_Admin_dash.Add_Account.1"),
        inputs: [
          {
            text: t("home_Admin_dash.Add_Account.2"),
            img: <MdOutlineDriveFileRenameOutline />,
            type: "text",
            name: "Product Name",
          },
          {
            text:t("home_Admin_dash.Add_Account.3"),
            img: <PiUser />,
            type: "text",
            name: "Product Type",
          },
          // {
          //   text: t("home_Admin_dash.Add_Account.4"),
          //   img:showpass ? <FaRegEye /> : <FaEyeSlash /> ,
          //   type:showpass ? "text" : "password" ,
          //   name: "Description",
          // },
    
       
      
        ],
        button_content:t("home_Admin_dash.Add_Account.5") ,
      };

  return (
    
<div className='relative'>
{add_active ? (
            <Add_acount
              ref={AddRef}  
              add_active={add_active}
              set_add_active={set_add_active}
              Add_content={Add_content}
              // showpass={showpass}
              // setshowpass={setshowpass}
              rows={rows}
              set_data={set_data}


            />
          ) : (
            ""
          )}


{edit_active ? (
            <Edit_acount
              ref={AddRef}  
              add_active={add_active}
              set_add_active={set_add_active}
              Add_content={Add_content}
              edit_content={edit_content}
      
              // showpass={showpass}
              // setshowpass={setshowpass}
              rows={rows}
              set_data={set_data}


            />
          ) : (
            ""
          )}




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
            
        <div className=''>
     
        <Button  className="flex bg-success items-center gap-2 " onClick={()=>{set_add_active(true)}}>{t("home_Admin_dash.Manage_user_accounts.3")}  <IoPersonAdd /> </Button>
        </div>


   

          </TabsFillter>
          {rows.length >= 1 ? (
            <Table
              columns={columns}
              rows={data}
              handleEdit={handleEdit}
            //   points={points}
            //   point={point}
            //   handlepoint={handlepoint_table}
            action={{delete: true,update: true }}
              className={"min-h-screen"}
            />
          ) : (
            <NoData ></NoData>
          )}
        {/* <Button className="!bg-success">bb </Button> */}
        
        </div>
    
  )
}

export default Admin_accounts
