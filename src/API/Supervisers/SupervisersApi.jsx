
import {axiosGet} from '../Axios'
import { API_Routes } from "../../Constant/ApiRoutes";
import axios from 'axios';
const baiseUrl ="http://www.marahschool.somee.com/api/"


const GetAllSupervisers = async () => {

  // return  axios.get( `${baiseUrl}${API_Routes.Supervisers.GetAll}`)
  return  axios.get( `${baiseUrl}${API_Routes.Superviser.GetAll}`)

};
const AddSuperviser=async (Superviser) => {

  return  axios.post( `${baiseUrl}${API_Routes.Superviser.AddSupervisor}`,Superviser)
};








export const SupervisersApi = {
    GetAllSupervisers,
    AddSuperviser
 
};