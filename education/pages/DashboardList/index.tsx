

import { DashboardProvider } from '@/Component/context/DashboardContext'
import Dashboard from '@/Component/Dashboard/Dashboard'
import Reports from '@/Component/Reports/Reports'
import React from 'react'

const Dashboardpage = () => {
  return (
    <DashboardProvider>
        <Reports/>
    </DashboardProvider>
  )
}

export default Dashboardpage