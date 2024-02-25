
//Topbar and CategoryTopbar layouts that wont move while outlet changes
import { Outlet } from "react-router-dom";
import Topbar from "../src/components/Topbar/Topbar";
import CategoryTopbar from "@/components/CategoryTopbar";

const RootLayout = () => {
  return (
     <div className="w-full md:flex">
      <Topbar />
      <div style={{marginTop:80,justifyContent: 'center', width: '100%', }}>
      <CategoryTopbar/>
      </div>
      <div className="flex flex-row bg-neutral-100 h-screen w-screen overflow-hidden">
        <div className=" bg-yellow-500 w-60 p-3 flex flex-col h-screen"   >
          <h1 className="text-amber-300">Left3</h1> 
        </div>
        <div><Outlet /></div>
        <div className=" bg-blue-600 w-60 p-3 flex flex-col h-screen"   >
          <h1 className="text-amber-300">Right</h1> 
        </div>
      </div>

    </div>
  )
}

export default RootLayout;