
import { useMutation, useQuery } from "react-query";
import axios from "axios";
import { TimeRecordApi } from "./TimeRecordApi";





const GetAllBySection = (SectionID) => {

return useQuery(['get-all-Time_record',SectionID], TimeRecordApi.GetAllTime_recordBySection)


}


const GetAllByStudent = (StudentId) => {

    return useQuery(['get-all-Time_record-by-StudentId',StudentId], TimeRecordApi.GetAllTime_recordBystudent)
    
    
    }

    const GetTeacher_TimeRecord = (TeacherId) => {

        return useQuery(['get-all-Time_record-by-TeacherId',TeacherId], TimeRecordApi.GetTimeRecorde_Teacher)
        
        
        }






export const Time_recordQuery  = {
    GetAllBySection,
    GetAllByStudent,
    GetTeacher_TimeRecord


};