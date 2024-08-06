
import { useMutation, useQuery } from "react-query";
import {  BehaviersApi } from "./BehaviersApi";
import axios from "axios";




const GetAllBehaviersByStudent = (StudentID) => {

return useQuery(['get-all-Behaviers',StudentID], BehaviersApi.GetAllBehaviersBystudentId)


}
const AddBehavier=() => {
    return useMutation(BehaviersApi.AddBehavier)
}







export const BehaviersQuery  = {
    GetAllBehaviersByStudent,
    AddBehavier


};