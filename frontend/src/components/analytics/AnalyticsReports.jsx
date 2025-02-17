import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../ui/card';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { Download, Filter, TrendingUp, TrendingDown, Users, DollarSign } from 'lucide-react';
import '../../styles/components/analytics.css';

const AnalyticsReports = () => {
  // Sample data for charts
  const savingsTrends = [
    { month: 'Jan', savings: 5000, contributions: 6000 },
    { month: 'Feb', savings: 7500, contributions: 8000 },
    { month: 'Mar', savings: 8800, contributions: 9000 },
    { month: 'Apr', savings: 9200, contributions: 9500 },
    { month: 'May', savings: 11000, contributions: 11200 },
    { month: 'Jun', savings: 12500, contributions: 13000 },
  ];

  const lendingData = [
    { name: 'Active Loans', value: 65 },
    { name: 'Repaid', value: 25 },
    { name: 'Defaulted', value: 10 },
  ];

  const COLORS = ['#0088FE', '#00C49F', '#FF8042'];

  return (
    <div className="p-6 bg-slate-900 min-h-screen">
      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
        <Card className="bg-slate-800 border-none">
          <CardContent className="p-6">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-slate-400">Total Savings</p>
                <h3 className="text-2xl font-bold text-white">₹12,500</h3>
                <p className="text-green-400 text-sm flex items-center">
                  <TrendingUp className="w-4 h-4 mr-1" /> +15.3%
                </p>
              </div>
              <DollarSign className="w-8 h-8 text-cyan-400" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-slate-800 border-none">
          <CardContent className="p-6">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-slate-400">Active Loans</p>
                <h3 className="text-2xl font-bold text-white">₹8,750</h3>
                <p className="text-yellow-400 text-sm flex items-center">
                  <TrendingUp className="w-4 h-4 mr-1" /> +5.2%
                </p>
              </div>
              <Users className="w-8 h-8 text-cyan-400" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-slate-800 border-none">
          <CardContent className="p-6">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-slate-400">Monthly Growth</p>
                <h3 className="text-2xl font-bold text-white">18.5%</h3>
                <p className="text-green-400 text-sm flex items-center">
                  <TrendingUp className="w-4 h-4 mr-1" /> +2.4%
                </p>
              </div>
              <TrendingUp className="w-8 h-8 text-cyan-400" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-slate-800 border-none">
          <CardContent className="p-6">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-slate-400">Default Rate</p>
                <h3 className="text-2xl font-bold text-white">2.3%</h3>
                <p className="text-red-400 text-sm flex items-center">
                  <TrendingDown className="w-4 h-4 mr-1" /> +0.5%
                </p>
              </div>
              <TrendingDown className="w-8 h-8 text-cyan-400" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Savings Trend Chart */}
      <Card className="bg-slate-800 border-none mb-6">
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
              <LineChart data={savingsTrends}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey="month" stroke="#94A3B8" />
                <YAxis stroke="#94A3B8" />
                <Tooltip />
                <Line type="monotone" dataKey="savings" stroke="#22D3EE" strokeWidth={2} />
                <Line type="monotone" dataKey="contributions" stroke="#0088FE" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      {/* Lending Distribution */}
      <Card className="bg-slate-800 border-none">
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
              <div key={entry.name} className="text-center">
                <div className="text-sm text-slate-400">{entry.name}</div>
                <div className="text-lg font-bold text-white">{entry.value}%</div>
                <div className="w-4 h-4 rounded-full mx-auto mt-2" style={{ backgroundColor: COLORS[index] }} />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AnalyticsReports;