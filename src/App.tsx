import {Routes,Route} from 'react-router-dom'
import { LogIn,SignUp, AuthLayout } from './components'
import {AnunciosScreen,RootLayout} from '../screens'
import './globals.css'

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