import axios from "axios";
import { API_Routes } from "../../Constant/ApiRoutes";
const baiseUrl ="http://www.marahschool.somee.com/api/"

const Get_Weekly_program_By_sectinId = async ({queryKey}) => {
    const sectinId=queryKey[1]
    return  axios.get(`${baiseUrl}${API_Routes.Weekly_program.GetBySection}?sectionId=${sectinId}`)
  };



  export const Weekly_programsApi = {
    Get_Weekly_program_By_sectinId,
  
  
};