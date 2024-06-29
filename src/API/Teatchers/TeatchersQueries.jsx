
import { useMutation, useQuery, useQueryClient } from "react-query";
import {  TeatchersApi } from "./TeatchersApi";







const GetAllTeatcherQuery = () => {

return useQuery('get-all-Teatcher',TeatchersApi.GetAllTeatchers)


}
const GetTecherById=(teatcherId) => {
    return useQuery(['get-Teatcher-by-id',teatcherId],TeatchersApi.Get_Teatchers_By_id)
  
}


//  const GetTeatcherByClass = (ClassId) => {

//   return useQuery(['get-Teatcher-by-class',ClassId],TeatchersApi.Get_Teatchers_By_class)
  
  
//   }

const AddTeatcher=(SuccessAdd) => {
// return useMutation(TeatchersApi.AddTeatcher())
return useMutation(TeatchersApi.AddTeatcher,
  {
  onSuccess:SuccessAdd

})

  
}

const EditTeatcher =(SuccessEdit) => {
  // return useMutation(TeatchersApi.AddTeatcher())
  return useMutation(TeatchersApi.EditTeatcher,{
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




export const TeatcherQuery = {
  GetAllTeatcherQuery,
  GetTecherById,
  AddTeatcher,
  EditTeatcher


};
