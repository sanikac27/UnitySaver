import React, { useState } from 'react';
import { LineChart, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Line } from 'recharts';
import { AlertTriangle, Users, PiggyBank, Clock, Activity } from 'lucide-react';
import '../../styles/components/realtimetracking.css';

const RealTimeTracking = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('24h');

  const groupActivities = [
    { timestamp: '00:00', totalSavings: 25000, memberContributions: 2000, expectedAmount: 23000 },
    { timestamp: '04:00', totalSavings: 27000, memberContributions: 2500, expectedAmount: 24000 },
    { timestamp: '08:00', totalSavings: 45000, memberContributions: 18000, expectedAmount: 26000 },
    { timestamp: '12:00', totalSavings: 48000, memberContributions: 3000, expectedAmount: 28000 },
    { timestamp: '16:00', totalSavings: 65000, memberContributions: 17000, expectedAmount: 30000 },
    { timestamp: '20:00', totalSavings: 68000, memberContributions: 3000, expectedAmount: 32000 },
    { timestamp: '24:00', totalSavings: 70000, memberContributions: 2000, expectedAmount: 34000 }
  ];

  const anomalies = [
    {
      id: 1,
      time: '08:00',
      type: 'Unusual Contribution Pattern',
      status: 'pending',
      description: 'Large contribution spike detected - 7x above average',
      memberInfo: 'Multiple members made larger than usual deposits'
    },
    {
      id: 2,
      time: '16:00',
      type: 'Irregular Group Activity',
      status: 'failed',
      description: 'Sudden withdrawal attempt detected outside normal patterns',
      memberInfo: 'Attempted withdrawal from inactive member account'
    }
  ];

  const metrics = [
    {
      title: 'Active Members',
      value: '45/50',
      icon: <Users className="h-6 w-6" />,
      description: '+2 this week'
    },
    {
      title: 'Total Group Savings',
      value: '₦70,000',
      icon: <PiggyBank className="h-6 w-6" />,
      description: '+₦15,000 today'
    },
    {
      title: 'Last Activity',
      value: '2 mins ago',
      icon: <Clock className="h-6 w-6" />,
      description: 'Contribution made'
    },
    {
      title: 'Group Health',
      value: '95%',
      icon: <Activity className="h-6 w-6" />,
      description: 'Above average'
    }
  ];

  return (
    <div className="audit-dashboard">
      {/* Stats Grid */}
      <div className="audit-stats-grid">
        {metrics.map((metric, index) => (
          <div key={index} className="audit-card">
            <div className="audit-content">
              <div className="audit-icon-wrapper">
                {metric.icon}
              </div>
              <h3 className="audit-title">{metric.title}</h3>
              <p className="audit-value">{metric.value}</p>
              <span className="audit-description">{metric.description}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Charts Grid */}
      <div className="audit-charts-grid">
        {/* Main Chart */}
        <div className="audit-chart-card">
          <h2 className="audit-chart-title">Group Savings Monitoring</h2>
          <div className="audit-chart-container">
            <LineChart width={600} height={300} data={groupActivities}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="timestamp" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line 
                type="monotone" 
                dataKey="totalSavings" 
                stroke="#22d3ee" 
                strokeWidth={2}
                dot={{ fill: '#22d3ee', r: 4 }}
                name="Total Savings"
              />
              <Line 
                type="monotone" 
                dataKey="memberContributions" 
                stroke="#8b5cf6" 
                strokeWidth={2}
                dot={{ fill: '#8b5cf6', r: 4 }}
                name="Member Contributions"
              />
              <Line 
                type="monotone" 
                dataKey="expectedAmount" 
                stroke="#f59e0b" 
                strokeWidth={2}
                strokeDasharray="5 5"
                dot={false}
                name="Expected Growth"
              />
            </LineChart>
          </div>
        </div>

        {/* Anomalies Table */}
        <div className="audit-chart-card">
          <h2 className="audit-chart-title">Detected Anomalies</h2>
          <div className="audit-table-container">
            <table className="audit-table">
              <thead>
                <tr>
                  <th>Time</th>
                  <th>Type</th>
                  <th>Status</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                {anomalies.map((anomaly) => (
                  <tr key={anomaly.id}>
                    <td>{anomaly.time}</td>
                    <td>{anomaly.type}</td>
                    <td>
                      <span className={`audit-status status-${anomaly.status}`}>
                        {anomaly.status}
                      </span>
                    </td>
                    <td>{anomaly.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RealTimeTracking;