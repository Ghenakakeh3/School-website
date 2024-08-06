
import { QueryClient, useMutation, useQuery, useQueryClient } from "react-query";
import {  AdvertsApi } from "./AdvertApi";
import axios from "axios";








const GetAllAdvertQuery = () => {

return useQuery('get-all-Advert',AdvertsApi.GetAllAdverts)


}


//  const GetAdvertByClass = (ClassId) => {

//   return useQuery(['get-Advert-by-class',ClassId],AdvertsApi.Get_Adverts_By_class)
  
  
//   }

const AddAdvert=(SuccessAdd) => {
  const queryClient = useQueryClient();

// return useMutation(AdvertsApi.AddAdvert())
return useMutation(AdvertsApi.AddAdvert,
  {
  onSuccess:(data)=>{
 queryClient.setQueryData('get-all-Advert',(oldQuryData)=>{
  const ob={...oldQuryData,data:data.data}
  return 
  ob
   
  

 })
  }

})

  
}



  
  


export const AdvertQuery = {
  GetAllAdvertQuery,
  AddAdvert,
 


};