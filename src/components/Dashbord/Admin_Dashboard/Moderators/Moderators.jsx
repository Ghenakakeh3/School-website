







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
import * as Yup from "yup";
import Edit from '../../Dashbord_layout/Mangment/Edit';
import { SearchBar } from '../../../utilities/SearchBar/SearchBar';
import { SearchResultsList } from '../../../utilities/SearchBar/SearchResultsList';
import { IoIosAddCircle } from 'react-icons/io';
import Add from '../../Dashbord_layout/Mangment/Add';


const Moderators = () => {
  const rows = [
    {
      ID: "01",
      Modrator_name: "لارا ",
      Class: "الصف الأول",
      Division_name: "الشعبة الأولى ",
      phone_number:'092642821',
   
    
    },
    {
      ID: "01",
      Modrator_name: "لارا ",
      Class: "الصف الأول",
      Division_name: "الشعبة الأولى ",
      phone_number:'092642821',
   
    
    },    {
      ID: "01",
      Modrator_name: "لارا ",
      Class: "الصف الأول",
      Division_name: "الشعبة الأولى ",
      phone_number:'092642821',
   
    
    },    {
      ID: "01",
      Modrator_name: "لارا ",
      Class: "الصف الأول",
      Division_name: "الشعبة الأولى ",
      phone_number:'092642821',
   
    
    },
    

   


  ];
  const { t } = useTranslation("global");
  const [edit_active, set_edit_active] = useState(false);
  const [Edit_active, set_Edit_active] = useState(false); 
  const [Moderators_Dropdown , set_Moderators_Dropdown] = useState("");
  const [data, set_data] = useState(rows);
  const[edit_content,set_edit_content]=useState({})
  const [results, setResults] = useState([]);
  const [selected_result, setselected_result] = useState("");
  const [add_active, set_add_active] = useState(false);
  const AddRef = useRef(null)





  const handleDelte = (ID) => {

    const f = data.find((ob, id) => {
      set_edit_active(!edit_active);
      return ob.ID === ID
    })
    const newRow= rows.filter((row)=>{
       return row.ID !=ID
    })
 

    set_data(newRow)


  }
  
  
  const  handleChange_Moderators_Dropdown = (value) => {
    set_Moderators_Dropdown(value.name)
    const Moderators_filter= rows.filter((row)=>{
       return row. Class===value.name
    })
    if(Moderators_filter.length ===0){
      set_data(rows)
   
     
    }
    else{
      set_data(Moderators_filter)


    }


  };
  const  handleChange_Moderators_edit_Dropdown = (value) => {
  
 


  };



  const columns = [
    t("Moderators_Admin_dash.Moderators_Table.0") ,
    t("Moderators_Admin_dash.Moderators_Table.1") ,
    t("Moderators_Admin_dash.Moderators_Table.2") ,
    t("Moderators_Admin_dash.Moderators_Table.3") ,
    t("Moderators_Admin_dash.Moderators_Table.4") ,
    t("Moderators_Admin_dash.Moderators_Table.5") ,







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


const formConfig_Edit = {
  info :[
   { title:  t("Moderators_Admin_dash.Moderators.1"),},
  {descrption: t("Moderators_Admin_dash.Moderators.2"),},
  { button_content:t("Moderators_Admin_dash.Moderators.1"), }
  ],
         
  fields: [

    

    {
      name: "Modrator_name",
      label: t("Moderators_Admin_dash.Moderators_Table.1"),
      img: arrowIcon,
      type: "input",
      inputType: "text",
      component: "input",


    },
    {
      name: "Class",
      label: t("Moderators_Admin_dash.Moderators_Table.2"),
      img: arrowIcon,
      type: "Dropdown",
      inputType: "text",
      component: "Dropdown",
      options: options_Class,
      onChange :handleChange_Moderators_edit_Dropdown

    },
    {
      name: "Division_name",
      label: t("Moderators_Admin_dash.Moderators_Table.3"),
      img: "<PiUser />",
      type: "input",
      inputType: "text",
      component: "input",


    },
    {
      name: "Phone_Number",
      label: t("Moderators_Admin_dash.Moderators_Table.4"),
      img: arrowIcon,
      type: "input",
      inputType: "text",
      component: "input",


    },
   
  ],
  initialValues : {
    Modrator_name:edit_content.Modrator_name,
    Class: edit_content.Class,
    Division_name:edit_content.Division_name,
    Phone_Number:edit_content.phone_number
 



  },

      validationSchema: {
        Modrator_name: Yup.string(),
        Division_name: Yup.string(),
        


  }
  
};
const formConfig_Add = {
  info :[
   { title:  t("Moderators_Admin_dash.Moderators.3"),},
  {descrption: t("Moderators_Admin_dash.Moderators.4"),},
  { button_content:t("Moderators_Admin_dash.Moderators.3"), }
  ],
         
  fields: [

    

    {
      name: "Modrator_name",
      label: t("Moderators_Admin_dash.Moderators_Table.1"),
      img: arrowIcon,
      type: "input",
      inputType: "text",
      component: "input",


    },
    
    {
      name: "Phone_Number",
      label: t("Moderators_Admin_dash.Moderators_Table.4"),
      img: arrowIcon,
      type: "input",
      inputType: "text",
      component: "input",


    },

   
  ],
  initialValues : {
    Modrator_name:"",
    Phone_Number:""
  
 



  },

      validationSchema: {
        Modrator_name: Yup.string().required(t("Moderators_Admin_dash.Moderators.5")),
        Phone_Number: Yup.string().required(t("Moderators_Admin_dash.Moderators.6")),
        


  }
  
};

const handleEdit=(ID)=>{

  const Edit_clicKed=data.find((ob,id)=>{
    set_Edit_active(!Edit_active);
    return ob.ID === ID
  })
  set_edit_content(Edit_clicKed)


}

  return (
    <Content
      path={t("Moderators_Admin_dash.Moderators.0")}
      classNameChildern="bg-white"
    >


      <div className='relative '>
      {add_active ? (
            <Add
            formConfig={formConfig_Add}
              // ref={AddRef}  
              add_active={add_active}
              set_add_active={set_add_active}
         


            />
           
          ) : (
            ""
          )}

          {Edit_active ? (
            <Edit
               
              Edit_active={Edit_active}
              set_Edit_active={set_Edit_active}
              formConfig={formConfig_Edit}
              rows={data}
              set_data={set_data}


            />
          ) : (
            ""
          )}







        < TabsFillter>

          <div className='flex  gap-10 items-center justify-between  w-full'>
         <div className='flex gap-10'>
         <span className="ps-2 pe-5 py-1 border-[1px] border-solid border-myGray-100  flex items-center  justify-start rounded-lg   text-myGray-500">
              {data.length} {t("home_Admin_dash.record.0")}
            </span>
            <Dropdown
        // value,
        label={t("Class_Admin_dash.Class.0")}
        options={options_Class}
        onChange={handleChange_Moderators_Dropdown}
        icon={arrowIcon}
        showSlected={true}
        ulClassname={"w-full "}
        classNameIcon=""
        className="sm:w-[12rem] w-[7rem] ease-in-out  border-b-[1px]   border-b-myGray-100 active:border-b-primary focus-within:border-b-primary duration-150"
      />

<div className="search-bar-container relative ">
        <SearchBar setResults={setResults} selected_result={selected_result} placeholder={ t("Moderators_Admin_dash.Moderators_Table.1") } />
        {results && results.length > 0 && <SearchResultsList results={results} setselected_result={setselected_result} />}
      </div>
 
   
   
  
         </div>
         <div className=''>
     
     <Button  className="flex bg-success items-center gap-2 " onClick={()=>{set_add_active(true)}}>{t("Moderators_Admin_dash.Moderators.3")} <IoIosAddCircle /> </Button>
     </div>




 

          </div>





        </TabsFillter>
        {data.length >= 1 ? (
          <Table
            columns={columns}
            rows={data}
            handleEdit={handleEdit}
            handleDelte={handleDelte}
            action={{delete: true,update: true }}
            className={"min-h-screen px-6 pt-2"}
            RowlinK={true}
          />
        ) : (
          <NoData ></NoData>
        )}
        
      </div>
    </Content>
  )
}

export default Moderators
