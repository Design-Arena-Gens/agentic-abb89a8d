'use client'

import { useState } from 'react'
import { Shield, Zap, Target, TrendingUp, Clock, DollarSign, Search, AlertTriangle } from 'lucide-react'
import ScanInterface from '@/components/ScanInterface'
import Statistics from '@/components/Statistics'
import VulnerabilityList from '@/components/VulnerabilityList'

export default function Home() {
  const [activeTab, setActiveTab] = useState<'scan' | 'results' | 'stats'>('scan')

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <header className="border-b border-purple-500/20 bg-black/40 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Shield className="w-10 h-10 text-purple-400" />
              <div>
                <h1 className="text-3xl font-bold text-white">IDOR Hunter</h1>
                <p className="text-sm text-purple-300">AI-Powered Vulnerability Discovery</p>
              </div>
            </div>
            <div className="flex gap-6 text-sm">
              <div className="flex items-center gap-2 text-green-400">
                <Zap className="w-4 h-4" />
                <span className="font-semibold">98% Accuracy</span>
              </div>
              <div className="flex items-center gap-2 text-blue-400">
                <Clock className="w-4 h-4" />
                <span className="font-semibold">&lt;2% False Positives</span>
              </div>
              <div className="flex items-center gap-2 text-yellow-400">
                <DollarSign className="w-4 h-4" />
                <span className="font-semibold">€1.5K Avg Payout</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        {/* Key Metrics Banner */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <MetricCard
            icon={<Target className="w-6 h-6" />}
            title="Target Focus"
            value="IDOR & Auth Bypass"
            subtitle="85% of web API bounties"
            color="purple"
          />
          <MetricCard
            icon={<TrendingUp className="w-6 h-6" />}
            title="Growth Rate"
            value="Fastest Growing"
            subtitle="HackerOne & Intigriti"
            color="green"
          />
          <MetricCard
            icon={<Zap className="w-6 h-6" />}
            title="Speed Mode"
            value="80% Threshold"
            subtitle="Rapid vulnerability detection"
            color="blue"
          />
          <MetricCard
            icon={<Search className="w-6 h-6" />}
            title="Detection Method"
            value="Content-Based"
            subtitle="Superior to brute-force"
            color="yellow"
          />
        </div>

        {/* Navigation Tabs */}
        <div className="flex gap-2 mb-6">
          <TabButton
            active={activeTab === 'scan'}
            onClick={() => setActiveTab('scan')}
            icon={<Search className="w-4 h-4" />}
            label="New Scan"
          />
          <TabButton
            active={activeTab === 'results'}
            onClick={() => setActiveTab('results')}
            icon={<AlertTriangle className="w-4 h-4" />}
            label="Vulnerabilities"
          />
          <TabButton
            active={activeTab === 'stats'}
            onClick={() => setActiveTab('stats')}
            icon={<TrendingUp className="w-4 h-4" />}
            label="Statistics"
          />
        </div>

        {/* Content Area */}
        <div className="bg-black/40 backdrop-blur-sm rounded-lg border border-purple-500/20 p-6">
          {activeTab === 'scan' && <ScanInterface />}
          {activeTab === 'results' && <VulnerabilityList />}
          {activeTab === 'stats' && <Statistics />}
        </div>

        {/* Framework Overview */}
        <div className="mt-8 bg-black/40 backdrop-blur-sm rounded-lg border border-purple-500/20 p-6">
          <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
            <Shield className="w-6 h-6 text-purple-400" />
            Framework Overview
          </h2>
          <div className="grid md:grid-cols-2 gap-6 text-gray-300">
            <div>
              <h3 className="text-lg font-semibold text-purple-300 mb-2">Why IDOR & Auth Bypass?</h3>
              <ul className="space-y-2 text-sm">
                <li>• Fastest growing vulnerability category</li>
                <li>• 85% of bounties target web APIs</li>
                <li>• Average payout: €1.5K per finding</li>
                <li>• Low competition vs XSS/SQLi</li>
                <li>• Speed critical: first submission wins</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-purple-300 mb-2">Core Value Proposition</h3>
              <ul className="space-y-2 text-sm">
                <li>• 98% accuracy with content-based detection</li>
                <li>• &lt;2% false positive rate</li>
                <li>• Superior to Burp Suite brute-force</li>
                <li>• Speed Mode: 80% confidence threshold</li>
                <li>• AI-powered vulnerability discovery</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

function MetricCard({ icon, title, value, subtitle, color }: {
  icon: React.ReactNode
  title: string
  value: string
  subtitle: string
  color: 'purple' | 'green' | 'blue' | 'yellow'
}) {
  const colorClasses = {
    purple: 'from-purple-500/20 to-purple-600/20 border-purple-500/30 text-purple-300',
    green: 'from-green-500/20 to-green-600/20 border-green-500/30 text-green-300',
    blue: 'from-blue-500/20 to-blue-600/20 border-blue-500/30 text-blue-300',
    yellow: 'from-yellow-500/20 to-yellow-600/20 border-yellow-500/30 text-yellow-300',
  }

  return (
    <div className={`bg-gradient-to-br ${colorClasses[color]} border rounded-lg p-4 backdrop-blur-sm`}>
      <div className="flex items-center gap-2 mb-2">
        {icon}
        <span className="text-xs font-semibold uppercase opacity-80">{title}</span>
      </div>
      <div className="text-xl font-bold text-white mb-1">{value}</div>
      <div className="text-xs opacity-70">{subtitle}</div>
    </div>
  )
}

function TabButton({ active, onClick, icon, label }: {
  active: boolean
  onClick: () => void
  icon: React.ReactNode
  label: string
}) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all ${
        active
          ? 'bg-purple-600 text-white shadow-lg shadow-purple-500/50'
          : 'bg-black/40 text-gray-400 hover:bg-black/60 hover:text-gray-200'
      }`}
    >
      {icon}
      {label}
    </button>
  )
}
