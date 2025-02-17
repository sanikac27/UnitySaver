import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { 
  LineChart, Line, BarChart, Bar, PieChart, Pie, Cell,
  XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer, 
  Legend, Area, AreaChart 
} from 'recharts';
import { 
  ClipboardCheck, AlertOctagon, Activity, Clock,
  TrendingUp, CheckCircle, XCircle, AlertTriangle 
} from 'lucide-react';
import '../../styles/components/automatedauditing.css';

const EnhancedAuditDashboard = () => {
  // Data states
  const auditTrendData = [
    { month: 'Jan', completed: 85, pending: 10, failed: 5, automatedChecks: 120, manualChecks: 30 },
    { month: 'Feb', completed: 88, pending: 8, failed: 4, automatedChecks: 135, manualChecks: 25 },
    { month: 'Mar', completed: 92, pending: 6, failed: 2, automatedChecks: 150, manualChecks: 20 },
    { month: 'Apr', completed: 90, pending: 7, failed: 3, automatedChecks: 145, manualChecks: 22 },
    { month: 'May', completed: 91, pending: 6, failed: 3, automatedChecks: 155, manualChecks: 18 }
  ];

  const dailyMetrics = [
    { day: 'Mon', completionRate: 88, automationRate: 82, errorRate: 3 },
    { day: 'Tue', completionRate: 92, automationRate: 85, errorRate: 2 },
    { day: 'Wed', completionRate: 89, automationRate: 83, errorRate: 4 },
    { day: 'Thu', completionRate: 93, automationRate: 86, errorRate: 2 },
    { day: 'Fri', completionRate: 95, automationRate: 88, errorRate: 1 },
    { day: 'Sat', completionRate: 91, automationRate: 84, errorRate: 3 },
    { day: 'Sun', completionRate: 94, automationRate: 87, errorRate: 2 }
  ];

  const auditTypeDistribution = [
    { name: 'Automated', value: 75, color: '#38bdf8' },
    { name: 'Semi-automated', value: 15, color: '#818cf8' },
    { name: 'Manual', value: 10, color: '#c084fc' }
  ];

  const stats = [
    {
      title: 'Total Audits',
      value: '1,247',
      change: '+12%',
      icon: ClipboardCheck,
      description: 'Last 30 days'
    },
    {
      title: 'Automation Rate',
      value: '85%',
      change: '+5%',
      icon: Activity,
      description: 'Above target'
    },
    {
      title: 'Average Time',
      value: '2.3h',
      change: '-15%',
      icon: Clock,
      description: 'Per audit'
    },
    {
      title: 'Critical Issues',
      value: '8',
      change: '-3',
      icon: AlertTriangle,
      description: 'Need attention'
    }
  ];

  const StatsSection = () => (
    <div className="stats-grid">
      {stats.map((stat, index) => (
        <Card key={index} className="stat-card">
          <CardContent className="stat-content">
            <div className="stat-header">
              <div className="stat-icon">
                <stat.icon className="icon" />
              </div>
              <span className={`stat-change ${
                stat.change.startsWith('+') ? 'positive' : 'negative'
              }`}>
                {stat.change}
              </span>
            </div>
            <div className="stat-details">
              <p className="stat-title">{stat.title}</p>
              <p className="stat-value">{stat.value}</p>
              <p className="stat-description">{stat.description}</p>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );

  const AuditDistributionChart = () => (
    <Card className="chart-card">
      <CardHeader>
        <CardTitle className="chart-title">
          Audit Type Distribution
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="chart-container">
          <ResponsiveContainer>
            <PieChart>
              <Pie
                data={auditTypeDistribution}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                paddingAngle={5}
                dataKey="value"
              >
                {auditTypeDistribution.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip content={CustomTooltip} />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );

  const CompletionRateChart = () => (
    <Card className="chart-card">
      <CardHeader>
        <CardTitle className="chart-title">
          Completion & Automation Rates
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="chart-container">
          <ResponsiveContainer>
            <AreaChart data={dailyMetrics}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip content={CustomTooltip} />
              <Legend />
              <Area
                type="monotone"
                dataKey="completionRate"
                name="Completion Rate"
                stroke="#38bdf8"
                fill="#38bdf8"
                fillOpacity={0.2}
              />
              <Area
                type="monotone"
                dataKey="automationRate"
                name="Automation Rate"
                stroke="#818cf8"
                fill="#818cf8"
                fillOpacity={0.2}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );

  const TrendAnalysisChart = () => (
    <Card className="chart-card">
      <CardHeader>
        <CardTitle className="chart-title">
          Audit Trends Analysis
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="chart-container">
          <ResponsiveContainer>
            <BarChart data={auditTrendData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip content={CustomTooltip} />
              <Legend />
              <Bar dataKey="automatedChecks" name="Automated" fill="#38bdf8" />
              <Bar dataKey="manualChecks" name="Manual" fill="#818cf8" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip">
          <p className="tooltip-label">{label}</p>
          {payload.map((item, index) => (
            <p key={index} className="tooltip-value" style={{ color: item.color }}>
              {`${item.name}: ${item.value}`}
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <div className="dashboard">
      <div className="dashboard-content">
        <StatsSection />
        <div className="charts-grid">
          <AuditDistributionChart />
          <CompletionRateChart />
          <TrendAnalysisChart />
        </div>
      </div>
    </div>
  );
};

export default EnhancedAuditDashboard;