import React, { useContext } from 'react'
import { DashboardContext } from '../context/DashboardContext'

const Reports = () => {
    const {metrics} = useContext(DashboardContext)
  return (
 <div>
      <h2>📑 Reports Page</h2>
   <div
         style={{
          display: "flex",
          gap: "20px",
          marginTop: "20px",
          flexWrap: "wrap",
        }}
      >
          <p title='Total Records'> {metrics.totalRecords}</p>
      <p>Approved: {metrics.approved}</p>
      <p>Rejected: {metrics.rejected}</p>
      <p>Needs Review: {metrics.review}</p>

        </div>
    
    </div>
  )
}

export default Reports