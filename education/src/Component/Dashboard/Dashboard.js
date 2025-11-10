import React, { useContext, useMemo } from 'react'


import MetricCard from './MetricCard'
import { DashboardContext } from '../context/DashboardContext';

const Dashboard = () => {
  const { metrics } = useContext(DashboardContext);
const totalReviewed = useMemo(
    () => metrics.approved + metrics.rejected,
    [metrics]
)

  return (
   <>
   <h2>📊 Dashboard Overview</h2>
    <div
         style={{
          display: "flex",
          gap: "20px",
          marginTop: "20px",
          flexWrap: "wrap",
        }}
      >
        <MetricCard title="Total Records" value={metrics.totalRecords} color="#3b82f6" />
        <MetricCard title="Approved" value={metrics.approved} color="#10b981" />
        <MetricCard title="Rejected" value={metrics.rejected} color="#ef4444" />
        <MetricCard title="Needs Review" value={metrics.review} color="#f59e0b" />
 
      </div>
 
   </>
  )
}

export default Dashboard