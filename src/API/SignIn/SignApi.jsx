
import {axiosGet} from '../Axios'
import { API_Routes } from "../../Constant/ApiRoutes";
import axios from 'axios';
const baiseUrl ="http://www.marahschool.somee.com/api/"





export const SignInSuperviser=async (User) => {

  return  axios.post( `${baiseUrl}${API_Routes.SignIn.superviser}`,User)
};













export const SignInApi = {
    SignInSuperviser
  
};