
import { useMutation, useQuery, useQueryClient } from "react-query";
import {  StudentsApi } from "./SetudentsApi";
import axios from "axios";






const GetAllStudentQuery = (Search) => {

return useQuery(['get-all-Student',Search],StudentsApi.GetAllStudents)


}

const GetStudentBySectionnQuery = (id) => {

  return useQuery(['get-student-by-section',id],StudentsApi.GetStudentBySection,{
    select:(data)=>data.data.map(student => ({
      ...student,
      name: student.firstName + ' ' + student.lastName // Adjust this as per your data structure
    })
  )
  })
  
  
  }
  const GetStudentById = (id) => {

    return useQuery(['get-student-by-id',id],StudentsApi.GetStudentById)
    
    
    }


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
  GetStudentBySectionnQuery,
  AddStudent,
  EditStudent,
  GetStudentById


};
