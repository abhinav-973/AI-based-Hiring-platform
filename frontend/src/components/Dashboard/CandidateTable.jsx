const CandidateTable = () => {
  const candidates = [
    {
      id: 1,
      name: "Amit Sharma",
      role: "Frontend Developer",
      score: 85,
      status: "Shortlisted",
    },
    {
      id: 2,
      name: "Priya Verma",
      role: "Backend Developer",
      score: 72,
      status: "Pending",
    },
    {
      id: 3,
      name: "Rahul Singh",
      role: "ML Engineer",
      score: 60,
      status: "Rejected",
    },
  ];

  const statusStyles = {
    Shortlisted: "bg-green-100 text-green-700",
    Pending: "bg-yellow-100 text-yellow-700",
    Rejected: "bg-red-100 text-red-700",
  };

  return (
    <div className="mt-10 bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold mb-4">Candidates</h3>

      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="border-b text-gray-600">
            <th className="pb-2">Name</th>
            <th className="pb-2">Applied Role</th>
            <th className="pb-2">AI Score</th>
            <th className="pb-2">Status</th>
          </tr>
        </thead>

        <tbody>
          {candidates.map((c) => (
            <tr key={c.id} className="border-b last:border-none">
              <td className="py-3">{c.name}</td>
              <td>{c.role}</td>
              <td>
                <span
                  className={`font-semibold ${
                    c.score >= 80
                      ? "text-green-600"
                      : c.score >= 65
                      ? "text-yellow-600"
                      : "text-red-600"
                  }`}
                >
                  {c.score}
                </span>
              </td>
              <td>
                <span
                  className={`px-3 py-1 rounded-full text-sm ${statusStyles[c.status]}`}
                >
                  {c.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CandidateTable;
