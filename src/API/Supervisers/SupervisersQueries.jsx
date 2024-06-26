
import { useMutation, useQuery } from "react-query";
import {  SupervisersApi } from "./SupervisersApi";
import axios from "axios";




const GetAllSupervisersQuery = () => {

return useQuery('get-all-Supervisers', SupervisersApi.GetAllSupervisers,{
    select:(data)=>data.data.map(superviser => ({
        ...superviser,
        name: superviser.firstName + ' ' + superviser.lastName // Adjust this as per your data structure
      })
    )
})


}






export const SupervisersQuery  = {
    GetAllSupervisersQuery


};