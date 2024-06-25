import React, { useRef, useState,useEffect } from 'react'
import { useTranslation } from "react-i18next";
import Typography from '../../../utilities/Typography'
import TabsFillter from '../../Dashbord_layout/TabsFillter'
import { InputSearch } from '../../../utilities/Inputs'
import Button from '../../../utilities/Button'
// import Table from '../../Dashbord_layout/TableLayout'
import NoData from '../../Dashbord_layout/NoData/NoData'
import Content from '../../Dashbord_layout/Content/Content';
import Dropdown from '../../../utilities/Dropdown';
import arrowIcon from "../../../../assets/icons/arrowDropdown.svg";
import { IoIosAddCircle } from 'react-icons/io';
import * as Yup from "yup";
import Add from '../../Dashbord_layout/Mangment/Add';
import Edit from '../../Dashbord_layout/Mangment/Edit';
import axios from 'axios';
import { TableCell, TableHeader, TableRow,Table } from '../../Dashbord_layout/Table';
import Loading from '../../../utilities/Loading/Loading';
import {useQuery} from 'react-query'
import { SectionQuery } from '../../../../API/Sections/SectionsQueries';
import useData from '../../../../context/useData ';
import { ClassQuery } from '../../../../API/Class/ClassQueries';
import { SupervisersQuery } from '../../../../API/Supervisers/SupervisersQueries';
import { AddSection } from '../../../../API/Sections/SectionsApi';


