
import {axiosGet} from '../Axios'
import { API_Routes } from "../../Constant/ApiRoutes";
import axios from 'axios';
const baiseUrl ="http://www.marahschool.somee.com/api/"


const GetAllMarial = async () => {

  return  axios.get( `${baiseUrl}${API_Routes.Marial.GetAll}`)
  // return  axios.get( `http://www.marahschool.somee.com/api/Mariales/GetAll`)

};















export const MarialApi = {
    GetAllMarial,
 
};