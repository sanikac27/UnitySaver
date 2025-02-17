import React, { useState } from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell
} from 'recharts';
import {
  DollarSign, Users, AlertTriangle, CheckCircle,
  TrendingUp, ShieldCheck, Activity
} from 'lucide-react';

const LendingServices = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [loanApplication, setLoanApplication] = useState({
    fullName: '',
    email: '',
    phone: '',
    amount: '',
    purpose: '',
    duration: '',
  });
  const [applicationStatus, setApplicationStatus] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // Sample data
  const loanStats = [
    { month: 'Jan', disbursed: 45000, repaid: 38000, defaulted: 2000 },
    { month: 'Feb', disbursed: 52000, repaid: 43000, defaulted: 1800 },
    { month: 'Mar', disbursed: 58000, repaid: 49000, defaulted: 2200 },
    { month: 'Apr', disbursed: 61000, repaid: 52000, defaulted: 1500 },
    { month: 'May', disbursed: 65000, repaid: 57000, defaulted: 1900 },
    { month: 'Jun', disbursed: 70000, repaid: 62000, defaulted: 1700 },
  ];

  const riskData = [
    { name: 'Low Risk', value: 60 },
    { name: 'Medium Risk', value: 30 },
    { name: 'High Risk', value: 10 },
  ];

  const COLORS = ['#4ADE80', '#FB923C', '#EF4444'];

  const handleApplicationSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setApplicationStatus('success');
      setIsLoading(false);
      setLoanApplication({
        fullName: '',
        email: '',
        phone: '',
        amount: '',
        purpose: '',
        duration: '',
      });
    }, 1500);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLoanApplication(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const renderOverview = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-slate-800 p-4 rounded-lg">
          <div className="flex items-center gap-2 text-cyan-400 mb-2">
            <DollarSign className="w-5 h-5" />
            <h3 className="font-medium">Total Disbursed</h3>
          </div>
          <p className="text-2xl font-bold text-white">₹351,000</p>
        </div>
        <div className="bg-slate-800 p-4 rounded-lg">
          <div className="flex items-center gap-2 text-green-400 mb-2">
            <Users className="w-5 h-5" />
            <h3 className="font-medium">Active Loans</h3>
          </div>
          <p className="text-2xl font-bold text-white">284</p>
        </div>
        <div className="bg-slate-800 p-4 rounded-lg">
          <div className="flex items-center gap-2 text-yellow-400 mb-2">
            <AlertTriangle className="w-5 h-5" />
            <h3 className="font-medium">Default Rate</h3>
          </div>
          <p className="text-2xl font-bold text-white">3.2%</p>
        </div>
      </div>
      
      <div className="bg-slate-800 p-4 rounded-lg">
        <h3 className="text-lg font-medium text-white mb-4">Loan Performance</h3>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={loanStats}>
              <CartesianGrid strokeDasharray="3 3" stroke="#475569" />
              <XAxis dataKey="month" stroke="#94A3B8" />
              <YAxis stroke="#94A3B8" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#1E293B',
                  border: '1px solid #475569'
                }}
                labelStyle={{ color: '#E2E8F0' }}
              />
              <Line type="monotone" dataKey="disbursed" stroke="#22D3EE" strokeWidth={2} />
              <Line type="monotone" dataKey="repaid" stroke="#4ADE80" strokeWidth={2} />
              <Line type="monotone" dataKey="defaulted" stroke="#FB923C" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );

  const renderLoanApplication = () => (
    <div className="max-w-4xl mx-auto bg-slate-800 rounded-lg p-6">
      <h2 className="text-2xl font-bold text-white mb-6">Apply for a Loan</h2>
      <form onSubmit={handleApplicationSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="block text-sm font-medium text-slate-300">Full Name</label>
            <input
              type="text"
              name="fullName"
              value={loanApplication.fullName}
              onChange={handleInputChange}
              className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-2 text-white"
              required
            />
          </div>
          <div className="space-y-2">
            <label className="block text-sm font-medium text-slate-300">Email Address</label>
            <input
              type="email"
              name="email"
              value={loanApplication.email}
              onChange={handleInputChange}
              className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-2 text-white"
              required
            />
          </div>
          <div className="space-y-2">
            <label className="block text-sm font-medium text-slate-300">Phone Number</label>
            <input
              type="tel"
              name="phone"
              value={loanApplication.phone}
              onChange={handleInputChange}
              className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-2 text-white"
              required
            />
          </div>
          <div className="space-y-2">
            <label className="block text-sm font-medium text-slate-300">Loan Amount (₹)</label>
            <input
              type="number"
              name="amount"
              value={loanApplication.amount}
              onChange={handleInputChange}
              className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-2 text-white"
              required
              min="1000"
            />
          </div>
          <div className="space-y-2">
            <label className="block text-sm font-medium text-slate-300">Purpose</label>
            <select
              name="purpose"
              value={loanApplication.purpose}
              onChange={handleInputChange}
              className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-2 text-white"
              required
            >
              <option value="">Select Purpose</option>
              <option value="Personal">Personal</option>
              <option value="Business">Business</option>
              <option value="Education">Education</option>
            </select>
          </div>
          <div className="space-y-2">
            <label className="block text-sm font-medium text-slate-300">Duration (months)</label>
            <select
              name="duration"
              value={loanApplication.duration}
              onChange={handleInputChange}
              className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-2 text-white"
              required
            >
              <option value="">Select Duration</option>
              <option value="6">6 months</option>
              <option value="12">12 months</option>
              <option value="24">24 months</option>
              <option value="36">36 months</option>
            </select>
          </div>
        </div>
        <button
          type="submit"
          className="w-full bg-cyan-400 text-white px-6 py-3 rounded-lg font-medium 
                   hover:bg-cyan-500 disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={isLoading}
        >
          {isLoading ? 'Processing...' : 'Submit Application'}
        </button>
      </form>
      {applicationStatus === 'success' && (
        <div className="mt-4 bg-green-400/10 text-green-400 p-4 rounded-lg flex items-center gap-2">
          <CheckCircle className="w-5 h-5" />
          <p>Application Submitted Successfully!</p>
        </div>
      )}
    </div>
  );

  const renderAIAnalytics = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-slate-800 p-6 rounded-lg">
          <div className="flex items-center gap-2 mb-4">
            <Activity className="w-6 h-6 text-cyan-400" />
            <h3 className="text-lg font-medium text-white">Risk Distribution</h3>
          </div>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={riskData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {riskData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#1E293B',
                    border: '1px solid #475569'
                  }}
                  labelStyle={{ color: '#E2E8F0' }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div className="bg-slate-800 p-6 rounded-lg">
          <div className="flex items-center gap-2 mb-4">
            <ShieldCheck className="w-6 h-6 text-cyan-400" />
            <h3 className="text-lg font-medium text-white">Fraud Detection</h3>
          </div>
          <div className="space-y-4">
            <div className="bg-slate-700/50 p-4 rounded-lg">
              <div className="flex justify-between items-center">
                <span className="text-slate-300">Identity Verification</span>
                <span className="text-green-400">98% Accurate</span>
              </div>
            </div>
            <div className="bg-slate-700/50 p-4 rounded-lg">
              <div className="flex justify-between items-center">
                <span className="text-slate-300">Document Authenticity</span>
                <span className="text-green-400">95% Accurate</span>
              </div>
            </div>
            <div className="bg-slate-700/50 p-4 rounded-lg">
              <div className="flex justify-between items-center">
                <span className="text-slate-300">Behavior Analysis</span>
                <span className="text-yellow-400">87% Accurate</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return renderOverview();
      case 'applications':
        return renderLoanApplication();
      case 'ai-analytics':
        return renderAIAnalytics();
      default:
        return renderOverview();
    }
  };

  return (
    <div className="bg-slate-900 px-6 pt-24 pb-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex gap-4 mb-6">
          <button
            onClick={() => setActiveTab('overview')}
            className={`px-4 py-2 rounded-lg transition-colors ${
              activeTab === 'overview' 
                ? 'bg-cyan-400 text-white' 
                : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
            }`}
          >
            Overview
          </button>
          <button
            onClick={() => setActiveTab('applications')}
            className={`px-4 py-2 rounded-lg transition-colors ${
              activeTab === 'applications' 
                ? 'bg-cyan-400 text-white' 
                : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
            }`}
          >
            Applications
          </button>
          <button
            onClick={() => setActiveTab('ai-analytics')}
            className={`px-4 py-2 rounded-lg transition-colors ${
              activeTab === 'ai-analytics' 
                ? 'bg-cyan-400 text-white' 
                : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
            }`}
          >
            AI Analytics
          </button>
        </div>
        
        {renderContent()}
      </div>
    </div>
  );
};

export default LendingServices;