import { useState } from 'react'

import './App.css'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import UserLayout from './components/user/layout/UserLayout'
import Home from './components/user/home/Home'
import Login from "./components/user/Auth/Login/Login"
import ForgetPassword from "./components/user/Auth/ForgetPassword/ForgetPassword"
import VerfictionCode from "./components/user/Auth/VerificationCode/VerificationCode"
import Home_admin from "./components/Dashbord/Admin_Dashboard/Home/Home"
import DashboardLayout from "./components/Dashbord/Dashbord_layout/DashboardLayout"
import Admin_Settings from './components/Dashbord/Admin_Dashboard/Settings/Admin_Settings'
import Manage_user_accounts from './components/Dashbord/Admin_Dashboard/Settings/Manage_user_accounts'
import Admin_accounts from './components/Dashbord/Admin_Dashboard/Settings/Accounts/Admin_accounts'
import Class from './components/Dashbord/Admin_Dashboard/Class/Class'
import ClassDetales from './components/Dashbord/Admin_Dashboard/Class/ClassDetales'
import Subjects from './components/Dashbord/Admin_Dashboard/Class/Subjects'
import Registered_students from './components/Dashbord/Admin_Dashboard/Class/Registered_students'
import Weekly_program from './components/Dashbord/Admin_Dashboard/Class/Weekly_program'
import Time_record from './components/Dashbord/Admin_Dashboard/Class/Time_record'
import Exams from './components/Dashbord/Admin_Dashboard/Class/Exams'
import Subject_marks from './components/Dashbord/Admin_Dashboard/Class/Subject_marks'
import Students from './components/Dashbord/Admin_Dashboard/Students/Students'
import Teachers from './components/Dashbord/Admin_Dashboard/Teachers/Teachers'
import Students_details from './components/Dashbord/Admin_Dashboard/Students/Students_details'
import Moderators from './components/Dashbord/Admin_Dashboard/Moderators/Moderators'
import Division_materials_student from './components/Dashbord/Admin_Dashboard/Students/Division_materials_student'
import Exams_student from './components/Dashbord/Admin_Dashboard/Students/Exams_student '
import Time_record_student from './components/Dashbord/Admin_Dashboard/Students/Time_record_student'
import Weekly_program_student from './components/Dashbord/Admin_Dashboard/Students/Weekly_program_student'
import Teachers_details from './components/Dashbord/Admin_Dashboard/Teachers/Teachers_details'
import Time_record_Teacher from './components/Dashbord/Admin_Dashboard/Teachers/Time_record_Teacher'
import Weekly_program_Teacher from './components/Dashbord/Admin_Dashboard/Teachers/Weekly_program_Teacher'
import Charts from './components/Dashbord/Admin_Dashboard/Charts/Charts'
import Division from './components/Dashbord/Supervisor_Dashboard/Division/Division/Division'
import DivisionDetales from './components/Dashbord/Supervisor_Dashboard/Division/Division/DivisionDetales'
import Division_students from './components/Dashbord/Supervisor_Dashboard/Division/Division/Division_students'
import Division_Weekly_program from './components/Dashbord/Supervisor_Dashboard/Division/Division/Division_Weekly_program'
import Division_Time_record from './components/Dashbord/Supervisor_Dashboard/Division/Division/Division_Time_record'
import Students_Division from './components/Dashbord/Supervisor_Dashboard/students/Students_Division'
import Daily_inspection from './components/Dashbord/Supervisor_Dashboard/Division/Division/Daily inspection/Daily_inspection'
import Division_test from './components/Dashbord/Supervisor_Dashboard/Division/Division/Division_test'
import Division_Subject_marks from './components/Dashbord/Supervisor_Dashboard/Division/Division/Division_Subject_marks'
import Behvier_notification from './components/Dashbord/Admin_Dashboard/Students/Behvier_notification'
import Adverts from './components/Dashbord/Admin_Dashboard/Adverts/Adverts'
import Supervisor_Home from './components/Dashbord/Supervisor_Dashboard/Home/Supervisor_Home'
import Posts from './components/Dashbord/Supervisor_Dashboard/Posts/Posts'
import DivisionsTecher from './components/Dashbord/Admin_Dashboard/Teachers/DivisionsTecher'


