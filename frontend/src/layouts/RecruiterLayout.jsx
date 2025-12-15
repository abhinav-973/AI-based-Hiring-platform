import Sidebar from "../components/Dashboard/Sidebar";
import Navbar from "../components/Dashboard/Navbar";
import { Outlet } from "react-router-dom";

const RecruiterLayout = () => {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />

      <div className="flex-1">
        <Navbar />

        {/* MAIN CONTENT CHANGES HERE */}
        <div className="p-6">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default RecruiterLayout;
