import { useState } from 'react'

import './App.css'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import UserLayout from './components/user/layout/UserLayout'
import Home from './components/user/home/Home'
import Login from "./components/user/Auth/Login/Login"
import ForgetPassword from "./components/user/Auth/ForgetPassword/ForgetPassword"

import VerfictionCode from "./components/user/Auth/VerificationCode/VerificationCode"
import Dashboard from './components/Dashbord/Dashboard/Dashboard'
import Home_admin from "./components/Dashbord/Admin_Dashboard/Home/Home"
import DashboardLayout from "./components/Dashbord/Dashbord_layout/DashboardLayout"
import Admin_Settings from './components/Dashbord/Admin_Dashboard/Settings/Admin_Settings'
import Manage_user_accounts from './components/Dashbord/Admin_Dashboard/Settings/Manage_user_accounts'
import Admin_accounts from './components/Dashbord/Admin_Dashboard/Settings/Accounts/Admin_accounts'
import Class from './components/Dashbord/Admin_Dashboard/Class/Class'
import ClassDetales from './components/Dashbord/Admin_Dashboard/Class/ClassDetales'
import Subjects from './components/Dashbord/Admin_Dashboard/Class/Subjects'
import Registered_students from './components/Dashbord/Admin_Dashboard/Class/Registered_students'


function App() {
  

  return (
    <BrowserRouter>
        <Routes>




   
          <Route path="/" element={<UserLayout />}>
            <Route path="/" element={<Home />} />
            {/* auth Routes */}
          
            {/* <Route path="services" element={<TitleAndSideServices />}>z
              <Route index element={<Service />} />
              <Route path="map" element={<ChoselocationMap />} />
              <Route path="search" element={<Search />} />
            </Route>
            <Route path="/details/:id" element={<Details />} />

            <Route path="about-us" element={<AboutUs />} />
            <Route path="contact-us" element={<ContactUs />} /> */}
          </Route>
          {/*   */}
          <Route path="/login" element={<Login />} />
          <Route path="/forget-password" element={<ForgetPassword />} />
          <Route path="/verification-code" element={<VerfictionCode />} />


          {/* Admin_dashboard */}
          <Route path="/Admin_dashboard" element={<DashboardLayout />}>
            <Route path="/Admin_dashboard" element={<Home_admin />} > 
            
            
            </Route>
            <Route path="Class" element={<Class />}  > 
         
            </Route>
           
            <Route path="Class/:id" element={<ClassDetales />} >
            <Route path="Subjects" element={<Subjects />} />
            <Route path="Registered_students" element={<Registered_students />} />

            


            </Route>




            {/* <Route path="users" element={<Dashboard />} />
            <Route
              path="users/service_Providers"
              element={<Service_Provider />}
            />
            <Route path="users/patient_Users" element={<Patient_Users />} />
            <Route path="users/Admin_Users" element={<Admin_Users />} />

            <Route path="services" element={<Dashboard />} />
            <Route
              path="services/Doctors_Services"
              element={<DoctorServices />}
            />
            <Route
              path="services/Hospital_Services"
              element={<HospitalServices />}
            />
            <Route
              path="services/Pharmacy_Services"
              element={<PharmacyServices />}
            />
            <Route
              path="services/Clinic_Services"
              element={<ClinicServices />}
            />
            <Route path="services/Lab_Services" element={<LabServices />} />

            <Route path="requests" element={<Requests />} />
            <Route path="report" element={<Report />}>
              <Route index element={<Allusers />} />
              <Route path="all_services" element={<Allservices />} />
              <Route path="all-product" element={<Allproducts />} />
            </Route>
            <Route path="products" element={<Products />} />
            <Route path="settings" element={<Settings />} />
            <Route path="signOut" element={<SignOut />} /> */}
          </Route>
          <Route path="/Admin_Settings" element={<Admin_Settings />} >
          <Route path="Manage_user_accounts" element={<Manage_user_accounts />} >
          
          <Route index path="Admin_accounts" element={<Admin_accounts />} />
          <Route path="Parents_accounts" element={<Admin_accounts />} />
          <Route path="Student_accounts" element={<Admin_accounts />} />


            
            
            
             </Route>

            </Route>


        </Routes>
    
    </BrowserRouter>
  )
}

export default App
