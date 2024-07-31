
import {axiosGet} from '../Axios'
import { API_Routes } from "../../Constant/ApiRoutes";
import axios from 'axios';
const baiseUrl ="http://www.marahschool.somee.com/api/"


const GetAllExamsBySection = async ({queryKey}) => {
    const SectionID=queryKey[1]

  return  axios.get( `${baiseUrl}${API_Routes.Exam.GetAllBySection}?sectionId=${SectionID}`)
};

const GetAllExamsByStudent=async ({queryKey}) => {
  const studentId=queryKey[1]

return  axios.get( `${baiseUrl}${API_Routes.Exam.GetAllByStudent}?studentId=${studentId}`)
}


export const AddExam=async (Exam) => {

  return  axios.post( `${baiseUrl}${API_Routes.Exam.AddExam}`,Exam)
};


 const EditExam= (Exam) => {

  return  axios.put( `${baiseUrl}${API_Routes.Exam.EditExam}`,Exam)


};











export const ExamsApi = {
    GetAllExamsBySection,
    GetAllExamsByStudent,
    AddExam,
    EditExam
  
};