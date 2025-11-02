'use client'

import { useState } from 'react'
import { Play, Settings, FileText, Globe } from 'lucide-react'

export default function ScanInterface() {
  const [targetUrl, setTargetUrl] = useState('')
  const [scanMode, setScanMode] = useState<'speed' | 'thorough'>('speed')
  const [scanning, setScanning] = useState(false)
  const [progress, setProgress] = useState(0)

  const handleScan = () => {
    setScanning(true)
    setProgress(0)

    // Simulate scanning progress
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval)
          setScanning(false)
          return 100
        }
        return prev + 10
      })
    }, 500)
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
          <Globe className="w-6 h-6 text-purple-400" />
          Configure Scan Target
        </h2>

        <div className="space-y-4">
          {/* Target URL */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Target API URL
            </label>
            <input
              type="text"
              value={targetUrl}
              onChange={(e) => setTargetUrl(e.target.value)}
              placeholder="https://api.example.com"
              className="w-full px-4 py-3 bg-black/60 border border-purple-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20"
            />
          </div>

          {/* Scan Mode */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Scan Mode
            </label>
            <div className="grid grid-cols-2 gap-4">
              <button
                onClick={() => setScanMode('speed')}
                className={`p-4 rounded-lg border-2 transition-all ${
                  scanMode === 'speed'
                    ? 'bg-purple-600/20 border-purple-500 text-white'
                    : 'bg-black/40 border-gray-700 text-gray-400 hover:border-gray-600'
                }`}
              >
                <div className="font-semibold mb-1">Speed Mode</div>
                <div className="text-xs opacity-80">80% confidence threshold</div>
                <div className="text-xs opacity-80">Faster results, good accuracy</div>
              </button>
              <button
                onClick={() => setScanMode('thorough')}
                className={`p-4 rounded-lg border-2 transition-all ${
                  scanMode === 'thorough'
                    ? 'bg-purple-600/20 border-purple-500 text-white'
                    : 'bg-black/40 border-gray-700 text-gray-400 hover:border-gray-600'
                }`}
              >
                <div className="font-semibold mb-1">Thorough Mode</div>
                <div className="text-xs opacity-80">98% accuracy, &lt;2% FP</div>
                <div className="text-xs opacity-80">Complete analysis</div>
              </button>
            </div>
          </div>

          {/* Vulnerability Types */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Vulnerability Types
            </label>
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-gray-300 cursor-pointer">
                <input type="checkbox" defaultChecked className="w-4 h-4 rounded" />
                <span>IDOR (Insecure Direct Object Reference)</span>
              </label>
              <label className="flex items-center gap-2 text-gray-300 cursor-pointer">
                <input type="checkbox" defaultChecked className="w-4 h-4 rounded" />
                <span>Authentication Bypass</span>
              </label>
              <label className="flex items-center gap-2 text-gray-300 cursor-pointer">
                <input type="checkbox" className="w-4 h-4 rounded" />
                <span>Broken Access Control</span>
              </label>
            </div>
          </div>

          {/* Start Scan Button */}
          <button
            onClick={handleScan}
            disabled={!targetUrl || scanning}
            className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 disabled:from-gray-700 disabled:to-gray-700 text-white font-semibold py-4 rounded-lg flex items-center justify-center gap-2 transition-all shadow-lg hover:shadow-purple-500/50"
          >
            <Play className="w-5 h-5" />
            {scanning ? 'Scanning...' : 'Start Vulnerability Scan'}
          </button>

          {/* Progress Bar */}
          {scanning && (
            <div className="space-y-2">
              <div className="flex justify-between text-sm text-gray-400">
                <span>Scanning in progress...</span>
                <span>{progress}%</span>
              </div>
              <div className="w-full bg-gray-800 rounded-full h-2 overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-purple-600 to-pink-600 transition-all duration-300"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Quick Tips */}
      <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4">
        <div className="flex gap-2 mb-2">
          <FileText className="w-5 h-5 text-blue-400 flex-shrink-0" />
          <h3 className="font-semibold text-blue-300">Quick Tips</h3>
        </div>
        <ul className="text-sm text-gray-300 space-y-1 ml-7">
          <li>• Use Speed Mode for initial reconnaissance</li>
          <li>• Switch to Thorough Mode before submission</li>
          <li>• First to submit wins - duplicates earn €0</li>
          <li>• Focus on authenticated endpoints for better ROI</li>
        </ul>
      </div>
    </div>
  )
}
