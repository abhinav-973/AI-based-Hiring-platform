import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const linkClass = ({ isActive }) =>
    `block px-3 py-2 rounded ${
      isActive ? "bg-slate-700 text-blue-400" : "text-white"
    }`;

  return (
    <div className="w-56 bg-slate-800 text-white p-6 min-h-screen">
      <h2 className="text-xl font-bold mb-8">Talent Hire</h2>

      <nav className="space-y-2">
        <NavLink to="/recruiter" end className={linkClass}>
          Dashboard
        </NavLink>

        <NavLink to="/recruiter/create-job" className={linkClass}>
          Create Job
        </NavLink>

        <NavLink to="/recruiter/candidates" className={linkClass}>
          Candidates
        </NavLink>
      </nav>
    </div>
  );
};

export default Sidebar;
