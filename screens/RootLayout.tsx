
//Topbar and CategoryTopbar layouts that wont move while outlet changes
import { Outlet } from "react-router-dom";
import Topbar from "../src/components/Topbar/Topbar";
import CategoryTopbar from "@/components/CategoryTopbar";
const RootLayout = () => {
  return (
     <div className="w-full md:flex">
      <Topbar />
      <div  style={{marginTop:80,justifyContent: 'center', width: '100%', }}>
      <CategoryTopbar/>
      </div>
    
      <div>
        <Outlet />      
      </div>
    </div>
  )
}

export default RootLayout;