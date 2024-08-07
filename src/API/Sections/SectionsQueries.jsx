
import { QueryClient, useMutation, useQuery, useQueryClient } from "react-query";
import {  SectionsApi } from "./SectionsApi";
import axios from "axios";








const GetAllSectionQuery = () => {

return useQuery('get-all-section',SectionsApi.GetAllSections)


}


//  const GetSectionByClass = (ClassId) => {

//   return useQuery(['get-section-by-class',ClassId],SectionsApi.Get_Sections_By_class)
  
  
//   }

const AddSection=(SuccessAdd) => {
  const queryClient = useQueryClient();

// return useMutation(SectionsApi.AddSection())
return useMutation(SectionsApi.AddSection,
  {
  onSuccess:(data)=>{
 queryClient.setQueryData('get-all-section',(oldQuryData)=>{
  const ob={...oldQuryData,data:data.data}
  return 
  ob
   
  

 })
  }

})

  
}

const EditSection =(SuccessEdit) => {
  // return useMutation(SectionsApi.AddSection())
  return useMutation(SectionsApi.EditSection,{
    onSuccess:SuccessEdit
  })
  
    
  }

// const GetBYIdUserQury = (id) => {
//   const queryResult = useQuery({
//     queryKey: ["get-User-by-id", id],
//     queryFn: async () => {
//       const data = await UserApi.GetByIdUser(id);
//       return data;
//     },
//     enabled: !!id,
//   });
//   return queryResult;
// };

// const SetUserQuery = () => {
//   const queryResult = useMutation({
//     mutationKey: ["set-User"],
//     mutationFn: UserApi.SetUser,
//   });
//   return queryResult;
// };






// const UpdateUserQuery = () => {
//   const queryResult = useMutation({
//     mutationKey: ["update-User"],
//     mutationFn: UserApi.UpdateUser,
//   });
//   return queryResult;
// };

const GetSectionsSupperviser=() => {

  return useQuery('get-all-section',SectionsApi.GetAllSections)
}
  
  


export const SectionQuery = {
  GetAllSectionQuery,
  AddSection,
  EditSection


};
