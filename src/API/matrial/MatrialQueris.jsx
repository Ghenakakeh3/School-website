import { useMutation, useQuery } from "react-query";
import {MarialApi} from "./MatrialApi.jsx"
import axios from "axios";




const GetAllMarialQuery = () => {

return useQuery('get-all-Marial', MarialApi.GetAllMarial)


}






export const MarialQuery  = {
    GetAllMarialQuery


};