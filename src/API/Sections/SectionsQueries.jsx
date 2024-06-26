
import { useMutation, useQuery, useQueryClient } from "react-query";
import {  SectionsApi } from "./SectionsApi";
import axios from "axios";



const EditSectionApi=(section)=> {

  return  axios.put( `http://www.marahschool.somee.com/api/Sections/Update`,section)
};



const GetAllSectionQuery = () => {

return useQuery('get-all-section',SectionsApi.GetAllSections)


}


//  const GetSectionByClass = (ClassId) => {

//   return useQuery(['get-section-by-class',ClassId],SectionsApi.Get_Sections_By_class)
  
  
//   }

const AddSection=() => {
// return useMutation(SectionsApi.AddSection())
return useMutation(SectionsApi.AddSection)

  
}

const EditSection =() => {
  // return useMutation(SectionsApi.AddSection())
  return useMutation(EditSectionApi)
  
    
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




export const SectionQuery = {
  GetAllSectionQuery,
  AddSection,
  EditSection


};
