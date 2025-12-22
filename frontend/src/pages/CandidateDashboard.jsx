import { useJobs } from "../context/JobContext";
import { useApplications } from "../context/ApplicationContext";

const CandidateDashboard = () => {
  const { jobs } = useJobs();
  const { applications, applyForJob } = useApplications();

  const hasApplied = (jobTitle) => {
    return applications.some(
      (app) => app.jobTitle === jobTitle
    );
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-6">
        Available Jobs
      </h2>

      <div className="space-y-4">
        {jobs.map((job) => {
          const applied = hasApplied(job.title);

          return (
            <div
              key={job.id}
              className="bg-white p-6 rounded-lg shadow flex justify-between items-center"
            >
              <div>
                <h3 className="font-semibold text-lg">
                  {job.title}
                </h3>
                <p className="text-sm text-gray-500">
                  Status: {job.status}
                </p>
              </div>

              <button
                onClick={() => applyForJob(job)}
                disabled={applied}
                className={`px-4 py-2 rounded text-white ${
                  applied
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-blue-600 hover:bg-blue-700"
                }`}
              >
                {applied ? "Applied" : "Apply"}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CandidateDashboard;
