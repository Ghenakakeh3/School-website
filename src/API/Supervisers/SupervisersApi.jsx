
import {axiosGet} from '../Axios'
import { API_Routes } from "../../Constant/ApiRoutes";
import axios from 'axios';
const baiseUrl ="http://www.marahschool.somee.com/api/"


const GetAllSupervisers = async () => {

  // return  axios.get( `${baiseUrl}${API_Routes.Supervisers.GetAll}`)
  return  axios.get( `http://www.marahschool.somee.com/api/Supervisers/GetAllSupervisors`)

};















export const SupervisersApi = {
    GetAllSupervisers,
 
};