import { useJobs } from "../../context/JobContext";


const JobTable = () => {
  const { jobs } = useJobs();

  return (
    <div className="mt-10 bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold mb-4">Job Listings</h3>

      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="border-b">
            <th className="pb-2">Job Title</th>
            <th className="pb-2">Applicants</th>
            <th className="pb-2">Status</th>
          </tr>
        </thead>

        <tbody>
          {jobs.map((job) => (
            <tr key={job.id} className="border-b last:border-none">
              <td className="py-3">{job.title}</td>
              <td>{job.applicants}</td>
              <td>
                <span
                  className={`px-3 py-1 rounded-full text-sm ${
                    job.status === "Open"
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {job.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default JobTable;
