import { DashboardComponent } from '@/components/dashboard-component'
import React, { Suspense } from 'react'

export default function Dashboard() {
    return (
        <Suspense>
            <DashboardComponent />
        </Suspense>
    )
}
