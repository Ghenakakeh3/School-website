
import {axiosGet} from '../Axios'
import { API_Routes } from "../../Constant/ApiRoutes";
import axios from 'axios';
const baiseUrl ="http://www.marahschool.somee.com/api/"


const GetAllBehaviersBystudentId = async ({queryKey}) => {
    const StudentID=queryKey[1]

  return  axios.get( `${baiseUrl}${API_Routes.Behaviers.GetAllByStudent}?studentId=${StudentID}`)
 
};
const AddBehavier=async (Behavier) => {

  return  axios.post( `${baiseUrl}${API_Routes.Behaviers.AddBehavier}`,Behavier)
};















export const BehaviersApi = {
  GetAllBehaviersBystudentId,
    AddBehavier
 
};