import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../ui/card';
import { Shield, AlertTriangle, CheckCircle, XCircle, Bell, Lock, AlertCircle, Users } from 'lucide-react';
import '../../styles/components/security.css';

const SecurityDashboard = () => {
  const [securityAlerts] = useState([
    {
      id: 1,
      type: 'suspicious_login',
      severity: 'high',
      message: 'Unusual login attempt detected from new device',
      timestamp: '2025-01-15 14:30',
      status: 'pending'
    },
    {
      id: 2,
      type: 'large_transaction',
      severity: 'medium',
      message: 'Large transaction detected above normal threshold',
      timestamp: '2025-01-15 13:45',
      status: 'resolved'
    },
    {
      id: 3,
      type: 'multiple_attempts',
      severity: 'low',
      message: 'Multiple failed login attempts',
      timestamp: '2025-01-15 12:15',
      status: 'resolved'
    }
  ]);

  const getSeverityColor = (severity) => {
    switch (severity) {
      case 'high':
        return 'severity-high';
      case 'medium':
        return 'severity-medium';
      case 'low':
        return 'severity-low';
      default:
        return 'severity-default';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'resolved':
        return <CheckCircle className="status-icon status-resolved" />;
      case 'pending':
        return <AlertCircle className="status-icon status-pending" />;
      default:
        return <XCircle className="status-icon status-error" />;
    }
  };

  return (
    <div className="security-dashboard">
      {/* Security Status */}
      <Card className="security-card status-card">
        <CardContent className="card-content">
          <div className="status-container">
            <Shield className="status-shield" />
            <div className="status-text">
              <h2 className="status-title">Security Status: Strong</h2>
              <p className="status-description">Your account is currently well-protected</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Security Metrics */}
      <div className="metrics-grid">
        <Card className="security-card metric-card">
          <CardContent className="card-content">
            <div className="metric-container">
              <div>
                <p className="metric-label">Trust Score</p>
                <h3 className="metric-value">95/100</h3>
              </div>
              <Lock className="metric-icon" />
            </div>
          </CardContent>
        </Card>

        <Card className="security-card metric-card">
          <CardContent className="card-content">
            <div className="metric-container">
              <div>
                <p className="metric-label">Active Sessions</p>
                <h3 className="metric-value">2</h3>
              </div>
              <Users className="metric-icon" />
            </div>
          </CardContent>
        </Card>

        <Card className="security-card metric-card">
          <CardContent className="card-content">
            <div className="metric-container">
              <div>
                <p className="metric-label">Pending Alerts</p>
                <h3 className="metric-value">1</h3>
              </div>
              <Bell className="metric-icon" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Security Alerts */}
      <Card className="security-card alerts-card">
        <CardHeader>
          <CardTitle className="card-title">Security Alerts</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="alerts-container">
            {securityAlerts.map(alert => (
              <div key={alert.id} className="alert-item">
                <div className="alert-content">
                  <AlertTriangle className={`alert-icon ${getSeverityColor(alert.severity)}`} />
                  <div>
                    <p className="alert-message">{alert.message}</p>
                    <p className="alert-timestamp">{alert.timestamp}</p>
                  </div>
                </div>
                <div className="alert-actions">
                  {getStatusIcon(alert.status)}
                  {alert.status === 'pending' && (
                    <button className="review-button">
                      Review
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Security Recommendations */}
      <Card className="security-card recommendations-card">
        <CardHeader>
          <CardTitle className="card-title">Security Recommendations</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="recommendations-container">
            <div className="recommendation-item">
              <div className="recommendation-content">
                <Shield className="recommendation-icon" />
                <div>
                  <p className="recommendation-title">Enable Two-Factor Authentication</p>
                  <p className="recommendation-description">Add an extra layer of security to your account</p>
                </div>
                <button className="enable-button">
                  Enable
                </button>
              </div>
            </div>

            <div className="recommendation-item">
              <div className="recommendation-content">
                <Lock className="recommendation-icon" />
                <div>
                  <p className="recommendation-title">Update Password</p>
                  <p className="recommendation-description">Last updated 3 months ago</p>
                </div>
                <button className="update-button">
                  Update
                </button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SecurityDashboard;