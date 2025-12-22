import { useNavigate } from "react-router-dom";
import { logout, getAuth } from "../../utils/auth";

const Navbar = () => {
  const navigate = useNavigate();
  const auth = getAuth();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <div className="h-16 bg-gray-100 flex items-center justify-between px-6 border-b">
      <h3 className="text-lg font-semibold">Recruiter Panel</h3>

      <div className="flex items-center gap-4">
        <span className="text-sm text-gray-600 capitalize">
          {auth?.role}
        </span>

        <button
          onClick={handleLogout}
          className="text-sm bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Navbar;
