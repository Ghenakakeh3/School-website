
import {axiosGet} from '../Axios'
import { API_Routes } from "../../Constant/ApiRoutes";
import axios from 'axios';
const baiseUrl ="http://www.marahschool.somee.com/api/"


const GetAllTime_recordBySection = async ({queryKey}) => {
    const SectionID=queryKey[1]

  return  axios.get( `${baiseUrl}${API_Routes.Time_record.GetAllBySection}?sectionId=${SectionID}`)
 
};

const GetAllTime_recordBystudent= async ({queryKey}) => {
  const StudentID=queryKey[1]

return  axios.get( `${baiseUrl}${API_Routes.Time_record.GetAllByStudent}?StudentId=${StudentID}`)

};
const GetTimeRecorde_Teacher= async ({queryKey}) => {
  const TeacherID=queryKey[1]

return  axios.get( `${baiseUrl}${API_Routes.Time_record.GetTeacherTimeRecorde}?TeatcherId=${TeacherID}`)

};
const AddStudentdawam=async (Time_recorde) => {

  return  axios.post( `${baiseUrl}${API_Routes.Time_record.Add_student_dawam}`,Time_recorde)
};












export const TimeRecordApi = {
    GetAllTime_recordBySection,
    GetAllTime_recordBystudent,
    GetTimeRecorde_Teacher,
    AddStudentdawam
 
};