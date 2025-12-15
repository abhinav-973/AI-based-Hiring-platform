import StatusCard from "../components/Dashboard/Statuscard";
import JobTable from "../components/Dashboard/JobTable";
import CandidateTable from "../components/Dashboard/CandidateTable";

const RecruiterDashboard = () => {
  return (
    <>
      <h2 className="text-xl font-semibold mb-6">
        Recruiter Dashboard
      </h2>

      <div className="flex gap-6 mb-10">
        <StatusCard title="Total Jobs" value="5" />
        <StatusCard title="Candidates" value="120" />
        <StatusCard title="Shortlisted" value="30" />
      </div>

      <JobTable />
      <CandidateTable />
    </>
  );
};

export default RecruiterDashboard;
