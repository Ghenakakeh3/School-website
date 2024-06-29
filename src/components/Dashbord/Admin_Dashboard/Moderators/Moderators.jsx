







import React, { useEffect, useRef, useState } from 'react'
import { useTranslation } from "react-i18next";
import Typography from '../../../utilities/Typography'
import TabsFillter from '../../Dashbord_layout/TabsFillter'
import { InputSearch } from '../../../utilities/Inputs'
import Button from '../../../utilities/Button'
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
import { ClassQuery } from '../../../../API/Class/ClassQueries';
import { SupervisersQuery } from '../../../../API/Supervisers/SupervisersQueries';
import { TableCell, TableHeader, TableRow, Table } from '../../Dashbord_layout/Table';
import Loading from '../../../utilities/Loading/Loading';
import { AiOutlineEdit } from 'react-icons/ai';
import { RiDeleteBin5Line } from 'react-icons/ri';


const Moderators = () => {

  const { t } = useTranslation("global");
  const [edit_active, set_edit_active] = useState(false);
  const [Edit_active, set_Edit_active] = useState(false);
  const [Moderators_Dropdown, set_Moderators_Dropdown] = useState("");
  const [Supervisers_fetched, set_Supervisers_fetched] = useState([])


  const [edit_content, set_edit_content] = useState({})
  const [results, setResults] = useState([]);
  const [selected_result, setselected_result] = useState("");
  const [add_active, set_add_active] = useState(false);


  const [ClassFiltterSelected, setClassFiltterSelected] = useState()
  const SuccessAdd = () => {
    // queryClient.invalidateQueries();
    set_add_active(!add_active)


  }
  const SuccessEdit = () => {
    set_Edit_active(!Edit_active)
  }
  const { isLoading, data: Supervisers, isFetched: FetchedSupervisers, isError, error } = SupervisersQuery.GetAllSupervisersQuery()
  const { isLoading: isLoadingClass, data: Class, isFetched: isFetchedClass } = ClassQuery.GetAllClassQuery()
  const { mutate: Add_Superviser ,isSuccess } = SupervisersQuery.Add_Superviser(SuccessAdd)





  useEffect(() => {
    if (FetchedSupervisers) {
      set_Supervisers_fetched(Supervisers.data)
    }
    if(isSuccess){
      set_Supervisers_fetched(Supervisers.data)

    }


  }, [FetchedSupervisers])

  const handle_change_filtter_class = (value) => {
    setClassFiltterSelected(value)
    // console.log(value)

    const Class_filter = Sections?.data.filter((section) => {

      return section.class.id === value.id
    })
    console.log(Class_filter)
    set_section_fetched(Class_filter)

    // if (Class_filter.length === 0) {
    //   set_data(rows)


    // }
    // else {
    //   set_data(Class_filter)


    // }


  };


  const TableHeaderArray = [


    t("Moderators_Admin_dash.Moderators_Table.1"),
    t("Moderators_Admin_dash.Moderators_Table.2"),
    t("Moderators_Admin_dash.Moderators_Table.3"),
    t("Moderators_Admin_dash.Moderators_Table.4"),






  ];


  const handleEdit_Clicked = (ID) => {
    set_Edit_active(!Edit_active);
    const Edit_clicKed = Sections?.data.find((section, id) => {
      return section.id === ID
    })


    set_edit_content(Edit_clicKed)
    setClassSelected_Edit(edit_content.class)




  }
  const handleAddSubmit = (values, { setSubmitting }) => {
  console.log(values)
    const Superviser = 
    {
      firstName: values.Modrator_first_name, 
      lastName: values.Modrator_last_name, 
      phoneNumber: values.Phone_Number, 
      email:values.email, 
      password: values.password, 
    }


    Add_Superviser(Superviser)





  };

  const handle_Edit_submit = (values, { setSubmitting }) => {


    const section = {
      id: edit_content.id,
      name: values.Division,
      size: values.Number_of_students,
      classId: ClassSelected_Edit === undefined ? edit_content.class.id : ClassSelected_Edit.id,
      supervisorId: modraterSelected_edit === undefined ? edit_content.supervisor.id : modraterSelected_edit.id,
      teatcherId: edit_content.teatchers
    }
    // const section={id:edit_content.id,name:values.Division,size :values.Number_of_students, classId:edit_content.class.id,supervisorId:edit_content.supervisor.id,teatcherId:edit_content.teatchers }


    EditSection(section)


    // mutate(section)



  };







  const formConfig_Edit = {
    info: [
      { title: t("Moderators_Admin_dash.Moderators.1"), },
      { descrption: t("Moderators_Admin_dash.Moderators.2"), },
      { button_content: t("Moderators_Admin_dash.Moderators.1"), }
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
      // {
      //   name: "Class",
      //   label: t("Moderators_Admin_dash.Moderators_Table.2"),
      //   img: arrowIcon,
      //   type: "Dropdown",
      //   inputType: "text",
      //   component: "Dropdown",
      //   options: Class?.data,
      //   onChange :handleChange_Moderators_edit_Dropdown

      // },
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
    initialValues: {
      Modrator_name: edit_content.Modrator_name,
      Class: edit_content.Class,
      Division_name: edit_content.Division_name,
      Phone_Number: edit_content.phone_number




    },

    validationSchema: {
      Modrator_name: Yup.string(),
      Division_name: Yup.string(),



    }

  };
  const formConfig_Add = {
    info: [
      { title: t("Moderators_Admin_dash.Moderators.3"), },
      { descrption: t("Moderators_Admin_dash.Moderators.4"), },
      { button_content: t("Moderators_Admin_dash.Moderators.3"), }
    ],

    fields: [



      {
        name: "Modrator_first_name",
        label: t("Moderators_Admin_dash.Moderators_Table.5"),
        img: arrowIcon,
        type: "input",
        inputType: "text",
        component: "input",


      },
      {
        name: "Modrator_last_name",
        label: t("Moderators_Admin_dash.Moderators_Table.6"),
        img: arrowIcon,
        type: "input",
        inputType: "text",
        component: "input",


      },

      {
        name: "Phone_Number",
        label: t("Moderators_Admin_dash.Moderators_Table.2"),
        img: arrowIcon,
        type: "input",
        inputType: "text",
        component: "input",


      },
      {
        name: "email",
        label: t("Moderators_Admin_dash.Moderators_Table.3"),
        img: arrowIcon,
        type: "input",
        inputType: "text",
        component: "input",


      },
      {
        name: "password",
        label: t("Moderators_Admin_dash.Moderators_Table.7"),
        img: arrowIcon,
        type: "input",
        inputType: "text",
        component: "input",


      },


    ],
    initialValues: {
      Modrator_first_name: "",
      Modrator_last_name: "",
      Phone_Number: "",
      email: "",
      password: ""






    },

    validationSchema: {
      Modrator_first_name: Yup.string().required(t("Moderators_Admin_dash.Moderators.5")),
      Modrator_last_name: Yup.string().required(t("Moderators_Admin_dash.Moderators.5")),
      Phone_Number: Yup.string().required(t("Moderators_Admin_dash.Moderators.6")),
      email: Yup.string().email().required(t("Moderators_Admin_dash.Moderators.6")),
      password: Yup.string().required(t("Moderators_Admin_dash.Moderators.6")),






    }

  };


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
                {Supervisers?.data?.length} {t("home_Admin_dash.record.0")}
              </span>
              <Dropdown
                // value,
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

              <div className="search-bar-container relative ">
                <SearchBar setResults={setResults} selected_result={selected_result} placeholder={t("Moderators_Admin_dash.Moderators_Table.1")} />
                {results && results.length > 0 && <SearchResultsList results={results} setselected_result={setselected_result} />}
              </div>




            </div>
            <div className=''>

              <Button className="flex bg-success items-center gap-2 " onClick={() => { set_add_active(true) }}>{t("Moderators_Admin_dash.Moderators.3")} <IoIosAddCircle /> </Button>
            </div>






          </div>





        </TabsFillter>
        {/* {data.length >= 1 ? (
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

                (Supervisers_fetched?.length === 0 ? (
                  <td colSpan={12}>
                    <NoData />
                  </td>
                ) : (
                  Supervisers_fetched?.map((Superviser, index) => (
                    <TableRow
                      key={Superviser.id}
                      className={
                        ""
                      }
                      rowIndex={index}
                    >
                      <TableCell>{Superviser.firstName} {Superviser.lastName}</TableCell>
                      <TableCell>{Superviser.phoneNumber}</TableCell>
                      <TableCell>{Superviser.email}</TableCell>






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

export default Moderators
