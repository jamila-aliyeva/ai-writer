import Navbar from "../dashboard/navbar";
import Sidebar from "../dashboard/sidebar";
import { Outlet } from "react-router";

const DashboardLayouts = () => {
  return (
    <div className=" h-screen overflow-x-hidden flex">
      <Sidebar />
      <div className="w-full p-4">
        <Navbar />
        <div className="p-4 md:p-6 lg:p-8 ">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayouts;
