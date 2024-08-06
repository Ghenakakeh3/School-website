
import {axiosGet} from '../Axios'
import { API_Routes } from "../../Constant/ApiRoutes";
import axios from 'axios';
const baiseUrl ="http://www.marahschool.somee.com/api/"


const GetAllParents = async () => {

  return  axios.get( `${baiseUrl}${ API_Routes.Parents.GetAll}`,{
    headers :{
      userId:localStorage.getItem("userId")
    }
  })
};


export const AddParent=async (Parent) => {

  return  axios.post( `${baiseUrl}${API_Routes.Parents.AddParent}`,Parent)
};













export const ParentsApi = {
    GetAllParents,
    AddParent,

  
};