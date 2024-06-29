
import { useMutation, useQuery, useQueryClient } from "react-query";
import {  SupervisersApi } from "./SupervisersApi";
import axios from "axios";


const GetAllSupervisersQuery = () => {

    return useQuery('get-all-Supervisers', SupervisersApi.GetAllSupervisers)
    
    
    }



const GetAllSupervisersQuery_with_name = () => {

return useQuery('get-all-Supervisers', SupervisersApi.GetAllSupervisers,{
    select:(data)=>data.data.map(superviser => ({
        ...superviser,
        name: superviser.firstName + ' ' + superviser.lastName // Adjust this as per your data structure
      })
    )
})


}

const Add_Superviser=(SuccessAdd) => {
    const queryClient = useQueryClient();
  
  // return useMutation(SectionsApi.AddSection())
  return useMutation(SupervisersApi.AddSuperviser,
    {
    onSuccess:(data)=>{
        SuccessAdd()
   queryClient.setQueryData('get-all-section',(oldQuryData)=>{

    const ob={...oldQuryData,data:data.data}
    return 
    ob
     
    
  
   })
    }

  
  })
  
    
  }






export const SupervisersQuery  = {
    GetAllSupervisersQuery_with_name,
    GetAllSupervisersQuery,
    Add_Superviser


};