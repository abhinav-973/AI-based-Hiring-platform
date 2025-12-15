import { Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import RecruiterLayout from "../layouts/RecruiterLayout";
import RecruiterDashboard from "../pages/RecruiterDashboard";
import CreateJob from "../pages/CreateJob";
import CandidateDashboard from "../pages/CandidateDashboard";
import ProtectedRoute from "./ProtectedRoute";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />

      <Route
        path="/recruiter"
        element={
          <ProtectedRoute role="recruiter">
            <RecruiterLayout />
          </ProtectedRoute>
        }
      >
        <Route index element={<RecruiterDashboard />} />
        <Route path="create-job" element={<CreateJob />} />
        <Route path="candidates" element={<CandidateDashboard />} />
      </Route>

      <Route
        path="/candidate"
        element={
          <ProtectedRoute role="candidate">
            <CandidateDashboard />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};

export default AppRoutes;
