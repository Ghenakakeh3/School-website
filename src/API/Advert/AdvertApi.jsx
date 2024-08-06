
import {axiosGet} from '../Axios'
import { API_Routes } from "../../Constant/ApiRoutes";
import axios from 'axios';
const baiseUrl ="http://www.marahschool.somee.com/api/"


const GetAllAdverts = async () => {

  return  axios.get( `${baiseUrl}${ API_Routes.Advert.GetAll}`,{
    headers :{
      userId:localStorage.getItem("userId")
    }
  })
};


export const AddAdvert=async (Advert) => {

  return  axios.post( `${baiseUrl}${API_Routes.Advert.AddAdvert}`,Advert)
};














export const AdvertsApi = {
    GetAllAdverts,
    AddAdvert,
   
  
};