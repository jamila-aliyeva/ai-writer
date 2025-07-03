import Navbar from "../dashboard/navbar";
import Sidebar from "../dashboard/sidebar";
import { Outlet } from "react-router";

const DashboardLayouts = () => {
  return (
    <div className=" h-screen overflow-hidden flex">
      <Sidebar />
      <div className="w-full p-4">
        <Navbar />
        <div className="mt-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayouts;
