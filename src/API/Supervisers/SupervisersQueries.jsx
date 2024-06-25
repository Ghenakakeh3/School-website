
import { useMutation, useQuery } from "react-query";
import {  SupervisersApi } from "./SupervisersApi";
import axios from "axios";




const GetAllSupervisersQuery = () => {

return useQuery('get-all-Supervisers', SupervisersApi.GetAllSupervisers)


}






export const SupervisersQuery  = {
    GetAllSupervisersQuery


};