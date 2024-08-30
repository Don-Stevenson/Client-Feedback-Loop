import React from 'react'
import dynamic from 'next/dynamic'

const DynamicErrorBoundary = dynamic(
  () => import('../components/ErrorBoundary'),
  {
    ssr: false,
  }
)

const DynamicDashboard = dynamic(() => import('../components/Dashboard'), {
  ssr: false,
})

export default function Home() {
  return (
    <DynamicErrorBoundary>
      <DynamicDashboard />
    </DynamicErrorBoundary>
  )
}
