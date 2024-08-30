'use client'

import React from 'react'
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts'

const projectData = [
  {
    week: 'Week 1',
    clientSatisfaction: 4.2,
    teamProductivity: 3.8,
    codeQuality: 4.0,
  },
  {
    week: 'Week 2',
    clientSatisfaction: 4.5,
    teamProductivity: 4.0,
    codeQuality: 4.2,
  },
  {
    week: 'Week 3',
    clientSatisfaction: 4.3,
    teamProductivity: 4.2,
    codeQuality: 4.5,
  },
  {
    week: 'Week 4',
    clientSatisfaction: 4.7,
    teamProductivity: 4.5,
    codeQuality: 4.6,
  },
  {
    week: 'Week 5',
    clientSatisfaction: 4.8,
    teamProductivity: 4.6,
    codeQuality: 4.7,
  },
  {
    week: 'Week 6',
    clientSatisfaction: 4.9,
    teamProductivity: 4.8,
    codeQuality: 4.8,
  },
]

const taskCompletionData = [
  { name: 'Week 1', completed: 20, remaining: 10 },
  { name: 'Week 2', completed: 28, remaining: 7 },
  { name: 'Week 3', completed: 35, remaining: 5 },
  { name: 'Week 4', completed: 40, remaining: 8 },
  { name: 'Week 5', completed: 45, remaining: 3 },
  { name: 'Week 6', completed: 50, remaining: 0 },
]

const Dashboard = () => {
  return (
    <div className="w-full min-h-screen bg-white p-8 md:p-12 lg:p-16">
      <h1 className="text-4xl font-bold text-[#7293a0] mb-8">
        Project Feedback Dashboard
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-3 space-y-8">
          {/* Project Metrics Chart */}
          <div className="bg-white border border-[#d8ddef] rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-semibold text-[#45b69c] mb-4">
              Project X - Project Metrics Over Time
            </h2>
            <ResponsiveContainer width="100%" height={400}>
              <LineChart data={projectData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#d8ddef" />
                <XAxis dataKey="week" stroke="#a0a4b8" />
                <YAxis stroke="#a0a4b8" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: 'white',
                    border: '1px solid #d8ddef',
                  }}
                />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="clientSatisfaction"
                  stroke="orange"
                  strokeWidth={2}
                />
                <Line
                  type="monotone"
                  dataKey="teamProductivity"
                  stroke="red"
                  strokeWidth={2}
                />
                <Line
                  type="monotone"
                  dataKey="codeQuality"
                  stroke="#7293a0"
                  strokeWidth={2}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Task Completion Chart */}
          <div className="bg-white border border-[#d8ddef] rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-semibold text-[#45b69c] mb-4">
              Project X - Task Completion Status
            </h2>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={taskCompletionData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#d8ddef" />
                <XAxis dataKey="name" stroke="#a0a4b8" />
                <YAxis stroke="#a0a4b8" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: 'white',
                    border: '1px solid #d8ddef',
                  }}
                />
                <Legend />
                <Bar dataKey="completed" stackId="a" fill="#21d19f" />
                <Bar dataKey="remaining" stackId="a" fill="#7293a0" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Summary Cards */}
        <div className="lg:col-span-1 space-y-6">
          <SummaryCard title="Client Satisfaction" value={4.9} change={0.1} />
          <SummaryCard title="Team Productivity" value={4.8} change={0.2} />
          <SummaryCard title="Code Quality" value={4.8} change={0.1} />
        </div>
      </div>
    </div>
  )
}

const SummaryCard = ({ title, value, change }) => {
  const isPositive = change >= 0
  return (
    <div className="bg-white border border-[#d8ddef] rounded-lg shadow-lg p-6">
      <h3 className="text-xl font-semibold text-[#7293a0] mb-2">{title}</h3>
      <p className="text-3xl font-bold text-[#45b69c]">{value.toFixed(1)}</p>
      <p
        className={`text-sm ${isPositive ? 'text-[#21d19f]' : 'text-red-500'}`}
      >
        {isPositive ? '↑' : '↓'} {Math.abs(change).toFixed(1)} from last week
      </p>
    </div>
  )
}

export default Dashboard
