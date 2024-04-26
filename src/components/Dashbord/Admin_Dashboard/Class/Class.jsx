import React, { useRef, useState } from 'react'
import { useTranslation } from "react-i18next";
import Typography from '../../../utilities/Typography'
import TabsFillter from '../../Dashbord_layout/TabsFillter'
import { InputSearch } from '../../../utilities/Inputs'
import Button from '../../../utilities/Button'
import Table from '../../Dashbord_layout/TableLayout'
import NoData from '../../Dashbord_layout/NoData/NoData'
import Content from '../../Dashbord_layout/Content/Content';
import Dropdown from '../../../utilities/Dropdown';
import arrowIcon from "../../../../assets/icons/arrowDropdown.svg";


const Class = () => {
  const rows = [
    {
      ID: "01",
      Name: "الصف الأول",

      Division_name: "الشعبة الأولى ",







    },
    {
      ID: "02",

      Name: "الصف الأول",

      Division_name: "الشعبة الثانية",



    },

    {
      ID: "03",
      Name: "الصف الثاني",

      Division_name: "الشعبة الأولى",



    },
    {
      ID: "04",
      Name: "الصف الثاني",

      Division_name: "الشعبة الثانية",



    },
    {
      ID: "05",
      Name: "الصف الثالث",

      Division_name: "الشعبة الأولى",



    },
     {
      ID: "06",
      Name: "الصف الثالث",

      Division_name: "الشعبة الثانية",



    },
     {
      ID: "07",
      Name: "الصف الرابع",

      Division_name: "الشعبة الأولى",



    },
     {
      ID: "08",
      Name: "الصف الرابع",

      Division_name: "الشعبة  الثانية",



    },
    {
      ID: "09",
      Name: " الصف الخامس",

      Division_name: "الشعبة الأولى",



    },
    , {
      ID: "10",
      Name: "الصف الخامس",

      Division_name: "الشعبة الثانية",



    },

    {
      ID: "11",
      Name: "الصف السادس",

      Division_name: "الشعبة الأولى",



    },
     {
      ID: "12",
      Name: "الصف السادس",

      Division_name: "الشعبة الثانية",



    },
  ];
  const { t } = useTranslation("global");
  const AddRef = useRef(null)
  const [add_active, set_add_active] = useState(false);
  const [edit_active, set_edit_active] = useState(false);
  const [edit_content, set_edit_content] = useState({});
  const [Class_Dropdown , set_Class_Dropdown ] = useState("");






  const [data, set_data] = useState(rows);

  console.log(edit_content)
  // const [showpass, setshowpass] = useState(false);

  const handleEdit = (ID) => {

    const f = data.find((ob, id) => {
      set_edit_active(!edit_active);
      return ob.ID === ID
    })
    set_edit_content(f)

  }

  const handleDelte = (ID) => {

    const f = data.find((ob, id) => {
      set_edit_active(!edit_active);
      return ob.ID === ID
    })
    const newRow= rows.filter((row)=>{
       return row.ID !=ID
    })
    console.log(newRow)

    set_data(newRow)


  }
  
  
  const  handleChange_Class_Dropdown = (value) => {
    set_Class_Dropdown(value.name)
    const Class_filter= rows.filter((row)=>{
       return row.Name===value.name
    })
    if(Class_filter.length ===0){
      set_data(rows)
   
     
    }
    else{
      set_data(Class_filter)


    }


  };
  const handleChange_Division_Dropdown=(value) => {
    console.log(value.name)
    const Class_filter= rows.filter((row)=>{
      if(Class_Dropdown== "الكل"){
        return row.Division_name===value.name
      }
       else{
        return row.Division_name===value.name && row.Name === Class_Dropdown
       }
    })
    if(Class_filter.length ===0){
      set_data(rows)
   
     
    }
    else{
      set_data(Class_filter)


    }


  };


  const columns = [
    t("Class_Admin_dash.Class_Table.0") ,
    t("Class_Admin_dash.Class_Table.1") ,
    t("Class_Admin_dash.Class_Table.2") ,
    t("Class_Admin_dash.Class_Table.3") ,





  ];

const options_Class =[
  {name:t("Class_Admin_dash.Class_filter.0") },
  {name:t("Class_Admin_dash.Class_filter.1") },
  {name:t("Class_Admin_dash.Class_filter.2") },
  {name:t("Class_Admin_dash.Class_filter.3") },
  {name:t("Class_Admin_dash.Class_filter.4") },
  {name:t("Class_Admin_dash.Class_filter.5") },
  {name:t("Class_Admin_dash.Class_filter.6") }


]
const options_Division=[
  {name:t("Class_Admin_dash.Class_filter.7") },
  {name:t("Class_Admin_dash.Class_filter.8") },


]
  return (
    <Content
      path={t("Class_Admin_dash.Class.0")}
      classNameChildern="bg-white"
      hasExport={true}
      hasRefrech={true}
    >


      <div className='relative '>







        < TabsFillter>

          <div className='flex  gap-10 items-center'>
            <span className="ps-2 pe-5 py-1 border-[1px] border-solid border-myGray-100  flex items-center  justify-start rounded-lg   text-myGray-500">
              {rows.length} record
            </span>
            {/* <InputSearch 
            type="text"
              label="nn"
              placeholder={t("Class_Admin_dash.Class.1")}
              name=""
              value=""
              onBlur="bbb"
              // onChange={handleChange_Class_Dropdown}
              icon="mmm"
              iconOnClick="bb"
              // errorMsg="mm"
       /> */}
           <Dropdown
        // value,
        label={t("Class_Admin_dash.Class.1")}
        options={options_Division}
        onChange={handleChange_Division_Dropdown}
        icon={arrowIcon}
        showSlected={true}
        ulClassname={"w-full "}
        classNameIcon=""
        className="sm:w-[12rem] w-[7rem] ease-in-out  border-b-[1px]   border-b-myGray-100 active:border-b-primary focus-within:border-b-primary duration-150"
      />


      <Dropdown
        // value,
        label={t("Class_Admin_dash.Class.0")}
        options={options_Class}
        onChange={handleChange_Class_Dropdown}
        icon={arrowIcon}
        showSlected={true}
        ulClassname={"w-full "}
        classNameIcon=""
        className="sm:w-[12rem] w-[7rem] ease-in-out  border-b-[1px]   border-b-myGray-100 active:border-b-primary focus-within:border-b-primary duration-150"
      />

          </div>





        </TabsFillter>
        {rows.length >= 1 ? (
          <Table
            columns={columns}
            rows={data}
            handleEdit={handleEdit}
            handleDelte={handleDelte}
            action={{delete: true,update: false }}
            className={"min-h-screen px-6 pt-2"}
            RowlinK={true}
          />
        ) : (
          <NoData ></NoData>
        )}
        {/* <Button className="!bg-success">bb </Button> */}

      </div>
    </Content>
  )
}

export default Class
