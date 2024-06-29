
import {axiosGet} from '../Axios'
import { API_Routes } from "../../Constant/ApiRoutes";
import axios from 'axios';
const baiseUrl ="http://www.marahschool.somee.com/api/"


const GetAllStudents = async () => {

  return  axios.get( `${baiseUrl}${ API_Routes.Student.GetAll}`)
};
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
    AddStudent,
    EditStudent
  
};