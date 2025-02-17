import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../ui/card';
import { 
  CreditCard, 
  ArrowUpRight, 
  ArrowDownLeft, 
  Clock,
  Filter,
  Download
} from 'lucide-react';
import '../../styles/components/transactions.css';

const TransactionInterface = () => {
  const [transactions] = useState([
    {
      id: 1,
      type: 'deposit',
      amount: 5000,
      status: 'completed',
      date: '2025-01-17',
      account: 'Primary Savings',
      reference: 'TXN123456'
    },
    {
      id: 2,
      type: 'withdrawal',
      amount: 2500,
      status: 'pending',
      date: '2025-01-16',
      account: 'Investment Account',
      reference: 'TXN123457'
    },
    {
      id: 3,
      type: 'payment',
      amount: 3500,
      status: 'completed',
      date: '2025-01-15',
      account: 'Primary Savings',
      reference: 'TXN123458'
    }
  ]);

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed':
        return 'text-green-400';
      case 'pending':
        return 'text-yellow-400';
      case 'failed':
        return 'text-red-400';
      default:
        return 'text-slate-400';
    }
  };

  const getTransactionIcon = (type) => {
    switch (type) {
      case 'deposit':
        return <ArrowUpRight className="w-6 h-6 text-green-400" />;
      case 'withdrawal':
        return <ArrowDownLeft className="w-6 h-6 text-red-400" />;
      case 'payment':
        return <CreditCard className="w-6 h-6 text-blue-400" />;
      default:
        return <Clock className="w-6 h-6 text-slate-400" />;
    }
  };

  return (
    <div className="transaction-container">
      {/* Quick Actions Section */}
      <div className="quick-actions-grid">
        <Card className="quick-action-card">
          <CardContent className="quick-action-content">
            <ArrowUpRight className="quick-action-icon" />
            <div className="quick-action-text">
              <h3>New Deposit</h3>
              <p>Make a deposit to your account</p>
            </div>
          </CardContent>
        </Card>

        <Card className="quick-action-card">
          <CardContent className="quick-action-content">
            <ArrowDownLeft className="quick-action-icon" />
            <div className="quick-action-text">
              <h3>Make Withdrawal</h3>
              <p>Withdraw from your account</p>
            </div>
          </CardContent>
        </Card>

        <Card className="quick-action-card">
          <CardContent className="quick-action-content">
            <CreditCard className="quick-action-icon" />
            <div className="quick-action-text">
              <h3>Make Payment</h3>
              <p>Send a payment</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Transaction History Section */}
      <Card className="transaction-history-card">
        <CardHeader className="transaction-history-header">
          <CardTitle>Transaction History</CardTitle>
          <div className="transaction-actions">
            <Filter className="action-icon" />
            <Download className="action-icon" />
          </div>
        </CardHeader>
        <CardContent>
          <div className="transaction-list">
            {transactions.map(transaction => (
              <div key={transaction.id} className="transaction-item">
                <div className="transaction-details-left">
                  {getTransactionIcon(transaction.type)}
                  <div className="transaction-info">
                    <p className="transaction-type">
                      {transaction.type.charAt(0).toUpperCase() + transaction.type.slice(1)}
                    </p>
                    <p className="transaction-account">{transaction.account}</p>
                    <p className="transaction-date">{transaction.date}</p>
                  </div>
                </div>
                <div className="transaction-details-right">
                  <p className="transaction-amount">₹{transaction.amount}</p>
                  <p className="transaction-reference">{transaction.reference}</p>
                  <p className={`transaction-status ${transaction.status}`}>
                    {transaction.status.charAt(0).toUpperCase() + transaction.status.slice(1)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default TransactionInterface;