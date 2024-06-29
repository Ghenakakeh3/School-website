
import {axiosGet} from '../Axios'
import { API_Routes } from "../../Constant/ApiRoutes";
import axios from 'axios';
const baiseUrl ="http://www.marahschool.somee.com/api/"


const GetAllTeatchers = async () => {

  return  axios.get( `${baiseUrl}${ API_Routes.Teatcher.GetAll}`)

  
 
};
const Get_Teatchers_By_id = async ({queryKey}) => {
  const TecherId=queryKey[1]
  return  axios.get(`${baiseUrl}${API_Routes.Teatcher.GetTecherById}?TeatcherId=${TecherId}`)
};

export const AddTeatcher=async (Teatcher) => {

  return  axios.post( `${baiseUrl}${API_Routes.Teatcher.AddTeatcher}`,Teatcher)
};


 const EditTeatcher= (Teatcher) => {

  return  axios.put( `${baiseUrl}${API_Routes.Teatcher.EditTeatcher}`,Teatcher)


};











export const TeatchersApi = {
    GetAllTeatchers,
    Get_Teatchers_By_id,
    AddTeatcher,
    EditTeatcher
  
};