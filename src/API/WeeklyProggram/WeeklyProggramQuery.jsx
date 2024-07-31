import { useQuery } from "react-query"
import { Weekly_programsApi } from "./Weekly_programsApi";

const GetWeekly_programById=(sectionId) => {
    return useQuery(['get-Weekly_program-by-id',sectionId],Weekly_programsApi.Get_Weekly_program_By_sectinId)
  
}


export const WeeklyProgramQuery = {
    GetWeekly_programById,
  
  
  
  };
  