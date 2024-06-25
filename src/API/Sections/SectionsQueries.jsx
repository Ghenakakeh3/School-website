
import { useMutation, useQuery } from "react-query";
import {  SectionsApi } from "./SectionsApi";
import axios from "axios";


 const AddSectionapi= (section) => {

  return  axios.post( `http://www.marahschool.somee.com/api/Sections/Add`,section)
};

const GetAllSectionQuery = () => {

return useQuery('get-all-section',SectionsApi.GetAllSections)


}

const AddSection=() => {
// return useMutation(SectionsApi.AddSection())
return useMutation(AddSectionapi)

  
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
  AddSection


};
