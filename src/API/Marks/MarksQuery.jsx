
import { useMutation, useQuery } from "react-query";
import {  MarksApi } from "./MarksApi.jsx";
import axios from "axios";




const GetAllMarksBySection = (SectionID) => {

return useQuery(['get-all-Marks',SectionID], MarksApi.GetAllMarksBySection)


}






export const MarksQuery  = {
    GetAllMarksBySection


};