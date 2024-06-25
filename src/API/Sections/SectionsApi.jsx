
import {axiosGet} from '../Axios'
import { API_Routes } from "../../Constant/ApiRoutes";
import axios from 'axios';
const baiseUrl ="http://www.marahschool.somee.com/api/"


const GetAllSections = async () => {

  return  axios.get( `${baiseUrl}${ API_Routes.Section.GetAll}`)
};

export const AddSection=async (section) => {

  return  axios.post( `${baiseUrl}${API_Routes.Section.AddSection}`,section)
};













export const SectionsApi = {
    GetAllSections
};