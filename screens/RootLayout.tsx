
import { Outlet } from "react-router-dom";
import Topbar from "../src/components/Topbar/Topbar";

const RootLayout = () => {
  return (
     <div className="w-full md:flex">
      <Topbar />
      <div>
        <Outlet />      
      </div>
    </div>
  )
}

export default RootLayout;