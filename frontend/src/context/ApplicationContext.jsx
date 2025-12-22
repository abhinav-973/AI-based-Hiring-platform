import { createContext, useContext, useEffect, useState } from "react";

const ApplicationContext = createContext();

const STORAGE_KEY = "applications";

export const ApplicationProvider = ({ children }) => {
  const [applications, setApplications] = useState(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(applications));
  }, [applications]);

  const applyForJob = (job) => {
    setApplications((prev) => [
      ...prev,
      {
        id: Date.now(),
        jobTitle: job.title,
        status: "Pending",
      },
    ]);
  };

  return (
    <ApplicationContext.Provider
      value={{ applications, applyForJob }}
    >
      {children}
    </ApplicationContext.Provider>
  );
};

export const useApplications = () =>
  useContext(ApplicationContext);
