import { useState } from 'react'

import './App.css'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import UserLayout from './components/user/layout/UserLayout'
import Home from './components/user/home/Home'

function App() {
  

  return (
    <BrowserRouter>
        <Routes>




   
    <Route path="/" element={<UserLayout />}>
            <Route path="/" element={<Home />} />
            {/* <Route path="services" element={<TitleAndSideServices />}>z
              <Route index element={<Service />} />
              <Route path="map" element={<ChoselocationMap />} />
              <Route path="search" element={<Search />} />
            </Route>
            <Route path="/details/:id" element={<Details />} />

            <Route path="about-us" element={<AboutUs />} />
            <Route path="contact-us" element={<ContactUs />} /> */}
          </Route>
        </Routes>
    
    </BrowserRouter>
  )
}

export default App
