
import {axiosGet} from '../Axios'
import { API_Routes } from "../../Constant/ApiRoutes";
import axios from 'axios';
const baiseUrl ="http://www.marahschool.somee.com/api/"


const GetAllMarksBySection = async ({queryKey}) => {
    const SectionID=queryKey[1]

  return  axios.get( `${baiseUrl}${API_Routes.Marks.GetAllBySection}?SectionId=${SectionID}`)
 
};
const AddMark=async (Mark) => {

  return  axios.post( `${baiseUrl}${API_Routes.Marks.AddMark}`,Mark)
};















export const MarksApi = {
    GetAllMarksBySection,
    AddMark
 
};