
import { useMutation, useQuery } from "react-query";
import {  ClassApi } from "./ClassApi";
import axios from "axios";




const GetAllClassQuery = () => {

return useQuery('get-all-class', ClassApi.GetAllClass)


}






export const ClassQuery  = {
    GetAllClassQuery


};