function App() {
  

  return (
    <BrowserRouter>
        <Routes>



      
   
          {/* <Route path="/" element={<UserLayout />}> */}
            {/* <Route path="/" element={<Home />} /> */}
         
          
      
          {/* </Route> */}
          {/* auth Routes */}
          <Route path="/School-website/" element={<Login />} />
          <Route path="/School-website/forget-password" element={<ForgetPassword />} />
          <Route path="/School-website/verification-code" element={<VerfictionCode />} />


          {/* Admin_dashboard */}
          <Route path="/School-website/Admin_dashboard" element={<DashboardLayout />}>
            <Route path="/School-website/Admin_dashboard" element={<Home_admin />} /> 
            
            
           
            <Route path="Class" element={<Class />}  > 
         
            </Route>
           {/* Class */}
            <Route path="Class/:id" element={<ClassDetales />} >
            <Route index  path="Subjects" element={<Subjects />} />
            <Route path="Registered_students" element={<Registered_students />} />
           
            <Route path="Registered_students/:id" element={<Students_details />} >
              <Route  path='Division_materials' element={<Division_materials_student />}/>
              <Route  path='exams' element={<Exams_student />}/>
              <Route  path='Time_record' element={<Time_record_student />}/>
              <Route  path='Weekly_program' element={<Weekly_program_student />}/>
              



              


           

              

            </Route>

            <Route path="Weekly_program" element={<Weekly_program  />} />
            <Route path="Time_record" element={<Time_record  />} />
            <Route path="Exams" element={<Exams  />} />
            <Route path="Subject_marks" element={<Subject_marks  />} /> 
            <Route path="Subject_marks/:id" element={<ClassDetales />} >


            
            
            </Route>






            </Route>


            
            {/* students */}
            <Route path="students" element={<Students />} /> 
            <Route path="students/:id" element={<Students_details Admin={true}/>} >
              <Route  path='Division_materials' element={<Division_materials_student />}/>
              <Route  path='exams' element={<Exams_student />}/>
              <Route  path='Time_record' element={<Time_record_student />}/>
              <Route  path='Weekly_program' element={<Weekly_program_student />}/>
              <Route  path='Behvier_notification' element={<Behvier_notification actions={{}} />}/>




              


           

              

            </Route>
            

            {/* Teachers */}
         
            <Route path="Teachers" element={<Teachers />} /> 
            <Route path="Teachers/:id" element={<Teachers_details />} >
             
            
              <Route  path='Time_record' element={<Time_record_Teacher />}/>
              <Route  path='Weekly_program' element={<Weekly_program_Teacher />}/>
              <Route  path='Divsions' element={<DivisionsTecher />}/>

              



              


           

              

            </Route>


             {/* Moderators */}
         
             <Route path="Moderators" element={<Moderators />} /> 
      

             {/* charts */}
            <Route path='charts' element={<Charts />}/>

      




          </Route>
{/* Admin_Adverts */}
<Route path='/School-website/Admin_Adverts'element={<Adverts/>} />



          {/* Admin_Settings */}
          <Route path="/Admin_Settings" element={<Admin_Settings />} >
          <Route path="Manage_user_accounts" element={<Manage_user_accounts />} >
          
          <Route index path="Admin_accounts" element={<Admin_accounts />} />
          <Route path="Parents_accounts" element={<Admin_accounts />} />
          <Route path="Student_accounts" element={<Admin_accounts />} />
       


            
            
            
             </Route>

            </Route>


{/* *********************************************************************************************************** */}
            {/* Superviso_dashboard */}
            <Route path='/School-website/Supervisor_dashboard'  element={<DashboardLayout/>}>
            <Route path='/School-website/Supervisor_dashboard'  element={<Supervisor_Home/>}/>
            <Route path="Division" element={<Division />}  />
            <Route path='Division/:id' element={<DivisionDetales /> }>
            <Route path="Registered_students" element={<Division_students />} />
            <Route  path='Weekly_program' element={<Division_Weekly_program/>}/>
            <Route  path='Time_record' element={<Division_Time_record/>}/>
            <Route  path='Daily_inspection' element={<Daily_inspection/>}/>
            <Route  path='Exams' element={<  Division_test/>}/>
            <Route  path='Subject_marks' element={<  Division_Subject_marks/>}/>

            
          

            

            
            

            </Route>
            <Route path='students' element={<Students_Division />} />
            <Route path="students/:id" element={<Students_details />} >
              <Route  path='Division_materials' element={<Division_materials_student />}/>
              <Route  path='exams' element={<Exams_student />}/>
              <Route  path='Time_record' element={<Time_record_student />}/>
              <Route  path='Weekly_program' element={<Weekly_program_student />}/>
              <Route  path='Behvier_notification' element={<Behvier_notification  actions={{add:true,update:true,delete:true}}/>}/>




              


           

              

            </Route>


            </Route>
            {/* Supervisor Adverts */}
            <Route path='Supervisor_Adverts' element={<Adverts/>}/>
            {/* New_Post */}
            <Route path='Posts' element={<Posts/>}/>
            
       


        </Routes>
    
    </BrowserRouter>
  )
}

export default App
