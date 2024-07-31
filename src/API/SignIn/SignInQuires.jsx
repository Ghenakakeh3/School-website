
import { QueryClient, useMutation, useQuery } from "react-query";
import { SignInApi } from "./SignApi";





const SignInSupervisor = () => {

    return useMutation(SignInApi.SignInSuperviser
    //     {
    //     onSuccess:(data)=>{
    //    QueryClient.setQueryData('signIn-supervioser',(oldQuryData)=>{
    //     const ob={...oldQuryData,data:data.data}
    //     return 
    //     ob
         
        
      
    //    })
    //     }
      
    //   }
    
    
    )


}






export const SignInQuery  = {
    SignInSupervisor


};