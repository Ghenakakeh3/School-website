
import {axiosGet} from '../Axios'
import { API_Routes } from "../../Constant/ApiRoutes";
import axios from 'axios';
const baiseUrl ="http://www.marahschool.somee.com/api/"


const GetAllClass = async () => {

  return  axios.get( `${baiseUrl}${API_Routes.Class.GetAll}`)
  // return  axios.get( `http://www.marahschool.somee.com/api/Classes/GetAll`)

};















export const ClassApi = {
    GetAllClass,
 
};