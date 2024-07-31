
import { QueryClient, useMutation, useQuery, useQueryClient } from "react-query";
import {  ExamsApi } from "./ExamApi";
import axios from "axios";








const GetExamsBySection = (SectionID) => {

return useQuery(['get-Exam-Section',SectionID],ExamsApi.GetAllExamsBySection)


}

const GetExamsByStudent = (studentId) => {

  return useQuery(['get-Exam-Student',studentId],ExamsApi.GetAllExamsByStudent)
  
  
  }



const AddExam=(SuccessAdd) => {
  const queryClient = useQueryClient();


return useMutation(ExamsApi.AddExam)

  
}

const EditExam =(SuccessEdit) => {
  // return useMutation(ExamsApi.AddExam())
  return useMutation(ExamsApi.EditExam,{
    onSuccess:SuccessEdit
  })
  
    
  }













export const ExamQuery = {
    GetExamsBySection,
  AddExam,
  EditExam,
  GetExamsByStudent


};