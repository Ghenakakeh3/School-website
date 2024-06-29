
import { useMutation, useQuery, useQueryClient } from "react-query";
import {  StudentsApi } from "./SetudentsApi";
import axios from "axios";






const GetAllStudentQuery = () => {

return useQuery('get-all-Student',StudentsApi.GetAllStudents)


}


//  const GetStudentByClass = (ClassId) => {

//   return useQuery(['get-Student-by-class',ClassId],StudentsApi.Get_Students_By_class)
  
  
//   }

const AddStudent=(SuccessAdd) => {
// return useMutation(StudentsApi.AddStudent())
return useMutation(StudentsApi.AddStudent,
  {
  onSuccess:SuccessAdd

})

  
}

const EditStudent =(SuccessEdit) => {
  // return useMutation(StudentsApi.AddStudent())
  return useMutation(StudentsApi.EditStudent,{
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




export const StudentQuery = {
  GetAllStudentQuery,
  AddStudent,
  EditStudent


};
