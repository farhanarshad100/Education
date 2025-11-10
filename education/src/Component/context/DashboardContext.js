import React, { createContext, useEffect, useState } from "react";
export const DashboardContext = createContext();
export const DashboardProvider = ({ children }) => {
  const [metrics, setMetrics] = useState({
    totalRecords: 0,
    approved: 0,
    rejected: 0,
    review: 0,
  });
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setMetrics({
          totalRecords: data.length,
          approved: 5,
          rejected: 3,
          review: data.length - 8,
        });
      });
  }, []);

  return (
    <DashboardContext.Provider value={{ metrics, setMetrics }}>
      {children}
    </DashboardContext.Provider>
  );
};