const Class = ({permition}) => {
  const rows = [
    {
      ID: "01",
      Class_Name: "الصف الأول",
      Division_name: "الشعبة الأولى ",
      Number_of_students: 30,
      modrator_name: "هناء نحاس"


    },
    {
      ID: "02",

      Class_Name: "الصف الثاني",

      Division_name: "الشعبة الثانية",
      Number_of_students: 30,
      modrator_name: "غنى كعكة"





    },




  ];
  const { t } = useTranslation("global");
  const AddRef = useRef(null)
  const [add_active, set_add_active] = useState(false);
  const [Edit_active, set_Edit_active] = useState(false);
  const [Class_Dropdown, set_Class_Dropdown] = useState("");
  // const [data, set_data] = useState([]);
  const [edit_content, set_edit_content] = useState({})
  // const [isLoading,setisLoading]=useState(true)
  // const { Sections,Supervisers, loading, error } = useData();
  const [modraterSelected,setmodratorSelected]=useState()
  const [ClassSelected,setClassSelectedSelected]=useState()


  const fetchData=() => {
    return  axios.get('http://www.marahschool.somee.com/api/Sections/GetAll')
  }
  
  const {isLoading, data:Sections,isError,error}=SectionQuery.GetAllSectionQuery()
  const { data:Class}=ClassQuery.GetAllClassQuery()
  const {data:Supervisers}=SupervisersQuery.GetAllSupervisersQuery()
  const {mutate}=SectionQuery.AddSection()

  
  



  // useEffect(()=>{
  //   axios.get('http://www.marahschool.somee.com/api/Sections/GetAll')
   
  //   // axios.post(' http://www.marahschool.somee.com/api/Sections/Add', {
  //   //   "name": "test",
  //   //   "size": 10,
  //   //   "classId": 1,
  //   //   "supervisorId": 1
  //   // })
  // .then(function (response) {
  //   // handle success
  
  //   setisLoading(false)
  //   set_data(response.data)
  // })
  // .catch(function (error) {
  //   // handle error
  //   console.log(error);
  // })
  // .finally(function () {
  //   // always executed
  // });
  // } ,[])

  const handleDelte = (ID) => {

    const f = data.find((ob, id) => {
      set_Edit_active(!Edit_active);
      return ob.ID === ID
    })
    const newRow = rows.filter((row) => {
      return row.ID != ID
    })


    set_data(newRow)


  }
  const handleChange_Class_Dropdown = (value) => {
    set_Class_Dropdown(value.name)
    const Class_filter = rows.filter((row) => {
      return row.Class_Name === value.name
    })

    if (Class_filter.length === 0) {
      set_data(rows)


    }
    else {
      set_data(Class_filter)


    }


  };

  const handleChange_Class_Add_Dropdown = (value) => {

    setClassSelectedSelected(value)
  


  };
  const handleChange_options_modrator = (value) => {
    setmodratorSelected(value)

  }
 
  const TableHeaderArray=[
  
    t("Class_Admin_dash.Class_Table.1"),
    t("Class_Admin_dash.Class_Table.2"),
    t("Class_Admin_dash.Class_Table.3"),
    t("Class_Admin_dash.Class_Table.5"),
    t("Class_Admin_dash.Class_Table.4"),






  ];

  const options_Class = [
    { name: t("Class_Admin_dash.Class_filter.0") },
    { name: t("Class_Admin_dash.Class_filter.1") },
    { name: t("Class_Admin_dash.Class_filter.2") },
    { name: t("Class_Admin_dash.Class_filter.3") },
    { name: t("Class_Admin_dash.Class_filter.4") },
    { name: t("Class_Admin_dash.Class_filter.5") },
    { name: t("Class_Admin_dash.Class_filter.6") }


  ]
  const options_modrator = [
    { name: "غنى كعكة" },
    { name: "غنى كعكة" },
    { name: "غنى كعكة" },
    { name: "غنى كعكة" },

  ]

  const options_Add_Class = [
    { name: t("Class_Admin_dash.Class_filter.1") },
    { name: t("Class_Admin_dash.Class_filter.2") },
    { name: t("Class_Admin_dash.Class_filter.3") },
    { name: t("Class_Admin_dash.Class_filter.4") },
    { name: t("Class_Admin_dash.Class_filter.5") },
    { name: t("Class_Admin_dash.Class_filter.6") }


  ]
  const formConfig_Add = {
    info: [
      { title: t("Class_Admin_dash.Class.2") },
      { descrption: t("Class_Admin_dash.Class.6") },
      { button_content: t("Class_Admin_dash.Class.2") }
    ],

    fields: [

      {
        name: "Class",
        label: t("Class_Admin_dash.Class.3"),
        img: arrowIcon,
        type: "Dropdown",
        inputType: "text",
        component: "Dropdown",
        options: Class?.data,
        onChange: handleChange_Class_Add_Dropdown

      },
      {
        name: "Division",
        label: t("Class_Admin_dash.Class.4"),
        img: "<PiUser />",
        type: "input",
        inputType: "text",
        component: "input",


      },
      {
        name: "Number_of_students",
        label: t("Class_Admin_dash.Class.5"),
        img: "<PiUser />",
        type: "input",
        inputType: "number",
        component: "input",


      },

      {
        name: "modrator_name",
        label: t("Class_Admin_dash.Class.11"),
        img: arrowIcon,
        type: "Dropdown",
        inputType: "text",
        component: "input",
        options: Supervisers?.data,
        onChange: handleChange_options_modrator


      },

    ],
    initialValues: {
      Class: "",
      Division: "",
      Number_of_students: 20,
      modrator_name: ""
    },

    validationSchema: {
      // Class: Yup.string().required(t("Class_Admin_dash.Class.6")),
      Division: Yup.string().required(t("Class_Admin_dash.Class.8")),
      Number_of_students: Yup.number()



    }

  };
  const formConfig_Edit = {
    info: [
      { title: t("Class_Admin_dash.Class.9"), },
      { descrption: t("Class_Admin_dash.Class.10"), },
      { button_content: t("Class_Admin_dash.Class.9"), }
    ],

    fields: [

      {
        name: "Class",
        label: t("Class_Admin_dash.Class.3"),
        img: arrowIcon,
        type: "Dropdown",
        inputType: "text",
        component: "Dropdown",
        options: options_Add_Class,
        onChange: handleChange_Class_Add_Dropdown

      },
      {
        name: "Division",
        label: t("Class_Admin_dash.Class.4"),
        img: "<PiUser />",
        type: "input",
        inputType: "text",
        component: "input",


      },
      {
        name: "Number_of_students",
        label: t("Class_Admin_dash.Class.5"),
        img: "<PiUser />",
        type: "input",
        inputType: "number",
        component: "input",


      },

      {
        name: "modrator_name",
        label: t("Class_Admin_dash.Class.11"),
        img: arrowIcon,
        type: "Dropdown",
        inputType: "text",
        component: "input",
        options: options_modrator,
        onChange: handleChange_options_modrator


      },

    ],
    initialValues: {
      Class: edit_content.Class_Name,
      Division: edit_content.Division_name,
      Number_of_students: edit_content.Number_of_students,
      modrator_name: edit_content.modrator_name



    },

    validationSchema: {
      Subject_Name: Yup.string().min(3, t("Class_Admin_dash.Exams.11")).max(12, t("Class_Admin_dash.Exams.12")).required(t("Class_Admin_dash.Exams.9")),
      Timing: Yup.date().required(t("Class_Admin_dash.Exams.13")),
      Test_type: Yup.string().min(3, (t("Class_Admin_dash.Exams.14"))).required(t("Class_Admin_dash.Exams.9")),


    }

  };
  const handleEdit = (ID) => {

    const Edit_clicKed = data.find((ob, id) => {
      set_Edit_active(!Edit_active);
      return ob.ID === ID
    })
    set_edit_content(Edit_clicKed)


  }
    const handleAddSubmit = (values, { setSubmitting }) => {
      const section={name:values.Division,size :values.Number_of_students ,classId :ClassSelected.id ,supervisorId:1 }
     

      mutate(section)

 
  
  };

  return (
    <Content
      path={t("Class_Admin_dash.Class.0")}
      classNameChildern="bg-white"
      hasExport={true}
      hasRefrech={true}
    >


      <div className='relative '>
        {add_active ?  (
          <Add
            formConfig={formConfig_Add}
            ref={AddRef}
            add_active={add_active}
            set_add_active={set_add_active}
            handleSubmit ={handleAddSubmit}



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
                {Sections?.data.length} {t("home_Admin_dash.record.0")}
              </span>
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

              {/* <Dropdown
        // value,
        label={t("Class_Admin_dash.Class.1")}
        options={options_Division}
        onChange={handleChange_Division_Dropdown}
        icon={arrowIcon}
        showSlected={true}
        ulClassname={"w-full "}
        classNameIcon=""
        className="sm:w-[12rem] w-[7rem] ease-in-out  border-b-[1px]   border-b-myGray-100 active:border-b-primary focus-within:border-b-primary duration-150"
      /> */}
            </div>

            <div className=''>

              <Button className="flex bg-success items-center gap-2 " onClick={() => { set_add_active(true) }}>{t("Class_Admin_dash.Class.2")} <IoIosAddCircle /> </Button>
            </div>




          </div>





        </TabsFillter>
        {/* {data.length >= 1 ? (
          <Table
            columns={columns}
            rows={data}
            handleEdit={handleEdit}
            handleDelte={handleDelte}
            action={{ delete: true, update: true }}
            className={"min-h-screen px-6 pt-2"}
            RowlinK={true}
            RowlinK_TO="/Admin_dashboard/Class"
          />
        ) : (
          <NoData ></NoData>
        )} */}
      <div className='px-10'>
      <Table className="mt-10 text-center text-xs sm:text-xs md:text-sm rounded-md">
          <TableHeader className="">
            <TableRow className="">
              {TableHeaderArray.map((header, index) => (
                <TableCell className="py-2" key={index}>{header}</TableCell>
              ))}
            </TableRow>
          </TableHeader>
          {/* {(per?.includes("ViewUser") ||
            per?.includes("UpdateUser") ||
            per?.includes("DeleteUser") ||
            per?.includes("ChangeUserStatus")) && ( */}
      
           {/* )} */}

           <tbody>
{isLoading ? (
<td colSpan={12}>
<Loading size={60} />
</td>
) : 

( Sections.data?.length === 0 ? (
  <td colSpan={12}>
    <NoData />
  </td>
) : (
  Sections.data.map((section,index) => (
    <TableRow
      key={section.id}
      className={
     ""
      }
         rowIndex={index}
    >
    
      <TableCell>{section.class.name}</TableCell>
      <TableCell>{section.name}</TableCell>
      <TableCell>{section.size}</TableCell>
      <TableCell>{section.supervisor.firstName} {section.supervisor.lastName}</TableCell>

  
   
     {/* <TableCell className="flex gap-4 text-xl justify-center mt-2">


      </TableCell> */}
    </TableRow>
 ))
)

)
}    


</tbody>
        </Table>
      </div>

      </div>
    </Content>
  )
}

export default Class

