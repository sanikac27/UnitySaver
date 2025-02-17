import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Users, Shield, Settings, TrendingUp, Clock, 
  IndianRupee, FileText, AlertCircle, CheckCircle, 
  PieChart, Calendar, Bell, UserCheck, AlertTriangle,
  Plus, UserPlus
} from 'lucide-react';
import '../../styles/components/GroupManagement.css';

const Groups = () => {
  const [selectedView, setSelectedView] = useState("admin");
  const [activeGroups, setActiveGroups] = useState([
    {
      id: 1,
      name: "Urban Savings Circle",
      members: 25,
      totalSavings: 125000,
      nextCollection: "2024-01-25",
      monthlyTarget: 50000,
      trustScore: 98,
      status: "active"
    },
    {
      id: 2,
      name: "Tech Community Fund",
      members: 30,
      totalSavings: 250000,
      nextCollection: "2024-01-28",
      monthlyTarget: 75000,
      trustScore: 95,
      status: "active"
    }
  ]);

  const AdminDashboard = () => {
    const [selectedMetric, setSelectedMetric] = useState('all');
    
    const metrics = [
      { label: "Total Groups", value: "12", icon: <Users className="w-5 h-5" /> },
      { label: "Trust Score", value: "96%", icon: <Shield className="w-5 h-5" /> },
      { label: "Total Savings", value: "₹12.5L", icon: <IndianRupee className="w-5 h-5" /> },
      { label: "Collection Rate", value: "98%", icon: <TrendingUp className="w-5 h-5" /> }
    ];

    return (
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="admin-dashboard"
      >
        <div className="metrics-grid">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="metric-card">
                <div className="metric-content">
                  <div className="metric-info">
                    <div className="metric-icon">{metric.icon}</div>
                    <div>
                      <p className="metric-label">{metric.label}</p>
                      <h3 className="metric-value">{metric.value}</h3>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Create Group Card */}
        <div className="card">
          <div className="card-header">
            <h2>Create New Group</h2>
          </div>
          <div className="card-content">
            <div className="action-button-container">
              <button className="action-button" onClick={() => console.log("Create group")}>
                <Plus className="w-4 h-4 mr-2" />
                Create New Savings Group
              </button>
            </div>
          </div>
        </div>

        <div className="admin-actions">
          <div className="action-card">
            <div className="card-header">
              <h2>AI Monitoring Status</h2>
            </div>
            <div className="card-content">
              <div className="quick-actions-grid">
                <div className="monitoring-card">
                  <CheckCircle className="w-4 h-4 text-emerald-400" />
                  <h3>Transaction Health</h3>
                  <p>All recent transactions verified</p>
                </div>
                <div className="monitoring-card">
                  <AlertTriangle className="w-4 h-4 text-amber-400" />
                  <h3>Risk Assessment</h3>
                  <p>2 groups require attention</p>
                </div>
                <div className="monitoring-card">
                  <TrendingUp className="w-4 h-4 text-blue-400" />
                  <h3>Collection Forecast</h3>
                  <p>98% expected collection rate</p>
                </div>
                <div className="monitoring-card">
                  <Shield className="w-4 h-4 text-purple-400" />
                  <h3>Trust Analysis</h3>
                  <p>High trust score maintained</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="groups-list">
          <div className="card">
            <div className="card-header">
              <h2>Active Groups</h2>
            </div>
            <div className="card-content">
              <div className="groups-grid">
                {activeGroups.map((group, index) => (
                  <motion.div
                    key={group.id}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className="group-card"
                  >
                    <div className="group-content">
                      <div className="group-header">
                        <div>
                          <h3 className="group-name">{group.name}</h3>
                          <p className="group-stats">
                            {group.members} members | ₹{group.totalSavings.toLocaleString()}
                          </p>
                          <div className="trust-badge">
                            <Shield className="w-4 h-4" />
                            Trust Score: {group.trustScore}%
                          </div>
                        </div>
                        <button className="outline-button">
                          Manage
                        </button>
                      </div>
                      <div className="group-details">
                        <div className="detail-item">
                          <Calendar className="w-4 h-4" />
                          Next Collection: {group.nextCollection}
                        </div>
                        <div className="detail-item">
                          <IndianRupee className="w-4 h-4" />
                          Monthly Target: ₹{group.monthlyTarget.toLocaleString()}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    );
  };

  const UserDashboard = () => {
    const [selectedGroup, setSelectedGroup] = useState(null);
    
    const userGroups = [
      {
        id: 1,
        name: "Urban Savings Circle",
        role: "Member",
        contribution: 5000,
        nextPayment: "2024-01-25",
        trustScore: 98,
        notifications: 2
      }
    ];

    const availableGroups = [
      {
        id: 3,
        name: "Local Business Circle",
        members: 20,
        monthlyContribution: 3000,
        trustScore: 95
      },
      {
        id: 4,
        name: "Community Savings Group",
        members: 15,
        monthlyContribution: 2000,
        trustScore: 92
      }
    ];

    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="user-dashboard"
      >
        <div className="user-overview">
          <div className="overview-card">
            <div className="card-header">
              <h2>My Groups Overview</h2>
            </div>
            <div className="card-content">
              <div className="user-stats-grid">
                <div className="stat-item">
                  <IndianRupee className="w-5 h-5" />
                  <p>Total Savings</p>
                  <h3>₹52,500</h3>
                </div>
                <div className="stat-item">
                  <Shield className="w-5 h-5" />
                  <p>Trust Score</p>
                  <h3>98%</h3>
                </div>
                <div className="stat-item">
                  <Clock className="w-5 h-5" />
                  <p>Next Payment</p>
                  <h3>3 days</h3>
                </div>
                <div className="stat-item">
                  <CheckCircle className="w-5 h-5" />
                  <p>Payment Status</p>
                  <h3>Up to date</h3>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Available Groups to Join */}
        <div className="card">
          <div className="card-header">
            <h2>Available Groups to Join</h2>
          </div>
          <div className="card-content">
            <div className="groups-grid">
              {availableGroups.map((group, index) => (
                <motion.div
                  key={group.id}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="group-card"
                >
                  <div className="group-content">
                    <div className="group-header">
                      <div>
                        <h3 className="group-name">{group.name}</h3>
                        <p className="group-stats">
                          {group.members} members | ₹{group.monthlyContribution} monthly
                        </p>
                        <div className="trust-badge">
                          <Shield className="w-4 h-4" />
                          Trust Score: {group.trustScore}%
                        </div>
                      </div>
                    </div>
                    <div className="group-actions">
                      <button className="action-button">
                        <UserPlus className="w-4 h-4 mr-2" />
                        Join Group
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <div className="my-groups">
          <div className="card">
            <div className="card-header">
              <h2>My Active Groups</h2>
            </div>
            <div className="card-content">
              {userGroups.map((group, index) => (
                <motion.div
                  key={group.id}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="user-group-card"
                >
                  <div className="group-content">
                    <div className="group-header">
                      <div>
                        <h3 className="group-name">{group.name}</h3>
                        <p className="group-role">Role: {group.role}</p>
                        <div className="trust-badge">
                          <Shield className="w-4 h-4" />
                          Trust Score: {group.trustScore}%
                        </div>
                      </div>
                      <div className="notification-badge">
                        <Bell className="w-4 h-4" />
                        <span>{group.notifications}</span>
                      </div>
                    </div>
                    <div className="group-details">
                      <div className="detail-item">
                        <IndianRupee className="w-4 h-4" />
                        <p>Monthly Contribution: ₹{group.contribution.toLocaleString()}</p>
                      </div>
                      <div className="detail-item">
                        <Calendar className="w-4 h-4" />
                        <p>Next Payment: {group.nextPayment}</p>
                      </div>
                    </div>
                    <div className="group-actions">
                      <button className="outline-button">View Details</button>
                      <button className="action-button">Make Payment</button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    );
  };

  return (
    <div className="groups-container">
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="groups-header"
      >
        <h1>AI-Powered Group Management</h1>
      </motion.div>

      <div className="custom-tabs">
        <div className="tabs-list">
          <button 
            className={`tab-button ${selectedView === 'admin' ? 'active' : ''}`}
            onClick={() => setSelectedView('admin')}
          >
            Admin View
          </button>
          <button 
            className={`tab-button ${selectedView === 'user' ? 'active' : ''}`}
            onClick={() => setSelectedView('user')}
          >
            User View
          </button>
        </div>
        
        <div className="tab-content">
          <AnimatePresence mode="wait">
            {selectedView === 'admin' && <AdminDashboard />}
            {selectedView === 'user' && <UserDashboard />}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Groups;