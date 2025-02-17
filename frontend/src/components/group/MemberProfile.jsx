import React,{useState,useEffect} from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../ui/card';
import { Shield, CreditCard, User, Users, Clock, ArrowUpRight, ArrowDownLeft } from 'lucide-react';
import '../../styles/components/MemberProfile.css';
import axios from 'axios';
const MemberProfile = () => {
  const [profileData,setprofileData]=useState({
      personalInfo: {
        name: "Sanika Chougule",
        email: "sanikaschougule@gmail.com",
        joinDate: "2025-01-23",
        phone: "+91 80103 21031",
        location: "Sangli"
      },
      trustScore: {
        score: 95,
        totalTransactions: 48,
        successRate: "98.5%",
        memberSince: "6 months"
      },
      groupMemberships: [
        {
          name: "Monthly Savings Club",
          role: "Member",
          joinedDate: "2024-08-15",
          contributionStatus: "Up to date"
        },
        {
          name: "Investment Group",
          role: "Admin",
          joinedDate: "2024-09-01",
          contributionStatus: "Up to date"
        }
      ],
      recentTransactions: [
        {
          id: 1,
          type: "contribution",
          amount: 2000,
          date: "2025-01-15",
          group: "Monthly Savings Club"
        },
        {
          id: 2,
          type: "withdrawal",
          amount: 1500,
          date: "2025-01-10",
          group: "Investment Group"
        }
      ],
      paymentMethods: [
        {
          id: 1,
          type: "UPI",
          details: "user@upi",
          isDefault: true
        },
        {
          id: 2,
          type: "Bank Account",
          details: "HDFC Bank ****1234",
          isDefault: false
        }
      ]
    });
    useEffect(()=>{
      async function profile(){
        try{
          const response=await axios.get('http://localhost:5000/api/auth/profile');
          setprofileData(response.data);
        }catch(e){
          console.log(e);
        }
      } 
    },[])
  return (
    <div className="profile-wrapper">
      {/* Personal Information */}
      <Card className="profile-card">
        <CardHeader className="card-header">
          <CardTitle className="card-title">Personal Information</CardTitle>
          <User className="header-icon" />
        </CardHeader>
        <CardContent>
          <div className="personal-info-grid">
            <div className="info-section">
              <h3 className="profile-name">{profileData.personalInfo.name}</h3>
              <div className="info-list">
                <p>Email: {profileData.personalInfo.email}</p>
                <p>Phone: {profileData.personalInfo.phone}</p>
                <p>Location: {profileData.personalInfo.location}</p>
                <p>Member Since: {profileData.personalInfo.joinDate}</p>
              </div>
            </div>
            <div className="trust-score-section">
              <div className="trust-header">
                <Shield className="header-icon" />
                <h4 className="trust-title">Trust Score</h4>
              </div>
              <div className="trust-score">{profileData.trustScore.score}</div>
              <div className="trust-stats">
                <p>Total Transactions: {profileData.trustScore.totalTransactions}</p>
                <p>Success Rate: {profileData.trustScore.successRate}</p>
                <p>Member Since: {profileData.trustScore.memberSince}</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Group Memberships */}
      <Card className="profile-card">
        <CardHeader className="card-header">
          <CardTitle className="card-title">Group Memberships</CardTitle>
          <Users className="header-icon" />
        </CardHeader>
        <CardContent>
          <div className="groups-grid">
            {profileData.groupMemberships.map((group, index) => (
              <div key={index} className="group-card">
                <div className="group-header">
                  <div>
                    <h4 className="group-name">{group.name}</h4>
                    <p className="group-role">Role: {group.role}</p>
                  </div>
                  <span className="status-badge">{group.contributionStatus}</span>
                </div>
                <p className="join-date">Joined: {group.joinedDate}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Recent Transactions */}
      <Card className="profile-card">
        <CardHeader className="card-header">
          <CardTitle className="card-title">Recent Transactions</CardTitle>
          <Clock className="header-icon" />
        </CardHeader>
        <CardContent>
          <div className="transactions-list">
            {profileData.recentTransactions.map((transaction) => (
              <div key={transaction.id} className="transaction-card">
                <div className="transaction-info">
                  {transaction.type === 'contribution' ? (
                    <ArrowUpRight className="transaction-icon contribution" />
                  ) : (
                    <ArrowDownLeft className="transaction-icon withdrawal" />
                  )}
                  <div>
                    <p className="transaction-type">
                      {transaction.type.charAt(0).toUpperCase() + transaction.type.slice(1)}
                    </p>
                    <p className="transaction-group">{transaction.group}</p>
                  </div>
                </div>
                <div className="transaction-details">
                  <p className="transaction-amount">₹{transaction.amount}</p>
                  <p className="transaction-date">{transaction.date}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Payment Methods */}
      <Card className="profile-card">
        <CardHeader className="card-header">
          <CardTitle className="card-title">Payment Methods</CardTitle>
          <CreditCard className="header-icon" />
        </CardHeader>
        <CardContent>
          <div className="payment-methods-list">
            {profileData.paymentMethods.map((method) => (
              <div key={method.id} className="payment-card">
                <div className="payment-info">
                  <p className="payment-type">{method.type}</p>
                  <p className="payment-details">{method.details}</p>
                </div>
                {method.isDefault && (
                  <span className="default-badge">Default</span>
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default MemberProfile;