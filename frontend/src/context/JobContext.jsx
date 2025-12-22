import { createContext, useContext, useEffect, useState } from "react";

const JobContext = createContext();

const STORAGE_KEY = "jobs";

export const JobProvider = ({ children }) => {
  // Load jobs from localStorage initially
  const [jobs, setJobs] = useState(() => {
    const storedJobs = localStorage.getItem(STORAGE_KEY);
    return storedJobs
      ? JSON.parse(storedJobs)
      : [
          {
            id: 1,
            title: "Frontend Developer",
            applicants: 40,
            status: "Open",
          },
          {
            id: 2,
            title: "Backend Developer",
            applicants: 25,
            status: "Open",
          },
        ];
  });

  // Save jobs whenever they change
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(jobs));
  }, [jobs]);

  const addJob = (job) => {
    setJobs((prev) => [
      ...prev,
      {
        id: Date.now(),
        title: job.title,
        applicants: 0,
        status: "Open",
      },
    ]);
  };

  return (
    <JobContext.Provider value={{ jobs, addJob }}>
      {children}
    </JobContext.Provider>
  );
};

export const useJobs = () => useContext(JobContext);
