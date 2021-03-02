import React, { createContext, useEffect, useState } from "react";
export const JobsContext = createContext();
export const Jobs_Context = (props) => {
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    fetch("https://calm-shore-19939.herokuapp.com/jobs")
      .then((response) => response.json())
      .then((data) => {
        setJobs(data);
      });
  }, []);
  return (
    <JobsContext.Provider value={[jobs, setJobs]}>
      {props.children}
    </JobsContext.Provider>
  );
};
