import React, { useRef, useState, useEffect } from 'react'
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
import { TableCell, TableHeader, TableRow, Table } from '../../Dashbord_layout/Table';
import Loading from '../../../utilities/Loading/Loading';
import { useQuery,useQueryClient } from 'react-query'
import { SectionQuery } from '../../../../API/Sections/SectionsQueries';
import useData from '../../../../context/useData ';
import { ClassQuery } from '../../../../API/Class/ClassQueries';
import { SupervisersQuery } from '../../../../API/Supervisers/SupervisersQueries';
import { AddSection } from '../../../../API/Sections/SectionsApi';
import { Link } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';
import { RiDeleteBin5Line } from 'react-icons/ri';



const Class = ({ permition }) => {





  const { t } = useTranslation("global");
  const AddRef = useRef(null)
  const EditRef = useRef(null)
  const [Section_fetched, set_section_fetched] = useState([])
  const [add_active, set_add_active] = useState(false);
  const [Edit_active, set_Edit_active] = useState(false);
  const [edit_content, set_edit_content] = useState({})
  const queryClient = useQueryClient();

  const [modraterSelected, setmodratorSelected] = useState()
  const [modraterSelected_edit, setmodratorSelected_edit] = useState(edit_content.supervisor)
  const [ClassFiltterSelected, setClassFiltterSelected] = useState()
  const [ClassSelected, setClassSelectedSelected] = useState()
  const [ClassSelected_Edit, setClassSelected_Edit] = useState(edit_content.class)

  const SuccessAdd = () => {
    queryClient.invalidateQueries();
    set_add_active(!add_active)


  }
  const SuccessEdit = () => {
        set_Edit_active(!Edit_active)
  }


  const { isLoading, data: Sections, isFetched: FetchedSection, isError, error } = SectionQuery.GetAllSectionQuery()
  const { isLoading: isLoadingClass, data: Class, isFetched: isFetchedClass } = ClassQuery.GetAllClassQuery()
  const { data: Supervisers, isFetched: isFetchedModrator } = SupervisersQuery.GetAllSupervisersQuery_with_name()
  const { mutate: Add_Section ,isSuccess } = SectionQuery.AddSection(SuccessAdd)
  const { mutate: EditSection } = SectionQuery.EditSection(SuccessEdit)





 
  useEffect(() => {
    


    if (FetchedSection) {
      set_section_fetched(Sections.data)
    }
    if(isSuccess){
      set_section_fetched(Sections.data)
    }

  }, [FetchedSection])

  // filtter class
  const handle_change_filtter_class = (value) => {
    setClassFiltterSelected(value)
    // console.log(value)

    const Class_filter = Sections?.data.filter((section) => {

      return section.class.id === value.id
    })
   
    set_section_fetched(Class_filter)

    // if (Class_filter.length === 0) {
    //   set_data(rows)


    // }
    // else {
    //   set_data(Class_filter)


    // }


  };

  const handleChange_Class_Add_Dropdown = (value) => {

    setClassSelectedSelected(value)



  };
  const handleChange_Class_Edit_Dropdown = (value) => {

    setClassSelected_Edit(value)



  };
  const handleChange_options_modrator = (value) => {
    setmodratorSelected(value)

  }
  const handleChange_modrator_Edit = (value) => {
    setmodratorSelected_edit(value)
  }




  const TableHeaderArray = [

    t("Class_Admin_dash.Class_Table.1"),
    t("Class_Admin_dash.Class_Table.2"),
    t("Class_Admin_dash.Class_Table.3"),
    t("Class_Admin_dash.Class_Table.5"),
    t("Class_Admin_dash.Class_Table.4"),






  ];





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
        onChange: handleChange_Class_Add_Dropdown,
        isFetched: isFetchedClass

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
        options: Supervisers,
        onChange: handleChange_options_modrator,
        isFetched: isFetchedModrator


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
        options: Class?.data,
        onChange: handleChange_Class_Edit_Dropdown,
        isFetched: isFetchedClass

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
        options: Supervisers,
        onChange: handleChange_modrator_Edit,
        isFetched: isFetchedModrator


      },

    ],
    initialValues: {
      Class: edit_content?.class?.name,
      Division: edit_content.name,
      Number_of_students: edit_content.size,
      modrator_name: edit_content.firstName



    },

    validationSchema: {



    }

  };
  const handleEdit_Clicked = (ID) => {
    set_Edit_active(!Edit_active);
    const Edit_clicKed = Sections?.data.find((section, id) => {
      return section.id === ID
    })


    set_edit_content(Edit_clicKed)
    setClassSelected_Edit(edit_content.class)
  



  }
  const handleAddSubmit = (values, { setSubmitting }) => {
    const section = { name: values.Division, size: values.Number_of_students, classId: ClassSelected.id, supervisorId: modraterSelected.id }


    Add_Section(section)





  };

  const handle_Edit_submit = (values, { setSubmitting }) => {
 

    const section = {
      id: edit_content.id,
      name: values.Division,
      size: values.Number_of_students,
      classId: ClassSelected_Edit === undefined ?  edit_content.class.id:  ClassSelected_Edit.id,
      supervisorId: modraterSelected_edit === undefined ? edit_content.supervisor.id : modraterSelected_edit.id,
      teatcherId: edit_content.teatchers
    }
    // const section={id:edit_content.id,name:values.Division,size :values.Number_of_students, classId:edit_content.class.id,supervisorId:edit_content.supervisor.id,teatcherId:edit_content.teatchers }

    
    EditSection(section)


    // mutate(section)



  };
  return (
    <Content
      path={t("Class_Admin_dash.Class.0")}
      classNameChildern="bg-white"
      hasExport={true}
      hasRefrech={true}
    >


      <div className='relative '>
        {add_active ? (
          <Add
            formConfig={formConfig_Add}
            ref={AddRef}
            add_active={add_active}
            set_add_active={set_add_active}
            handleSubmit={handleAddSubmit}



          />

        ) : (
          ""
        )}
        {Edit_active ? (
          <Edit

            Edit_active={Edit_active}
            set_Edit_active={set_Edit_active}
            formConfig={formConfig_Edit}
            ref={EditRef}
            // set_data={set_data}
            handleSubmit={handle_Edit_submit}


          />
        ) : (
          ""
        )}







        < TabsFillter>

          <div className='flex  gap-10 items-center justify-between  w-full'>
            <div className='flex gap-10'>
              <span className="ps-2 pe-5 py-1 border-[1px] border-solid border-myGray-100  flex items-center  justify-start rounded-lg   text-myGray-500">
                {Section_fetched?.length} {t("home_Admin_dash.record.0")}
              </span>
              <Dropdown
                isFetched={isFetchedClass}
                label={t("Class_Admin_dash.Class.0")}
                options={Class?.data}
                onChange={handle_change_filtter_class}
                icon={arrowIcon}
                showSlected={true}
                ulClassname={"w-full "}
                classNameIcon=""
                className="sm:w-[12rem] w-[7rem] ease-in-out  border-b-[1px]   border-b-myGray-100 active:border-b-primary focus-within:border-b-primary duration-150"
              />

            </div>

            <div className=''>

              <Button className="flex bg-success items-center gap-2 " onClick={() => { set_add_active(true) }}>{t("Class_Admin_dash.Class.2")} <IoIosAddCircle /> </Button>
            </div>




          </div>





        </TabsFillter>
   
        <div className='px-10'>
          <Table className="mt-10 text-center text-xs sm:text-xs md:text-sm rounded-md">
            <TableHeader className="">
              <TableRow className="">
                {TableHeaderArray.map((header, index) => (
                  <TableCell className="py-2" key={index}>{header}</TableCell>
                ))}
              </TableRow>
            </TableHeader>
          

            <tbody>
              {isLoading ? (
                <td colSpan={12}>
                  <Loading size={60} />
                </td>
              ) :

                (Section_fetched.length === 0 ? (
                  <td colSpan={12}>
                    <NoData />
                  </td>
                ) : (
                  Section_fetched.map((section, index) => (
                    <TableRow
                      key={section.id}
                      className={
                        ""
                      }
                      rowIndex={index}
                    >

                      <TableCell><Link to={`/School-website/Admin_dashboard/Class/${section.id}`}> {section.class.name}</Link></TableCell>
                      <TableCell><Link to={`/School-website/Admin_dashboard/Class/${section.id}`}>{section.name}</Link></TableCell>
                      <TableCell><Link to={`/School-website/Admin_dashboard/Class/${section.id}`}>{section.size}</Link></TableCell>
                      <TableCell><Link to={`/School-website/Admin_dashboard/Class/${section.id}`}>{section.supervisor.firstName} {section.supervisor.lastName}</Link></TableCell>



                      <TableCell className="flex gap-4 text-xl justify-center mt-2">
                        <div className="cursor-pointer text-[18px] hover:text-success " onClick={() => { handleEdit_Clicked(section.id) }}>
                          <AiOutlineEdit />

                        </div>
                        <div className="cursor-pointer text-[18px] hover:text-error " onClick={() => { }}>
                          <RiDeleteBin5Line />
                        </div>

                      </TableCell>
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

