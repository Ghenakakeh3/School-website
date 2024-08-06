
import { QueryClient, useMutation, useQuery, useQueryClient } from "react-query";
import {  ParentsApi } from "./ParentsApi";
import axios from "axios";








const GetAllparents = () => {

return useQuery('get-all-parents',ParentsApi.GetAllParents)


}


//  const GetParentByClass = (ClassId) => {

//   return useQuery(['get-Parent-by-class',ClassId],ParentsApi.Get_Parents_By_class)
  
  
//   }

const Addparents=(SuccessAdd) => {
  const queryClient = useQueryClient();

// return useMutation(ParentsApi.AddParent())
return useMutation(ParentsApi.AddParent,
  {
  onSuccess:(data)=>{
 queryClient.setQueryData('get-all-Parent',(oldQuryData)=>{
  const ob={...oldQuryData,data:data.data}
  return 
  ob
   
  

 })
  }

})

  
}













  
  


export const ParentsQuery = {
  GetAllparents,
  Addparents,



};