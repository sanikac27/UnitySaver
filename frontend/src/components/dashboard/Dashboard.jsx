import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../ui/card';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { Download, Filter, TrendingUp, TrendingDown, Users, DollarSign, ArrowRight } from 'lucide-react';
import '../../styles/components/dashboard.css';

const SavingsManagement = () => {
  const [activeTab, setActiveTab] = useState('overview');

  // Sample data
  const savingsData = [
    { month: 'Jan', savings: 5000, contributions: 6000, amount: 5000 },
    { month: 'Feb', savings: 7500, contributions: 8000, amount: 7500 },
    { month: 'Mar', savings: 8800, contributions: 9000, amount: 8800 },
    { month: 'Apr', savings: 9200, contributions: 9500, amount: 9200 },
    { month: 'May', savings: 11000, contributions: 11200, amount: 11000 },
    { month: 'Jun', savings: 12500, contributions: 13000, amount: 12500 },
  ];

  const lendingData = [
    { name: 'Active Loans', value: 65 },
    { name: 'Repaid', value: 25 },
    { name: 'Defaulted', value: 10 },
  ];

  const recentTransactions = [
    { id: 1, type: 'Contribution', amount: 1000, status: 'Completed', date: '2025-01-15' },
    { id: 2, type: 'Loan Payment', amount: 2500, status: 'Pending', date: '2025-01-14' },
    { id: 3, type: 'Withdrawal', amount: 500, status: 'Completed', date: '2025-01-13' },
  ];

  const COLORS = ['#0088FE', '#00C49F', '#FF8042'];

  return (
    <div className="p-6 bg-slate-900 min-h-screen transition-all duration-300">
      {/* Navigation Tabs */}
      <div className="flex space-x-4 mb-6">
        {['overview', 'analytics', 'transactions'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-lg transition-all duration-300 transform hover:scale-105 
              ${activeTab === tab 
                ? 'bg-cyan-400 text-white shadow-lg' 
                : 'bg-slate-800 text-slate-300 hover:bg-slate-700'}`}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
        {[
          { title: 'Total Savings', value: '₹12,500', trend: '+15.3%', icon: DollarSign },
          { title: 'Active Groups', value: '3', trend: '+1', icon: Users },
          { title: 'Trust Score', value: '95%', trend: '+2.4%', icon: TrendingUp },
          { title: 'Default Rate', value: '2.3%', trend: '-0.5%', icon: TrendingDown },
        ].map((stat, index) => (
          <Card 
            key={index} 
            className="bg-slate-800 border-none transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
          >
            <CardContent className="p-6">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-slate-400">{stat.title}</p>
                  <h3 className="text-2xl font-bold text-white animate-fadeIn">{stat.value}</h3>
                  <p className={`text-sm flex items-center ${
                    stat.trend.startsWith('+') ? 'text-green-400' : 'text-red-400'
                  }`}>
                    {stat.trend.startsWith('+') ? <TrendingUp className="w-4 h-4 mr-1" /> : <TrendingDown className="w-4 h-4 mr-1" />}
                    {stat.trend}
                  </p>
                </div>
                <stat.icon className="w-8 h-8 text-cyan-400" />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Main Content Area */}
      <div className="space-y-6">
        {/* Savings Growth Chart */}
        <Card className="bg-slate-800 border-none transform transition-all duration-300 hover:shadow-xl">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-white">Savings & Contributions Trend</CardTitle>
            <div className="flex space-x-4">
              <Filter className="w-5 h-5 text-slate-400 cursor-pointer hover:text-white transition-colors" />
              <Download className="w-5 h-5 text-slate-400 cursor-pointer hover:text-white transition-colors" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={savingsData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                  <XAxis dataKey="month" stroke="#94A3B8" />
                  <YAxis stroke="#94A3B8" />
                  <Tooltip />
                  <Line 
                    type="monotone" 
                    dataKey="savings" 
                    stroke="#22D3EE" 
                    strokeWidth={2}
                    dot={{ r: 4 }}
                    activeDot={{ r: 8 }}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="contributions" 
                    stroke="#0088FE" 
                    strokeWidth={2}
                    dot={{ r: 4 }}
                    activeDot={{ r: 8 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Bottom Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Lending Distribution */}
          <Card className="bg-slate-800 border-none transform transition-all duration-300 hover:shadow-xl">
            <CardHeader>
              <CardTitle className="text-white">Lending Distribution</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={lendingData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={80}
                      fill="#8884d8"
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {lendingData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="grid grid-cols-3 gap-4 mt-6">
                {lendingData.map((entry, index) => (
                  <div key={entry.name} className="text-center transform transition-all duration-300 hover:scale-105">
                    <div className="text-sm text-slate-400">{entry.name}</div>
                    <div className="text-lg font-bold text-white">{entry.value}%</div>
                    <div className="w-4 h-4 rounded-full mx-auto mt-2" style={{ backgroundColor: COLORS[index] }} />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Recent Transactions */}
          <Card className="bg-slate-800 text-white border-none transform transition-all duration-300 hover:shadow-xl">
            <CardHeader>
              <CardTitle>Recent Transactions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentTransactions.map((transaction) => (
                  <div 
                    key={transaction.id} 
                    className="flex justify-between items-center p-4 bg-slate-700 rounded-lg transform transition-all duration-300 hover:scale-102 hover:bg-slate-600"
                  >
                    <div>
                      <div className="font-medium">{transaction.type}</div>
                      <div className="text-sm text-slate-300">{transaction.date}</div>
                    </div>
                    <div>
                      <div className="text-right font-medium">₹{transaction.amount}</div>
                      <div className={`text-sm ${
                        transaction.status === 'Completed' ? 'text-green-400' : 'text-yellow-400'
                      }`}>
                        {transaction.status}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default SavingsManagement;