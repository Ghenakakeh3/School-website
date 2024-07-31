
import {axiosGet} from '../Axios'
import { API_Routes } from "../../Constant/ApiRoutes";
import axios from 'axios';
const baiseUrl ="http://www.marahschool.somee.com/api/"


const GetAllStudents = async ({queryKey}) => {
  const Search=queryKey[1]


  return  axios.get( `${baiseUrl}${ API_Routes.Student.GetAll}?Searchquery=${Search}`)
};
const GetStudentBySection = async ({queryKey}) => {
  const SectionId=queryKey[1]


  return  axios.get( `${baiseUrl}${API_Routes.Student.GetBySection}?SectionId=${SectionId}`)
};

const GetStudentById= async ({queryKey}) => {
  const StudentId=queryKey[1]


  return  axios.get( `${baiseUrl}${API_Routes.Student.GetById}?StudentId=${StudentId}`)
}

// const Get_Students_By_class = async ({queryKey}) => {
//   const classId=queryKey[1]
//   return  axios.get(`${baiseUrl}${ API_Routes.Student.ByClass}?classId=${classId}`)
// };

export const AddStudent=async (Student) => {

  return  axios.post( `${baiseUrl}${API_Routes.Student.AddStudent}`,Student)
};


 const EditStudent= (Student) => {

  return  axios.put( `${baiseUrl}${API_Routes.Student.EditStudent}`,Student)


};











export const StudentsApi = {
    GetAllStudents,
    GetStudentBySection,
    AddStudent,
    EditStudent,
    GetStudentById
  
};