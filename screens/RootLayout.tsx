
import { Outlet } from "react-router-dom";
import Topbar from "../src/components/Topbar/Topbar";
import Bottombar from "../src/components/Bottombar";
import LeftSidebar from "../src/components/LeftSidebar";

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