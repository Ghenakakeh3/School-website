
import { useMutation, useQuery } from "react-query";
import {  PostsApi } from "./PostsApi";
import axios from "axios";




const GetAlPosts = (StudentID) => {

return useQuery(['get-all-Posts',StudentID], PostsApi.GetAlPosts)


}
const AddPost=() => {
    return useMutation(PostsApi.AddPost)
}







export const PostsQuery  = {
    GetAlPosts,
    AddPost


};