import {Routes,Route} from 'react-router-dom'
import {AnunciosScreen, LogIn, SignUp} from '../screens'
import './globals.css'
import React from "react";
import AuthLayout from "@/layouts/AuthLayout.tsx";
import RootLayout from "@/layouts/RootLayout.tsx";

const App = () => {
  return (
        <Routes>
            {/* public routes */}
            <Route  element={<AuthLayout/>}>
                <Route path="/sign-up" element={<SignUp/>}/>
                <Route path="/sign-in" element={<LogIn/>}/>
            </Route>
           
            {/* private routes */}
            <Route  element={<RootLayout/>}>
              <Route index element={<AnunciosScreen/>}/>
            </Route>
        </Routes>
  )
}

export default App