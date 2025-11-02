'use client'

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line } from 'recharts'
import { TrendingUp, Target, Award, Activity } from 'lucide-react'

const vulnerabilityData = [
  { name: 'IDOR', count: 45, payout: 67500 },
  { name: 'Auth Bypass', count: 28, payout: 52500 },
  { name: 'Access Control', count: 32, payout: 48000 },
  { name: 'Authorization', count: 18, payout: 27000 },
]

const severityData = [
  { name: 'Critical', value: 12, color: '#ef4444' },
  { name: 'High', value: 45, color: '#f97316' },
  { name: 'Medium', value: 38, color: '#eab308' },
  { name: 'Low', value: 28, color: '#3b82f6' },
]

const trendData = [
  { month: 'Jan', findings: 15, earnings: 22500 },
  { month: 'Feb', findings: 22, earnings: 33000 },
  { month: 'Mar', findings: 28, earnings: 42000 },
  { month: 'Apr', findings: 35, earnings: 52500 },
  { month: 'May', findings: 42, earnings: 63000 },
  { month: 'Jun', findings: 48, earnings: 72000 },
]

export default function Statistics() {
  const totalFindings = vulnerabilityData.reduce((sum, item) => sum + item.count, 0)
  const totalEarnings = vulnerabilityData.reduce((sum, item) => sum + item.payout, 0)
  const avgPayout = totalEarnings / totalFindings

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-white flex items-center gap-2">
        <TrendingUp className="w-6 h-6 text-purple-400" />
        Performance Statistics
      </h2>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <StatCard
          icon={<Target className="w-6 h-6" />}
          label="Total Findings"
          value={totalFindings.toString()}
          color="purple"
        />
        <StatCard
          icon={<Award className="w-6 h-6" />}
          label="Total Earnings"
          value={`€${(totalEarnings / 1000).toFixed(1)}K`}
          color="green"
        />
        <StatCard
          icon={<Activity className="w-6 h-6" />}
          label="Avg Payout"
          value={`€${avgPayout.toFixed(0)}`}
          color="blue"
        />
        <StatCard
          icon={<TrendingUp className="w-6 h-6" />}
          label="Success Rate"
          value="98%"
          color="yellow"
        />
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Vulnerability Distribution */}
        <div className="bg-black/60 border border-purple-500/20 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-white mb-4">Vulnerability Types</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={vulnerabilityData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
              <XAxis dataKey="name" stroke="#9ca3af" />
              <YAxis stroke="#9ca3af" />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#1f2937',
                  border: '1px solid #4b5563',
                  borderRadius: '8px',
                }}
              />
              <Bar dataKey="count" fill="#a855f7" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Severity Distribution */}
        <div className="bg-black/60 border border-purple-500/20 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-white mb-4">Severity Distribution</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={severityData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
              >
                {severityData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{
                  backgroundColor: '#1f2937',
                  border: '1px solid #4b5563',
                  borderRadius: '8px',
                }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Trend Over Time */}
        <div className="bg-black/60 border border-purple-500/20 rounded-lg p-6 lg:col-span-2">
          <h3 className="text-lg font-semibold text-white mb-4">Findings & Earnings Trend</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={trendData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
              <XAxis dataKey="month" stroke="#9ca3af" />
              <YAxis yAxisId="left" stroke="#9ca3af" />
              <YAxis yAxisId="right" orientation="right" stroke="#9ca3af" />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#1f2937',
                  border: '1px solid #4b5563',
                  borderRadius: '8px',
                }}
              />
              <Line
                yAxisId="left"
                type="monotone"
                dataKey="findings"
                stroke="#a855f7"
                strokeWidth={2}
                dot={{ fill: '#a855f7' }}
              />
              <Line
                yAxisId="right"
                type="monotone"
                dataKey="earnings"
                stroke="#10b981"
                strokeWidth={2}
                dot={{ fill: '#10b981' }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Insights */}
      <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/30 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
          <Activity className="w-5 h-5 text-purple-400" />
          Key Insights
        </h3>
        <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-300">
          <div>
            <div className="font-semibold text-purple-300 mb-1">Performance Highlights</div>
            <ul className="space-y-1">
              <li>• 98% detection accuracy maintained</li>
              <li>• &lt;2% false positive rate achieved</li>
              <li>• 48 vulnerabilities found this month</li>
              <li>• €72K earned in June 2024</li>
            </ul>
          </div>
          <div>
            <div className="font-semibold text-purple-300 mb-1">Recommendations</div>
            <ul className="space-y-1">
              <li>• Focus on Auth Bypass for higher payouts</li>
              <li>• Use Speed Mode for initial scans</li>
              <li>• Submit findings within 24 hours</li>
              <li>• Target APIs with active bounty programs</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

function StatCard({ icon, label, value, color }: {
  icon: React.ReactNode
  label: string
  value: string
  color: 'purple' | 'green' | 'blue' | 'yellow'
}) {
  const colorClasses = {
    purple: 'text-purple-400',
    green: 'text-green-400',
    blue: 'text-blue-400',
    yellow: 'text-yellow-400',
  }

  return (
    <div className="bg-black/60 border border-purple-500/20 rounded-lg p-4">
      <div className={`mb-2 ${colorClasses[color]}`}>{icon}</div>
      <div className="text-2xl font-bold text-white mb-1">{value}</div>
      <div className="text-sm text-gray-400">{label}</div>
    </div>
  )
}
