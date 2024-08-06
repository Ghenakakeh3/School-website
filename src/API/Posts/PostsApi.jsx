
import {axiosGet} from '../Axios'
import { API_Routes } from "../../Constant/ApiRoutes";
import axios from 'axios';
const baiseUrl ="http://www.marahschool.somee.com/api/"


const GetAlPosts = async () => {
    

  return  axios.get( `${baiseUrl}${API_Routes.Posts.GetAll}`)
 
};
const AddPost=async (Post) => {

  return  axios.post( `${baiseUrl}${API_Routes.Posts.AddPost}`,Post,{
    headers: {
        "Title": 'hhh',
        "Description": 'jj',
        "SupervisorId":44
    }
  })
};















export const PostsApi = {
    GetAlPosts,
  AddPost
 
};